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

   
}