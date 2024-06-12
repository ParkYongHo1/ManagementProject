import React, { useState } from "react";
import LoginTemplates from "../Template/LoginTemplates";

const LoginPage = () => {
  const [forgetModal, setForgetModal] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);

  return (
    <LoginTemplates
      forgetModal={forgetModal}
      signUpModal={signUpModal}
      setForgetModal={setForgetModal}
      setSignUpModal={setSignUpModal}
    />
  );
};

export default LoginPage;
