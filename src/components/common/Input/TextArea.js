import React, { memo } from "react";
import InputWrapper from "./InputWrapper";
import clsx from "clsx";

const TextArea = ({ label, customClass, value, onChange }) => {
  return (
    <div>
      <InputWrapper label={label}>
        <textarea
          rows={10}
          className={clsx("input-multiple", customClass)}
          value={value}
          onChange={onChange}
        />
      </InputWrapper>
    </div>
  );
};

export default memo(TextArea);
