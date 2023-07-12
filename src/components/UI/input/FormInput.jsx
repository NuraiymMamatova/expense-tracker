import React from "react";
import { Input } from "./Input";

const FormInput = ({ inputType = "text", label, onChange, id, ...rest }) => {
  return (
    <label htmlFor={id}>
      {label}
      <Input id={id} type={inputType} onChange={onChange} {...rest} />
    </label>
  );
};

export default FormInput;
