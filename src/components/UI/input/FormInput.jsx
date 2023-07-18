import React from "react";
import { Input } from "./Input";
import { styled } from "styled-components";

const FormInput = ({ inputType = "text", label, onChange, id, ...rest }) => {
  return (
    <StyledLabel htmlFor={id}>
      {label}
      <Input id={id} type={inputType} onChange={onChange} {...rest} />
    </StyledLabel>
  );
};

export default FormInput;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
