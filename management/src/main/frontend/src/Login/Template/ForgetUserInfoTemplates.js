// src/components/templates/LoginTemplate.js
import React from "react";
import Header from "../../layout/Header";
import Body from "../Atoms/Body";
import LoginContainer from "../Atoms/LoginContainer";
import LeftContainer from "../Atoms/LeftContainer";
import RightContainer from "../Atoms/RightContainer";
import ForgetUserInfoLeftForm from "../Organisms/ForgetUserInfoLeftForm";
import ForgetUserInfoRightForm from "../Organisms/ForgetUserInfoRightForm";
import LoginPage from "../page/LoginPage";
const ForgetUserInfoTemplates = ({ forgetModal, setForgetModal }) => (
  <>
    <Body>
      {forgetModal ? (
        <LoginContainer>
          <LeftContainer>
            <ForgetUserInfoLeftForm></ForgetUserInfoLeftForm>
          </LeftContainer>
          <RightContainer>
            <ForgetUserInfoRightForm
              forgetModal={forgetModal}
              setForgetModal={setForgetModal}
            ></ForgetUserInfoRightForm>
          </RightContainer>
        </LoginContainer>
      ) : (
        <LoginPage></LoginPage>
      )}
    </Body>
  </>
);

export default ForgetUserInfoTemplates;
