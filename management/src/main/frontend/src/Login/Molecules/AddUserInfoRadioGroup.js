import FlexDiv from "../Atoms/FlexDiv";
import HiddenRadio from "../Atoms/HiddenRadio";
import StyledLabel from "../Atoms/StyledLabel";
import React from "react";
const AddUserInfoRadioGroup = ({ options, name }) => (
  <FlexDiv>
    {options.map((option) => (
      <React.Fragment key={option.value}>
        <HiddenRadio
          id={option.value}
          type="radio"
          name={name}
          value={option.value}
        />
        <StyledLabel htmlFor={option.value}>{option.label}</StyledLabel>
      </React.Fragment>
    ))}
  </FlexDiv>
);

export default AddUserInfoRadioGroup;
