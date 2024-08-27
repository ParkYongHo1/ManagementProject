package com.management.management.mapper;

import java.util.List;
import java.util.Optional;

import org.apache.ibatis.annotations.Param;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.management.management.DTO.Store;

@Repository
public interface StoreRepository extends JpaRepository<Store, Long> {

    @Query("select s from Store s where s.storeCode = :storeCode")
    Optional<Store> findAllByStoreCode(@Param("storeCode") String storeCode);
}
