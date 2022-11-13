import React from "react";
import "./Button.scss";

const Button = ({ className = "", label, onClick, ...props }) => {
  return (
    <button
      className={`button-container ${className}`}
      onClick={(e) => onClick(e)}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
