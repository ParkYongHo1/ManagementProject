// src/components/organisms/LoginForm.js
import React, { useState } from "react";
import Input from "../Atoms/Input";
import Button from "../Atoms/Button";
import P from "../Atoms/P";
import Span from "../Atoms/Span";
import NotFind from "../Atoms/NotFind";
import axios from "axios";
import SignInButton from "../Atoms/SignInButton";
import SignInButtonDiv from "../Atoms/SignInButtonDiv";
import SignUpDiv from "../Atoms/SignUpDiv";
import Title from "../Atoms/Title";
const AddUserInfoForm = ({ setForgetModal, setSignUpModal }) => {
  const [userInfo, setUserInfo] = useState({
    userId: "",
    userPassword: "",
  });

  const changeInput = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const onSubmitInput = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("api/login", userInfo);
      if (res.data === "Login successful!") {
        alert("로그인 되었습니다.");
        window.location.href = "/home"; 
      } else {
        alert("아이디/비밀번호가 일치하지않습니다. 다시입력해주세요.");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={onSubmitInput}>
      <div>
        <Title>
          <p>Welcome!</p>
        </Title>
        <P>ID</P>
        <Input
          type="text"
          onChange={changeInput}
          name="userId"
          value={userInfo.userId}
        />
        {/* <NotFind>일치하는 아이디가 없습니다.</NotFind> */}
        <P>Password</P>
        <Input
          type="password"
          onChange={changeInput}
          name="userPassword"
          value={userInfo.userPassword}
        />
        {/* <NotFind>일치하는 비밀번호가 없습니다.</NotFind> */}
      </div>
      <div>
        <Button type="button" onClick={() => setForgetModal((prev) => !prev)}>
          Forget ID/password?
        </Button>
        <SignInButtonDiv>
          <SignInButton type="submit">Sign In</SignInButton>
        </SignInButtonDiv>
      </div>
      <div>
        <SignUpDiv>
          <Span>Don't have an account?</Span>
          <Button type="button" onClick={() => setSignUpModal((prev) => !prev)}>
            Sign Up
          </Button>
        </SignUpDiv>
      </div>
    </form>
  );
};

export default AddUserInfoForm;
