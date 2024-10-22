package com.management.management.DTO;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.ManyToAny;

import lombok.Data;

@Entity
@Table(name = "USER")
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "USER_CD")
    private int id;

    @Column(name = "USER_ID", nullable = false)
    private String userId;

    @Column(name = "USER_PWD", nullable = false)
    private String userPassword;

    @Column(name = "USER_CONFIRMPWD", nullable = false)
    private String userConfirmPassword;

    @Column(name = "USER_NAME", nullable = false)
    private String userName;

    @Column(name = "USER_PHONE", nullable = false)
    private String userPhone;

    @Column(name = "USER_ADDRESS", nullable = false)
    private String userAddress;

    @Column(name = "USER_BIRTH", nullable = false)
    private String userBirth;

    @Column(name = "USER_MAIL", nullable = false)
    private String userEmail;

    @ManyToOne
    @JoinColumn(name = "STORE_CODE",referencedColumnName = "STORE_CODE")
    private Store store;

    @Column(name="USER_CERT",nullable = false)
    private String userCert;

    @Column(name="USER_ROLE",nullable = false)
    private String userRole;

    @Column(name = "USER_QUITDATE")
    private LocalDate userQuitdate;

}