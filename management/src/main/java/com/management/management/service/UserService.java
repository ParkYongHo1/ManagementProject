package com.management.management.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.management.management.DTO.User;
import com.management.management.mapper.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User login(String userId, String userPassword) {
        return userRepository.findByUserId(userId)
                .filter(user -> user.getUserPassword().equals(userPassword))
                .orElse(null);
    }
}