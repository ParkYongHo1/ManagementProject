import React from "react";
import styled from "@emotion/styled";

const LeftContainer = ({ children }) => {
  return <StyledLeftContainer>{children}</StyledLeftContainer>;
};

const StyledLeftContainer = styled.div`
  width: 100%;
  max-width: 500px;
  img {
    width: 100%;
    height: auto;
  }
  padding: 10px 50px;
  text-align: start;
`;

export default LeftContainer;
