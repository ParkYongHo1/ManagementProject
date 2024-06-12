import React from "react";
import styled from "@emotion/styled";

const SignupInput = (props) => {
  return <StyledInput {...props} />;
};

const StyledInput = styled.input`
  margin-bottom: 10px;
  width: 100%;
  padding: 15px 0px 10px 0px;
  border: none;
  border-bottom: 1px solid #ececec;
  color: black;
  &:focus {
    outline: none;
  }
`;

export default SignupInput;
