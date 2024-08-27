import React from "react";
import styled from "@emotion/styled";

const SignUpFind = ({ children }) => {
  return <StyledFind>{children}</StyledFind>;
};

const StyledFind = styled.div`
  margin: 0px 0px 10px 0px;
  color: green;
  font-size: 12px;
  font-weight: 700;
`;
export default SignUpFind;
