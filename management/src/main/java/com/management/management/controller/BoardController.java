package com.management.management.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
public class BoardController {
    @GetMapping("api/data")
    public String test() {
        return "hello world";
    }

}
