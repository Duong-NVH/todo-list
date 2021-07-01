import React from "react";
import "./styles.scss";
import clsx from "clsx";

const Button = ({ text, customClass, ...rest }) => {
  return (
    <button className={clsx(customClass)} {...rest}>
      {text}
    </button>
  );
};

export default Button;
