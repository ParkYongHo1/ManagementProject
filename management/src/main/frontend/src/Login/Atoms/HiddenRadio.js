import styled from "@emotion/styled";

const HiddenRadio = styled.input`
  display: none;
  &:checked + label {
    background: black;
    color: #fff;
  }
`;

export default HiddenRadio;
