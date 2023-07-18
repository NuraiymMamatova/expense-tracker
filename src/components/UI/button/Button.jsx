import React from "react";
import { styled } from "styled-components";

const Button = ({
  children,
  isDisabled,
  onClick,
  color = "white",
  ...rest
}) => {
  return (
    <StyledButton
      color={color}
      disabled={isDisabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  height: 7vh;
  color: ${(props) => props.color};
  border-radius: 10px;
  background: #4a026b;
  border: none;
  padding: 5px 20px 5px 20px;
  cursor: pointer;

  &:disabled {
    background-color: gray;
  }

  &:hover:not(:disabled) {
    background-color: #600a87;
    color: white;
  }

  &:active:not(:disabled) {
    background-color: #520b73;
    color: white;
  }
`;

// inline export
// default export
