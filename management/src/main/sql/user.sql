-- 사용자 테이블 생성쿼리
CREATE TABLE USER (
    USER_CD INT NOT NULL AUTO_INCREMENT,                  -- 사용자 코드 (Primary Key)
    USER_NAME VARCHAR(100) NOT NULL,                      -- 사용자 이름
    USER_ID VARCHAR(100) NOT NULL,                        -- 사용자 아이디
    USER_PWD VARCHAR(100) NOT NULL,                       -- 사용자 비밀번호
    USER_CONFIRMPWD VARCHAR(100) NOT NULL,                -- 사용자 비밀번호 확인
    USER_ROLE CHAR(5) NOT NULL DEFAULT 'P',               -- 직급 (기본값 'P'로 일반직원)
    USER_PHONE VARCHAR(100) NOT NULL,                     -- 전화번호
    USER_BIRTH VARCHAR(100) NOT NULL,                     -- 생년월일
    USER_ADDRESS VARCHAR(100) NOT NULL,                   -- 주소
    USER_REGDATE DATE NOT NULL DEFAULT (curdate()),       -- 입사일 (기본값 SYSDATE)
    USER_QUITDATE DATE DEFAULT NULL,                      -- 퇴사일
    USER_MAIL VARCHAR(100) NOT NULL,                      -- 이메일
    USER_CERT CHAR(5) NOT NULL DEFAULT 'N',               -- 가입 인증 여부 (기본값 'N')
    STORE_CODE bigint,                                    -- 매장 코드 (Foreign Key)
    CONSTRAINT PK_USER PRIMARY KEY (USER_CD),
    CONSTRAINT FK_store_code FOREIGN KEY (store_code) REFERENCES STORE(store_code)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;