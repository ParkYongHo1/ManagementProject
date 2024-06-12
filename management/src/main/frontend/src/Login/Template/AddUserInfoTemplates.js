// src/components/templates/LoginTemplate.js
import React from "react";
import Header from "../../layout/Header";
import Body from "../Atoms/Body";
import LoginContainer from "../Atoms/LoginContainer";
import LeftContainer from "../Atoms/LeftContainer";
import RightContainer from "../Atoms/RightContainer";
import AddUserInfoForm from "../Organisms/AddUserInfoForm";
import ForgetUserInfoPage from "../page/ForgetUserInfoPage";
import SignUpPage from "../page/SignUpPage";
const AddUserInfoTemplates = ({
  forgetModal,
  signUpModal,
  setForgetModal,
  setSignUpModal,
}) => (
  <>
    <Body>
      {!forgetModal && !signUpModal && (
        <LoginContainer>
          <LeftContainer>
            <img src={process.env.PUBLIC_URL + "/login.png"} alt="Login" />
          </LeftContainer>
          <RightContainer>
            <AddUserInfoForm
              setForgetModal={setForgetModal}
              setSignUpModal={setSignUpModal}
            />
          </RightContainer>
        </LoginContainer>
      )}
      {forgetModal && <ForgetUserInfoPage setForgetModal={setForgetModal} />}
      {signUpModal && <SignUpPage setSignUpModal={setSignUpModal} />}
    </Body>
  </>
);

export default AddUserInfoTemplates;
