import React from "react";
import styled from "@emotion/styled";

const InputRadio = (props) => {
  return <StyledInput {...props} />;
};

const StyledInput = styled.input`
  display: none;

  &:checked + label {
    background: #184da0;
    color: #fff;
  }

  &:not(:checked) + label {
    background: #f9fafc;
    color: #666;
  }
`;

export default InputRadio;
