package com.management.management.mapper;

import java.lang.StackWalker.Option;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.management.management.DTO.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    
    //로그인
    @Query("SELECT s FROM User s WHERE s.userId =?1")
    Optional<User> findByUserId(String userId);
    @Query("SELECT s FROM User s WHERE s.userPassword =?1")
    Optional<User> findByUserPassword(String userPassword);

    //아이디 찾기(이름,생년월일,이메일)
    @Query("SELECT s FROM User s WHERE s.userName =?1 AND s.userBirth = ?2 AND s.userEmail = ?3")
    Optional<User> findByName(String userName,String userBirth,String userEmail);

    //패스워드 찾기
    @Query("SELECT s FROM User s WHERE s.userId =?1 AND s.userBirth = ?2 AND s.userEmail = ?3")
    Optional<User> findByPass(String userId,String userBirth,String userEmail);

    
}