import React, { useState } from "react";
import SignUpTemplates from "../Template/SignUpTemplates";

const SignUpPage = ({ signUpModal, setSignUpModal }) => {
  return (
    <SignUpTemplates
      signUpModal={signUpModal}
      setSignUpModal={setSignUpModal}
    />
  );
};

export default SignUpPage;
