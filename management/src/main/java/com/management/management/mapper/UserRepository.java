package com.management.management.mapper;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.management.management.DTO.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    
    @Query("SELECT s FROM User s WHERE s.userId =?1")
    Optional<User> findByUserId(String userId);

    @Query("SELECT s FROM User s WHERE s.userPassword =?1")
    Optional<User> findByUserPassword(String userPassword);
}