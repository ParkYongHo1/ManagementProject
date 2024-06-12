// src/components/organisms/LoginForm.js
import React, { useState } from "react";
import axios from "axios";
import SignInButtonDiv from "../Atoms/SignInButtonDiv";
import ForgetButton from "../Atoms/ForgetButton";
import P from "../Atoms/P";
import NotFind from "../Atoms/NotFind";
import Title from "../Atoms/Title";
import Xbtn from "../Atoms/Xbtn";
import Input from "../Atoms/Input";
const ForgetUserInfoRightForm = ({ setForgetModal }) => {
  return (
    <>
      <Title>
        <p>Find Password !</p>
        <Xbtn onClick={() => setForgetModal((prev) => !prev)}>X</Xbtn>
      </Title>
      <form>
        <div>
          <P>아이디</P>
          <Input type="text" name="userId" />

          <P>생년월일</P>
          <Input type="password" name="userBirth" />
          <NotFind>생년월일 8자리 입력해주세요</NotFind>
          <P>이메일</P>
          <Input type="email" name="userEmail" />
        </div>
        <p>
          <NotFind>해당 이메일로 임시 비밀번호를 발송했습니다.</NotFind>
        </p>
        <SignInButtonDiv>
          <ForgetButton>비밀번호 찾기</ForgetButton>
        </SignInButtonDiv>
      </form>
    </>
  );
};

export default ForgetUserInfoRightForm;
