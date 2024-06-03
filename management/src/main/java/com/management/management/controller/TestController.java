package com.management.management.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.management.management.DTO.Test;
import com.management.management.service.BoardService;

@RestController
public class TestController {
    @Autowired
    private BoardService demoService;

    @GetMapping("/select")
    public List<Test> getSelectList() {
        System.out.println(demoService.select());
        return demoService.select();
    }

    @GetMapping("/insert")
    public void insertDemoVo() {
        Test vo = new Test();
        vo.setId(2);
        vo.setName("내가만든dummy_name");

        demoService.insert(vo);
    }
}
