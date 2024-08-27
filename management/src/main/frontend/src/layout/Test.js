import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
function Test(props) {
  const [profileModal, setProfileModal] = useState(false);
  const [alarmModal, setAlarmModal] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileModal && !modalRef.current.contains(event.target)) {
        setProfileModal(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [profileModal]);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (alarmModal && !modalRef.current.contains(event.target)) {
        setAlarmModal(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [alarmModal]);

  return (
    <>
      {/* 헤더 시작 */}
      <MainHeaderContainer>
        <MainHeaderDiv>
          <div>
            <img
              src={process.env.PUBLIC_URL + "/mainlogo.png"}
              alt="mainLogo"
              width={118}
              height={44}
            />
          </div>
          <HeaderSideBox>
            <HeaderSideContent onClick={() => setProfileModal((prev) => !prev)}>
              <HeaderSideContentRole>CA</HeaderSideContentRole>
              <HeaderSideContentName>박용호</HeaderSideContentName>
              {profileModal && (
                <HeaderProfileDiv ref={modalRef}>
                  <HeaderModalP>프로필보기</HeaderModalP>
                  <HeaderModalP>로그아웃</HeaderModalP>
                </HeaderProfileDiv>
              )}
            </HeaderSideContent>
              
            <HeaderSideContent onClick={() => setAlarmModal((prev) => !prev)}>
              <FontAwesomeIcon
                icon={faBell}
                size="lg"
                style={{
                  color: "white",
                  cursor: "pointer",
                  position: "relative",
                  width: "200px",
                }}
              >
                <HeaderSideContentIconDot></HeaderSideContentIconDot>
              </FontAwesomeIcon>
              {alarmModal && (
                <MainHeaderAlarmDiv ref={modalRef}>
                  <HeaderModalP>24년 6월 1주 매출</HeaderModalP>
                  <HeaderModalP>박용호님 근태수정 요청</HeaderModalP>
                </MainHeaderAlarmDiv>
              )}
            </HeaderSideContent>
            <div>
              <FontAwesomeIcon
                icon={faPowerOff}
                size="lg"
                style={{ color: "#ffffff", cursor: "pointer" }}
              />
            </div>
          </HeaderSideBox>
        </MainHeaderDiv>
      </MainHeaderContainer>
    </>
  );
}
const MainHeaderContainer = styled.div`
  background-color: #651d16;
  width: 100%;
  height: 10vh;
  position: relative;
`;
const MainHeaderDiv = styled.div`
  display: flex;
  width: 70%;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;
const HeaderSideBox = styled.div`
  display: flex;
  width: 350px;
  justify-content: center;
  align-items: center;
`;
const HeaderSideContent = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const HeaderSideContentRole = styled.div`
  border-radius: 50%;
  border: 1px solid black;
  margin-right: 10px;
  width: 32px;
  line-height: 32px;
  color: #651d16;
  background-color: white;
  font-weight: 700;
  text-align: center;
`;
const HeaderSideContentName = styled.div`
  font-weight: 700;
  color: white;
`;
const HeaderProfileDiv = styled.div`
  position: absolute;
  top: 100%;
  padding: 10px 36px;
  background: rgba(0, 0, 0, 0.6);
`;
const HeaderModalP = styled.div`
  font-weight: 700;
  color: #fffefe;
  font-size: 14px;
  white-space: nowrap;
  padding: 10px 0px;
  cursor: pointer;
`;
const HeaderSideContentIconDot = styled.div`
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: red;
  border-radius: 50%;
  top: 0;
  right: -10px;
  margin: 0;
`;
const MainHeaderAlarmDiv = styled.div`
  position: absolute;
  top: 100%;
  padding: 10px 36px;
  background: rgba(0, 0, 0, 0.6);
`;

export default Test;
