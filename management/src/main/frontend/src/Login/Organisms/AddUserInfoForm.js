// src/components/organisms/LoginForm.js
import React, { useState } from "react";
import Input from "../Atoms/Input";
import Button from "../Atoms/Button";
import P from "../Atoms/P";
import Span from "../Atoms/Span";
import NotFind from "../Atoms/NotFind";
import RadioGroup from "../Molecules/AddUserInfoRadioGroup";
import axios from "axios";

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
        console.log("로그인 성공");
      } else {
        console.log("로그인 실패");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const radioOptions = [
    { label: "점장", value: "S" },
    { label: "매니저", value: "M" },
    { label: "시간제 직원", value: "A" },
  ];

  return (
    <form onSubmit={onSubmitInput}>
      <div>
        <P>직급</P>
        <RadioGroup options={radioOptions} name="userRole" />
      </div>
    </form>
  );
};

export default AddUserInfoForm;
