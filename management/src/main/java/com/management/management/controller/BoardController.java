package com.management.management.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
public class BoardController {
    @GetMapping("api/data")
    public String test() {
        return "hello world";
    }

}
