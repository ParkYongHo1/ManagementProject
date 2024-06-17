package com.management.management.controller;

import org.springframework.beans.factory.annotation.Autowired;
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

    @PostMapping("/login")
    public String login(@RequestBody User user) {
        User loggedInUser = userService.login(user.getUserId(), user.getUserPassword());
        if (loggedInUser != null) {
            return "Login successful!";
        } else {
            return "Invalid credentials.";
        }
    }
}