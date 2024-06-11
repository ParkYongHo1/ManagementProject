import React, { useState } from "react";
import styled from "@emotion/styled";
import axios from "axios";
import ForgetPasswordModal from "./ForgetPasswordModal";
import SignUp from "./SignUp";
import LoginContainer from "../components/LoginContainer";
import LeftContainer from "../components/LeftContainer";
import RightContainer from "../components/RightContainer";
import Title from "../components/Title";
import Input from "../components/Input";
import Button from "../components/Button";
import Body from "../components/Body";
import P from "../components/P";
import NotFind from "../components/NotFind";
import SignInButton from "../components/SignInButton";
import ForgetPasswordDiv from "../components/ForgetPasswordDiv";
import SignInButtonDiv from "../components/SignInButtonDiv";
import Span from "../components/Span";
import SignUpDiv from "../components/SignUpDiv";
import Header from "../../layout/Header";
const Login = () => {
  const [modal, setModal] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);
  const [userInfo, setUserInfo] = useState({
    userId: "",
    userPassword: "",
  });

  const openSignUpModal = () => {
    setSignUpModal(true);
  };

  const closeSignUpModal = () => {
    setSignUpModal(false);
  };

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const changeInput = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const onSubmitInput = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("api/login", userInfo);
      if (res.data === "Login successful!") {
        console.log("로그인 성공");
      } else {
        console.log("로그인 실패");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header></Header>
      <Body>
        {!modal && !signUpModal && (
          <LoginContainer>
            <LeftContainer>
              <img src={process.env.PUBLIC_URL + "/login.png"} alt="Login" />
            </LeftContainer>
            <RightContainer>
              <Title>
                <p>Welcome!</p>
              </Title>
              <form onSubmit={onSubmitInput}>
                <div>
                  <P>ID</P>
                  <Input
                    type="text"
                    onChange={changeInput}
                    name="userId"
                    value={userInfo.userId}
                  />
                  <NotFind>일치하는 아이디가 없습니다.</NotFind>
                  <P>Password</P>
                  <Input
                    type="password"
                    onChange={changeInput}
                    name="userPassword"
                    value={userInfo.userPassword}
                  />
                  <NotFind>일치하는 비밀번호가 없습니다.</NotFind>
                </div>
                <ForgetPasswordDiv>
                  <Button onClick={openModal}>Forget ID/password?</Button>
                </ForgetPasswordDiv>
                <SignInButtonDiv>
                  <SignInButton type="submit">Sign In</SignInButton>
                </SignInButtonDiv>
              </form>
              <SignUpDiv>
                <Span>Don't have an account?</Span>
                <Button onClick={openSignUpModal}>Sign Up</Button>
              </SignUpDiv>
            </RightContainer>
          </LoginContainer>
        )}
        {modal && <ForgetPasswordModal closeModal={closeModal} />}
        {signUpModal && <SignUp closeSignUpModal={closeSignUpModal} />}
      </Body>
    </>
  );
};
export default Login;
