import React from "react";
import "./Button.css";

const Button = ({ children, isDisabled, onClick, ...rest }) => {
  return (
    <button disabled={isDisabled} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export default Button;

// inline export
// default export
