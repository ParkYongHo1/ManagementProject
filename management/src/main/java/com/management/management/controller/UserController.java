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
   
    
}