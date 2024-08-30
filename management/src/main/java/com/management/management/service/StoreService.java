package com.management.management.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

import com.management.management.DTO.Store;
import com.management.management.mapper.StoreRepository;

@Service
public class StoreService {
    @Autowired 
    private StoreRepository storeRepository;

    public Optional<Store> findByStoreCode(String storeCode) {
       return storeRepository.findByStoreCode(storeCode);
    }
}
