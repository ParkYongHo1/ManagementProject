package com.management.management.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.RedirectView;

import com.management.management.DTO.Store;
import com.management.management.DTO.User;
import com.management.management.mapper.StoreRepository;
import com.management.management.service.StoreService;
import com.management.management.service.UserService;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private StoreService storeService;
    /**
     * 로그인
     * @param user
     * @return
     */
    @PostMapping("/login")
    public String login(@RequestBody User user) {
        String loginResult = userService.login(user.getUserId(), user.getUserPassword());

        switch (loginResult) {
            case "Invalid user ID.":
                System.out.println("아이디가 틀렸습니다.");
                return "Invalid credentials.";
            case "Invalid password.":
                System.out.println("비밀번호가 틀렸습니다.");
                return "Invalid credentials.";
            case "Login successful!":
                System.out.println("로그인 성공");
                return "Login successful!";
            case "no user":
                System.out.println("퇴사한 직원입니다."); 
                return "no user!";   
            default:
                return "Invalid credentials.";
        }
    }
   /**
    * 아이디 찾기
    * @param user
    * @return
    */
    @PostMapping("/findingId")
    public ResponseEntity<String> findingId(@RequestBody User user){
        String findResult = userService.findingId(user.getUserName(), user.getUserBirth(), user.getUserEmail());

        if(findResult.startsWith("Invalid no User!")){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(findResult);
        }else{
            System.out.println(findResult);
            return ResponseEntity.ok(findResult);
        }
        
    }
    /**
     * 비밀번호 찾기
     * @param user
     * @return
     */
    @PostMapping("/findingPwd")
    public ResponseEntity<String> findingPwd(@RequestBody User user){
        String findPwdResult = userService.findingPwd(user.getUserId(), user.getUserBirth(), user.getUserEmail());
        if(findPwdResult.startsWith("Invalid no User!")){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(findPwdResult);
        }else{
            System.out.println(findPwdResult);
            return ResponseEntity.ok(findPwdResult);
        }
    }

    /**
     * 회원가입
     * @param user
     * @return
     */
    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody User user){
        if (user.getStore() == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Store 정보가 없습니다.");
        }
        
        Optional<Store> findStore = storeService.findByStoreCode(user.getStore().getStoreCode());
        if(!findStore.isPresent()){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("매장인증실패");
        }

        String registerResult = userService.registerUser(user);

        switch (registerResult) {
            case "중복아이디":
                return ResponseEntity.status(HttpStatus.CONFLICT).body(registerResult);
            case "비밀번호불일치":
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(registerResult);
            case "가입성공" :
                return ResponseEntity.status(HttpStatus.CREATED).body(registerResult); 
            default:
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("비정상 오류.");   
        }
    }
    /**
     * 사용자 가입승인
     * @param user
     * @return
     */
    @PostMapping("/certify")
    public ResponseEntity<String> certifyUser(@RequestParam String userId){
        String result = userService.certifyUser(userId);
        if("success".equals(result)){
            return ResponseEntity.ok(result);
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(result);
    }

    /**
     * 사용자 정보 수정(비밀번호,휴대폰번호,이메일번경)
     * @param user
     * @return
     */
    @PostMapping("/update/{userId}")
    public ResponseEntity<String> updateUser(@PathVariable String userId, @RequestBody User updatedUser ){
        String result = userService.infoUpdate(userId, updatedUser);
        if("UPDATE SUCCESS!".equals(result)){
            return ResponseEntity.ok(result);
        }else{
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(result);
        }
    }

    /**
     * 사용자 퇴사 처리
     */
    @PostMapping("/userDelete/{userId}")
    public ResponseEntity<String> deleteUser(@PathVariable String userId,@RequestBody User updatedUser){
        String result = userService.userDelete(userId);
        if("success".equals(result)){
            return ResponseEntity.ok(result);
        }else{
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(result);
        }
    }
}