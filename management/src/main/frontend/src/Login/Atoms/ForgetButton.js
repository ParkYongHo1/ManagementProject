import React from "react";
import styled from "@emotion/styled";

const ForgotButton = ({ children }) => {
  console.log(children);
  return <StyledButton>{children}</StyledButton>;
};

const StyledButton = styled.button`
  height: 36px;
  width: 100px;
  border-radius: 26px;
  margin: 30px 0px;
  color: white;
  background-color: black;
  border: none;
  font-weight: 700;
  cursor: pointer;
  margin-left: 5px;
  &:hover {
    cursor: pointer;
    box-shadow: 0 1px 1px rgb(0 0 0 / 10%);
    background-color: #f8f9fa;
    font-weight: 700;
    color: #000000;
  }
`;

export default ForgotButton;
