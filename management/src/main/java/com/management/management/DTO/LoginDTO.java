package com.management.management.DTO;

import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Data
@Getter
@Setter
@Service
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class LoginDTO {
    private String id;
    private String user_id;
    private String user_password;
    private String user_name;
    private String user_statement;

}
