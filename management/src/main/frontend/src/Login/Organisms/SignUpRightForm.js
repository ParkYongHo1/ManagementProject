// src/components/organisms/LoginForm.js
import React, { useState } from "react";
import P from "../Atoms/P";
import axios from "axios";
import SignInButtonDiv from "../Atoms/SignInButtonDiv";
import SignUpButton from "../Atoms/SignUpButton";
import SignupInput from "../Atoms/SignupInput";
import SignUpNotFind from "../Atoms/SignUpNotFind";
import Xbtn from "../Atoms/Xbtn";
import Title from "../Atoms/Title";
const SignUpRightForm = ({ setSignUpModal }) => {
  return (
    <form>
      <Title>
        <Xbtn onClick={() => setSignUpModal((prev) => !prev)}>X</Xbtn>
      </Title>
      <P>아이디</P>
      <SignupInput type="text" name="userId" />
      <SignUpNotFind>중복된 아이디 입니다.</SignUpNotFind>
      <SignInButtonDiv>
        <SignUpButton>중복확인</SignUpButton>
      </SignInButtonDiv>
      <P>비밀번호</P>
      <SignupInput type="text" name="userId" />
      <SignUpNotFind>비밀번호는 최소 8자 이상 입력해주세요.</SignUpNotFind>
      <P>비밀번호 확인</P>
      <SignupInput type="text" name="userId" />
      <SignUpNotFind>비밀번호가 일치하지 않습니다.</SignUpNotFind>
      <SignInButtonDiv>
        <SignUpButton type="submit">가입하기</SignUpButton>
      </SignInButtonDiv>
    </form>
  );
};

export default SignUpRightForm;
