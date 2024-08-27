package com.management.management.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.RedirectView;

import com.management.management.DTO.User;
import com.management.management.service.UserService;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserService userService;

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
}