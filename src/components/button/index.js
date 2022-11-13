import React from "react";
import "./Button.scss";

const Button = ({ className = "", label, onClick, ...props }) => {
  return (
    <button
      className={`button-container ${className}`}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
