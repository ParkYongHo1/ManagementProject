import React, { useState } from "react";
import ForgetUserInfoTemplates from "../Templates/ForgetUserInfoTemplates";

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
