import React, { memo } from "react";
import InputWrapper from "./InputWrapper";
import clsx from "clsx";

const DatePicker = ({ label, customClass, value, onChange, ...rest }) => {
  return (
    <InputWrapper label={label}>
      <div className={clsx("input-date", customClass)}>
        <input type="date" {...rest} value={value} onChange={onChange} />
        <div className="vertical-line"></div>
      </div>
    </InputWrapper>
  );
};

export default memo(DatePicker);
