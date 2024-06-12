// src/pages/LoginPage.js
import React, { useState } from "react";
import AddUserInfoTemplates from "../Template/AddUserInfoTemplates";

const AddUserInfoPage = () => {
  const [forgetmodal, setForgetModal] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);

  return (
    <AddUserInfoTemplates
      forgetmodal={forgetmodal}
      signUpModal={signUpModal}
      setForgetModal={setForgetModal}
      setSignUpModal={setSignUpModal}
    />
  );
};

export default AddUserInfoPage;
