import React from "react";
import styled from "@emotion/styled";

const Button = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

const StyledButton = styled.div`
  color: #c6cdd2;
  text-decoration: none;
  text-align: end;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export default Button;
