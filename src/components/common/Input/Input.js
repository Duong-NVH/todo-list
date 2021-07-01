import React, { memo } from "react";
import InputWrapper from "./InputWrapper";

const Input = ({ label, customClass, value, onChange, errMsg, ...rest }) => {
  return (
    <InputWrapper label={label} errMsg={errMsg}>
      <div className={customClass}>
        <input {...rest} value={value} onChange={onChange} />
      </div>
    </InputWrapper>
  );
};

export default memo(Input);
