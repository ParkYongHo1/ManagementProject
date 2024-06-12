// src/components/templates/LoginTemplate.js
import React from "react";
import Header from "../../layout/Header";
import Body from "../Atoms/Body";
import LoginContainer from "../Atoms/LoginContainer";
import LeftContainer from "../Atoms/LeftContainer";
import RightContainer from "../Atoms/RightContainer";
import LoginForm from "../Organisms/LoginForm";
import ForgetUserInfoPage from "../page/ForgetUserInfoPage";
import SignUpPage from "../page/SignUpPage";
const LoginTemplates = ({
  forgetModal,
  signUpModal,
  setForgetModal,
  setSignUpModal,
}) => {
  return (
    <>
      <Body>
        {/* forgetModal 과 signUpModal이 모두 false 일때  */}
        {!forgetModal && !signUpModal && (
          <LoginContainer>
            <LeftContainer>
              <img src={process.env.PUBLIC_URL + "/login.png"} alt="Login" />
            </LeftContainer>
            <RightContainer>
              <LoginForm
                setForgetModal={setForgetModal}
                setSignUpModal={setSignUpModal}
              />
            </RightContainer>
          </LoginContainer>
        )}
        {forgetModal && (
          <ForgetUserInfoPage
            setForgetModal={setForgetModal}
            forgetModal={forgetModal}
          />
        )}
        {signUpModal && (
          <SignUpPage
            setSignUpModal={setSignUpModal}
            signUpModal={signUpModal}
          />
        )}
      </Body>
    </>
  );
};

export default LoginTemplates;
