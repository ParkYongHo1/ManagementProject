// src/components/organisms/LoginForm.js
import React, { useState } from "react";
import P from "../Atoms/P";
import axios from "axios";
import SignInButtonDiv from "../Atoms/SignInButtonDiv";
import SignUpButton from "../Atoms/SignUpButton";
import SignupInput from "../Atoms/SignupInput";
import SignUpNotFind from "../Atoms/SignUpNotFind";
import Title from "../Atoms/Title";
import SignUpFind from "../Atoms/SignUpFind";
import { useDispatch } from "react-redux";
import signup from "../../slices/userSlice";

const SignUpLeftForm = () => {
  const [authStore, setAuthStore] = useState(false);
  const [authFail, setAuthFail] = useState(false);
  const [store, setStore] = useState({
    storeCode: "",
    storeName: "",
  });
  const dispatch = useDispatch();

  const handleSignUp = (e) => {
    const { name, value } = e.target;
    setStore({ ...store, [name]: value });
  };

  const onSubmitStoreCodeInput = async (e) => {
    e.preventDefault();
    console.log("test");
    try {
      const res = await axios.post("/store/auth-store", store);
      if (res.data != null) {
        console.log(res.data);
        setStore((prevStore) => ({
          ...prevStore,
          storeName: res.data.storeName,
        }));
        setAuthStore(true);
        setAuthFail(false); // 성공 시 실패 메시지 숨기기
      } else {
        console.log("fail");
        setAuthFail(true); // 실패 시 실패 메시지 표시
      }
    } catch (error) {
      console.log(error);
      setAuthFail(true); // 에러 발생 시 실패 메시지 표시
    }
  };

  console.log(store.storeName);

  return (
    <form onSubmit={onSubmitStoreCodeInput}>
      <Title>
        <p>회원가입</p>
      </Title>
      <div>
        <P>매장코드</P>
        <SignupInput
          onChange={handleSignUp}
          type="text"
          name="storeCode"
          value={store.storeCode}
        />
        {authFail && <SignUpNotFind>일치하는 매장이 없습니다.</SignUpNotFind>}
        {!authStore && !authFail && (
          <SignUpNotFind>
            아직 근무 매장 인증이 완료되지 않았습니다.
          </SignUpNotFind>
        )}
        {authStore && !authFail && (
          <SignUpFind>매장 인증이 완료되었습니다.</SignUpFind>
        )}
        <P>매장명</P>
        {store.storeName === "" ? (
          <SignupInput
            type="text"
            name="storeName"
            value={store.storeName}
            placeholder="매장 인증시 자동으로 입력됩니다."
            readOnly
          />
        ) : (
          <SignupInput type="text" name="storeName" value={store.storeName} />
        )}

        <SignInButtonDiv>
          <SignUpButton type="submit">매장 인증하기</SignUpButton>
        </SignInButtonDiv>
      </div>
    </form>
  );
};

export default SignUpLeftForm;
