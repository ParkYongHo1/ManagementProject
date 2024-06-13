import React, { useState } from "react";
import SignUpTemplates from "../Templates/SignUpTemplates";

const SignUpPage = ({ signUpModal, setSignUpModal }) => {
  return (
    <SignUpTemplates
      signUpModal={signUpModal}
      setSignUpModal={setSignUpModal}
    />
  );
};

export default SignUpPage;
