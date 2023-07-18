import React from "react";
import { styled } from "styled-components";

export const Input = ({ inputType, ...rest }) => {
  return <StyledInput type={inputType} {...rest} min={1}></StyledInput>;
};

const StyledInput = styled.input`
  padding: 10px;
  width: 18em;
  border-radius: 8px;
  border: none;
  outline: none;
  &[type="date"]::-webkit-calendar-picker-indicator {
    background: url(/src/images/calendar-picker-icon.svg) no-repeat;
  }

  &:focus,
  &:active {
    border: 1px solid #3f3f3f;
  }

  &.error {
    border: 1px solid #f91515;
  }
`;
