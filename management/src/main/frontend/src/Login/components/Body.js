import React from "react";
import styled from "@emotion/styled";

const Body = ({ children }) => {
  return <StyledBody>{children}</StyledBody>;
};

const StyledBody = styled.div`
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;
export default Body;
