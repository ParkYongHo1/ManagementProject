import React from "react";
import styled from "@emotion/styled";

const SignUpNotFind = ({ children }) => {
  return <StyledNotFind>{children}</StyledNotFind>;
};

const StyledNotFind = styled.div`
  margin: 0px 0px 10px 0px;
  color: red;
  font-size: 12px;
  font-weight: 700;
`;
export default SignUpNotFind;
