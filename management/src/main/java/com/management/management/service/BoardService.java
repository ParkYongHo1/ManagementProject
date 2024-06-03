package com.management.management.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.management.management.DTO.Test;
import com.management.management.mapper.BoardMapper;

@Service
public class BoardService {
    @Autowired
    private BoardMapper mapper;

    public List<Test> select() {
        return mapper.select();
    }

    public void insert(Test vo) {
        mapper.insert(vo);
    }
}
