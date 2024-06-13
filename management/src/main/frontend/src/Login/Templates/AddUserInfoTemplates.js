// src/components/templates/LoginTemplate.js
import React from "react";
import Header from "../../layout/Header";
import Body from "../Atoms/Body";
import LoginContainer from "../Atoms/LoginContainer";
import LeftContainer from "../Atoms/LeftContainer";
import RightContainer from "../Atoms/RightContainer";
import AddUserInfoForm from "../Organisms/AddUserInfoForm";
const AddUserInfoTemplates = () => (
  <>
    <Body>
      <LoginContainer>
        <LeftContainer>
          <img
            src={process.env.PUBLIC_URL + "/addUserInfoImg.png"}
            alt="Login"
          />
        </LeftContainer>
        <RightContainer>
          <AddUserInfoForm />
        </RightContainer>
      </LoginContainer>
    </Body>
  </>
);

export default AddUserInfoTemplates;
