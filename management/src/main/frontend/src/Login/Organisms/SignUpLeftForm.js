// src/components/organisms/LoginForm.js
import React, { useState } from "react";
import P from "../Atoms/P";
import axios from "axios";
import SignInButtonDiv from "../Atoms/SignInButtonDiv";
import SignUpButton from "../Atoms/SignUpButton";
import SignupInput from "../Atoms/SignupInput";
import SignUpNotFind from "../Atoms/SignUpNotFind";
import Title from "../Atoms/Title";
import { useDispatch } from "react-redux";
import signup from "../../slices/userSlice";
const SignUpLeftForm = () => {
  const [store, setStore] = useState({
    storeId: "",
  });
  const dispatch = useDispatch();
  const handleSignUp = (e) => {
    const { name, value } = e.target;
    setStore({ ...store, [name]: value });
  };

  const onSubmitInput = async (e) => {
    e.preventdefault();
    try {
      const res = await axios.post("api/authStore", store);
      if (res.data == "OK") {
        dispatch(signup(store));
      }
    } catch {}
  };
  return (
    <form onSubmit={onSubmitInput}>
      <Title>
        <p>회원가입</p>
      </Title>
      <div>
        <P>매장코드</P>
        <SignupInput
          onChange={handleSignUp}
          type="text"
          name="storeId"
          value={store.storeId}
        />
        <SignUpNotFind>
          아직 근무 매장 인증이 완료되지 않았습니다.
        </SignUpNotFind>
        <P>매장명</P>
        <SignupInput
          type="text"
          name="userId"
          value={store.storeId}
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
