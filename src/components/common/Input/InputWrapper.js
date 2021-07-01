import React from "react";
import "./styles.scss";

const InputWrapper = ({ label, children }) => {
  return (
    <div>
      {label && <p className="inputLabel">{label}</p>}
      {children}
    </div>
  );
};

export default InputWrapper;
