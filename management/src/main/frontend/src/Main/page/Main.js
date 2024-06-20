import React, { useState } from "react";
import styled from "@emotion/styled";
import axios from "axios";
import Header from "../../layout/Header";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
const Main = () => {
  const isloggedIn = useSelector((state) => state.user.isLoggedIn);
  const user = useSelector((state) => state.user.user);
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      {isloggedIn ? (
        <div>
          {" "}
          아이디 {user.userId} 비밀번호 : {user.userPassword}
        </div>
      ) : (
        <div>로그인해</div>
      )}
    </>
  );
};
export default Main;
