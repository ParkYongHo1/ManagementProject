package com.management.management.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.management.management.DTO.Store;
import com.management.management.DTO.User;
import com.management.management.mapper.StoreRepository;
import com.management.management.mapper.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired 
    private StoreRepository storeRepository;
    /**
     * 로그인
     * @param userId
     * @param userPassword
     * @return
     */
    public String login(String userId,String userPassword){
        Optional<User> optionalUser = userRepository.findByUserId(userId);

        if(optionalUser.isEmpty()){
            //아이디가 존재하지 않을 경우
            return "Invalid user ID.";
        }

        User user = optionalUser.get();
        if(!user.getUserPassword().equals(userPassword)){
            //비밀번호가 틀렸을 경우
            return "Invalid password.";
        }

        //퇴사자 로그인 차단.
        if(user.getUserQuitdate() != null){
            return "no user";
        }

        //로그인 성공
        return "Login successful!";
   }
   
   /**
    * 아이디 찾기
    * @param userName
    * @param userBirth
    * @param userEmail
    * @return
    */
   public String findingId(String userName,String userBirth,String userEmail){
        Optional<User> optionalFind = userRepository.findByName(userName, userBirth, userEmail);

        //회원정보가 일치하지 않을경우
        if(optionalFind.isEmpty()){
            System.out.println("가입된 정보가 없습니다.");
            return "Invalid no User!";
        }
        //회원정보가 일치한 경우
        User user = optionalFind.get();
        return "고객님의 아이디는 "+user.getUserId()+"입니다.";
   }
   
   /**
    * 패스워드 찾기(임시비밀번호 전송)
    * @param userId
    * @param userBirth
    * @param userEmail
    * @return
    */
   public String findingPwd(String userId,String userBirth,String userEmail){
    Optional<User> pwdFind = userRepository.findByPass(userId, userBirth, userEmail);

    //회원정보가 일치하지 않을경우
    if(pwdFind.isEmpty()){
        System.out.println("가입된 정보가 없습니다.");
        return "Invalid no User!";
    }
    //회원정보가 일치한 경우
    User user = pwdFind.get();
    return "임시비밀번호를 이메일로 전송해드리겠습니다."+user.getUserPassword(); //임시 나중에 바꿀예정!!
   }

   /**
    * 회원가입
    * @param user
    * @return
    */
   public String registerUser(User user){
    if(userRepository.findByUserId(user.getUserId()).isPresent()){
        return "중복아이디";
    }
    if(!user.getUserPassword().equals(user.getUserConfirmPassword())){
        return "비밀번호불일치";
    } 
    if(user.getStore() == null || user.getStore().getStoreCode() == null){
        return "매장정보가 유효하지 않습니다.";
    }

    Optional<Store> findStore = storeRepository.findByStoreCode(user.getStore().getStoreCode());
    if(!findStore.isPresent()){
        return "매장인증실패";
    }
    userRepository.save(user);
    return "가입성공";
   }

    /**
    * 사용자 가입승인
    * @param user
    * @return
    */
    public String certifyUser(String userId){
        Optional<User> userOpt = userRepository.findByUserId(userId);
        if(userOpt.isPresent()){
            User user = userOpt.get();
            user.setUserCert("Y");
            userRepository.save(user);
            return "success";
        }
        return "fail";
    }

    /**
     * 사용자 정보 수정(비밀번호,휴대폰번호,이메일번경)
     * @param user
     * @return
     */
    public String infoUpdate(String userId,User updatedUser){
        Optional<User> userOpt = userRepository.findByUserId(userId);
        if(userOpt.isPresent()){
           User exitUser = userOpt.get();

           //비밀번호가 NULL이 거나 비밀번호가 일치하지않을때 체크
           if(updatedUser.getUserPassword() != null &&  !updatedUser.getUserPassword().isEmpty() && updatedUser.getUserPassword().equalsIgnoreCase(updatedUser.getUserConfirmPassword())) {   
            exitUser.setUserPassword(updatedUser.getUserPassword());
            exitUser.setUserConfirmPassword(updatedUser.getUserConfirmPassword());
        }else{
            return "비밀번호 재입력 바람.";
           }

           userRepository.save(exitUser);
           return "UPDATE SUCCESS!";
        }else{
            return "UPDATE FAIL!";
        }

    }

    /**
     * 사용자 퇴사처리
     */
    public String userDelete(String userId){
        Optional<User> userOpt = userRepository.findByUserId(userId);
        LocalDate currentDate = LocalDate.now();

        if(userOpt.isPresent()){
            User user = userOpt.get();
            user.setUserQuitdate(currentDate);
            userRepository.save(user);
            return "success";
        }
        return "fail";
    }
}