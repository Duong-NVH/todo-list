import React from "react";
import "./styles.scss";

const InputWrapper = ({ label, children, errMsg }) => {
  return (
    <div>
      {label && <p className="inputLabel">{label}</p>}
      {children}
      {errMsg && <p className="err-msg">{errMsg}</p>}
    </div>
  );
};

export default InputWrapper;
