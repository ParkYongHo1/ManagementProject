import React, { useState } from "react";
import ForgetUserInfoTemplates from "../Template/ForgetUserInfoTemplates";

const ForgetUserInfoPage = ({ forgetModal, setForgetModal }) => {
  console.log(forgetModal);
  return (
    <ForgetUserInfoTemplates
      forgetModal={forgetModal}
      setForgetModal={setForgetModal}
    />
  );
};

export default ForgetUserInfoPage;
