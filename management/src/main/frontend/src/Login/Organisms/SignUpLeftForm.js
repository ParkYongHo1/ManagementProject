// src/components/organisms/LoginForm.js
import React, { useState } from "react";
import P from "../Atoms/P";
import axios from "axios";
import SignInButtonDiv from "../Atoms/SignInButtonDiv";
import SignUpButton from "../Atoms/SignUpButton";
import SignupInput from "../Atoms/SignupInput";
import SignUpNotFind from "../Atoms/SignUpNotFind";
import Title from "../Atoms/Title";
const SignUpLeftForm = () => {
  return (
    <form>
      <Title>
        <p>회원가입</p>
      </Title>
      <div>
        <P>매장코드</P>
        <SignupInput type="text" name="userId" />
        <SignUpNotFind>
          아직 근무 매장 인증이 완료되지 않았습니다.
        </SignUpNotFind>
        <P>매장명</P>
        <SignupInput
          type="text"
          name="userId"
          placeholder="매장 인증시 자동으로 입력됩니다."
          readOnly
        />
        <SignInButtonDiv>
          <SignUpButton>매장 인증하기</SignUpButton>
        </SignInButtonDiv>
      </div>
    </form>
  );
};

export default SignUpLeftForm;
