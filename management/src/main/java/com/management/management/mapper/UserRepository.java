package com.management.management.mapper;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import com.management.management.DTO.User;

public interface UserRepository extends JpaRepository<User, Long> {
    // Optional -> null값이 있을 수 있을때 사용
    Optional<User> findByUserId(String userId);
}