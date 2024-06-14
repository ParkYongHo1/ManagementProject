import React, { useState } from "react";
import styled from "@emotion/styled";
import axios from "axios";
import Header from "../../layout/Header";
import { Outlet } from "react-router-dom";
const Main = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  );
};
export default Main;
