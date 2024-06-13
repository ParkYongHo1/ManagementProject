// src/components/organisms/LoginForm.js
import React, { useState } from "react";
import Input from "../Atoms/Input";
import Button from "../Atoms/Button";
import P from "../Atoms/P";
import Span from "../Atoms/Span";
import NotFind from "../Atoms/NotFind";
import RadioGroup from "../Molecules/AddUserInfoRadioGroup";
import axios from "axios";
import Title from "../Atoms/Title";
import MarginBottom from "../Atoms/MarginBottom";
import SignInButtonDiv from "../Atoms/SignInButtonDiv";
import SignInButton from "../Atoms/SignInButton";
import DaumPostcode from "react-daum-postcode";
import Modal from "react-modal";
import Xbtn from "../Atoms/Xbtn";
import SignInButtonMargin from "../Atoms/SignInButtonMargin";
const AddUserInfoForm = () => {
  const [addUserInfo, setAddUserInfo] = useState({
    userPhone: "",
    userBirth: "",
    userAddress: "",
    userEmail: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 추가
  const changePhoneInput = (e) => {
    const { name, value } = e.target;
    // 전화번호 정규식 수정
    let formattedValue = value.replace(/[^0-9]/g, ""); // 숫자 이외의 문자 제거
    if (formattedValue.length <= 11) {
      if (formattedValue.startsWith("010")) {
        formattedValue = formattedValue.replace(
          /(\d{3})(\d{4})(\d{4})/,
          "$1-$2-$3"
        );
      } else if (formattedValue.startsWith("02")) {
        formattedValue = formattedValue.replace(
          /(\d{2})(\d{3,4})(\d{4})/,
          "$1-$2-$3"
        );
      } else {
        formattedValue = formattedValue.replace(
          /(\d{3})(\d{3,4})(\d{4})/,
          "$1-$2-$3"
        );
      }
    }
    setAddUserInfo({ ...addUserInfo, [name]: formattedValue });
  };
  const changeBirthInput = (e) => {
    const { name, value } = e.target;
    setAddUserInfo({ ...addUserInfo, [name]: value });
  };
  const changeEmailInput = (e) => {
    const { name, value } = e.target;
    setAddUserInfo({ ...addUserInfo, [name]: value });
  };
  const handleComplete = (data) => {
    setAddUserInfo({ ...addUserInfo, userAddress: data.address });
    setIsModalOpen(false); // 주소 선택 시 모달 닫기
  };
  const radioOptions = [
    { label: "점장", value: "S" },
    { label: "매니저", value: "M" },
    { label: "시간제 직원", value: "A" },
  ];
  return (
    <form>
      <Title>추가 정보 입력하기</Title>
      <MarginBottom>
        <P>직급</P>
        <RadioGroup options={radioOptions} name="userRole" />
      </MarginBottom>
      <MarginBottom>
        <P>전화번호</P>
        <Input
          type="text"
          onChange={changePhoneInput}
          name="userPhone"
          value={addUserInfo.userPhone}
          placeholder="전화번호를 입력해주세요"
          maxLength={13}
        />
      </MarginBottom>
      <MarginBottom>
        <P>생년월일</P>
        <Input
          type="text"
          onChange={changeBirthInput}
          name="userBirth"
          value={addUserInfo.userBirth}
          placeholder="생년월일 8자를 입력해주세요"
          maxLength={8}
        />
      </MarginBottom>
      <MarginBottom>
        <P>주소</P>
        <Button type="button" onClick={() => setIsModalOpen(true)}>
          주소 검색
        </Button>
        <Input
          type="text"
          name="userAddress"
          value={addUserInfo.userAddress}
          readOnly
          placeholder="주소를 선택해주세요"
        />
        <Modal
          style={customModalStyles}
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          appElement={document.getElementById("root")}
        >
          <Xbtn
            style={{
              textAlign: "end",
              padding: "0px 30px 10px 20px",
              fontSize: "25px",
            }}
            onClick={() => setIsModalOpen(false)}
          >
            X
          </Xbtn>
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      </MarginBottom>
      <div>
        <P>이메일</P>
        <Input
          type="text"
          onChange={changeEmailInput}
          name="userEmail"
          value={addUserInfo.userEmail}
          placeholder="이메일을 입력하세요"
          maxLength={30}
        />
      </div>
      <P>
        <NotFind>잘못된 이메일 형식입니다.</NotFind>
      </P>
      <SignInButtonDiv>
        <SignInButton type="submit">저장하기</SignInButton>
        <SignInButtonMargin type="button">취소하기</SignInButtonMargin>
      </SignInButtonDiv>
    </form>
  );
};
const customModalStyles = {
  overlay: {
    backgroundColor: " rgba(0, 0, 0, 0.4)",
    width: "100%",
    height: "100vh",
    zIndex: "10",
    position: "fixed",
    top: "0",
    left: "0",
  },
  content: {
    width: "500px",
    height: "400px",
    zIndex: "150",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
    boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
    backgroundColor: "white",
    justifyContent: "center",
    overflow: "hidden",
  },
};
export default AddUserInfoForm;
