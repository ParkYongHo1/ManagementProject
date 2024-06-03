package com.management.management.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;
import com.management.management.DTO.Test;
import java.util.List;

@Repository
@Mapper
public interface BoardMapper {
    List<Test> select();

    void insert(Test vo);
}
