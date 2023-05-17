import React from "react";
import { UITypes } from "../../../types";

const RowInput = ({
  type,
  onChange,
  placeholder,
  autoFocus,
  name,
  required,
  value,
}: UITypes.TCustomRowInput) => {
  return (
    <input
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      name={name}
      required={required}
      value={value}
      className="outline-0 rounded-lg py-2 px-6 text-blockBg w-full shadow-inner"
      autoFocus={autoFocus || false}
    />
  );
};

export { RowInput };
