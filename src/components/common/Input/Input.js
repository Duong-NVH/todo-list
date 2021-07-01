import React, { memo } from "react";
import InputWrapper from "./InputWrapper";

const Input = ({ label, customClass, value, onChange, ...rest }) => {
  return (
    <InputWrapper label={label}>
      <div className={customClass}>
        <input {...rest} value={value} onChange={onChange} />
      </div>
    </InputWrapper>
  );
};

export default memo(Input);
