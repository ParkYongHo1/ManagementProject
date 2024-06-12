// src/components/organisms/LoginForm.js
import React, { useState } from "react";
import axios from "axios";
import SignInButtonDiv from "../Atoms/SignInButtonDiv";
import ForgetButton from "../Atoms/ForgetButton";
import P from "../Atoms/P";
import NotFind from "../Atoms/NotFind";
import Title from "../Atoms/Title";
import Input from "../Atoms/Input";
const ForgetUserInfoLeftForm = () => {
  return (
    <>
      <Title>
        <p>Find ID!</p>
      </Title>
      <form>
        <div>
          <P>사원명</P>
          <Input type="text" name="userId" />

          <P>생년월일</P>
          <Input type="password" name="userBirth" />
          <NotFind>생년월일 8자리 입력해주세요</NotFind>
          <P>이메일</P>
          <Input type="email" name="userEmail" />
        </div>
        <p>
          <NotFind>해당하는 아이디가 없습니다.</NotFind>
        </p>
        <SignInButtonDiv>
          <ForgetButton>아이디찾기</ForgetButton>
        </SignInButtonDiv>
      </form>
    </>
  );
};

export default ForgetUserInfoLeftForm;
