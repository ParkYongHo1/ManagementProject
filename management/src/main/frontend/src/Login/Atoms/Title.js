import React from "react";
import styled from "@emotion/styled";

const Title = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

const StyledTitle = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Title;
