package com.management.management.service;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.management.management.DTO.User;
import com.management.management.mapper.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

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

}