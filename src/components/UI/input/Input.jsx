import React from "react";
import "./Input.css";

export const Input = ({ inputType, ...rest }) => {
  return <input type={inputType} {...rest} min={1}></input>;
};
