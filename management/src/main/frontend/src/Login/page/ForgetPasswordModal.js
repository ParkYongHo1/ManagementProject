import React, { useState } from "react";
import styled from "@emotion/styled";
import axios from "axios";
import Header from "../../layout/Header";
import Body from "../components/Body";
import LoginContainer from "../components/LoginContainer";
import LeftContainer from "../components/LeftContainer";
import Title from "../components/Title";
import P from "../components/P";
import Input from "../components/Input";
import NotFind from "../components/NotFind";
import SignInButtonDiv from "../components/SignInButtonDiv";
import ForgetButton from "../components/ForgetButton";
import RightContainer from "../components/RightContainer";
import Xbtn from "../components/Xbtn";

const ForgetPasswordModal = ({ closeModal }) => {
  return (
    <Body>
      <LoginContainer>
        <LeftContainer>
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
        </LeftContainer>
        <RightContainer>
          <Title>
            <p>Find Password !</p>
            <Xbtn onClick={closeModal}>X</Xbtn>
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
              <NotFind>임시 비밀번호는 &alv3;입니다.</NotFind>
            </p>
            <SignInButtonDiv>
              <ForgetButton>비밀번호 찾기</ForgetButton>
            </SignInButtonDiv>
          </form>
        </RightContainer>
      </LoginContainer>
    </Body>
  );
};
export default ForgetPasswordModal;
