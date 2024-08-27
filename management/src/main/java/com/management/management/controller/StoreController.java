package com.management.management.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.management.management.DTO.Store;
import com.management.management.service.StoreService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.Optional;

@RestController
@RequestMapping("/store")
public class StoreController {

    @Autowired 
    private StoreService storeService;

    @PostMapping("/auth-store")
    public ResponseEntity<Store> authStore(@RequestBody Store store) {
        System.out.println("매장 인증 진입");
        System.out.println("store : " + store);
        Optional<Store> foundStore = storeService.findByStoreCode(store.getStoreCode());
        if (foundStore.isPresent()) {
            return new ResponseEntity<>(foundStore.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }
}
