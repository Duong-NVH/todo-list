import React, { memo } from "react";
import InputWrapper from "./InputWrapper";
import { createKey } from "../../../utils";

const Select = ({ label, customClass, options, value, onChange, ...rest }) => {
  return (
    <InputWrapper label={label}>
      <div className="input-select">
        <select
          {...rest}
          className={customClass}
          value={value}
          onChange={onChange}
        >
          {options?.map((option) => (
            <option key={createKey()} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </InputWrapper>
  );
};

export default memo(Select);
