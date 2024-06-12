// src/components/templates/LoginTemplate.js
import React from "react";
import Header from "../../layout/Header";
import Body from "../Atoms/Body";
import LoginContainer from "../Atoms/LoginContainer";
import LeftContainer from "../Atoms/LeftContainer";
import RightContainer from "../Atoms/RightContainer";
import SignUpLeftForm from "../Organisms/SignUpLeftForm";
import SignUpRightForm from "../Organisms/SignUpRightForm";
import LoginPage from "../page/LoginPage";
const SignUpTemplates = ({ signUpModal, setSignUpModal }) => (
  <>
    <Body>
      {signUpModal ? (
        <LoginContainer>
          <LeftContainer>
            <SignUpLeftForm></SignUpLeftForm>
          </LeftContainer>
          <RightContainer>
            <SignUpRightForm
              signUpModal={signUpModal}
              setSignUpModal={setSignUpModal}
            ></SignUpRightForm>
          </RightContainer>
        </LoginContainer>
      ) : (
        <LoginPage></LoginPage>
      )}
    </Body>
  </>
);

export default SignUpTemplates;
