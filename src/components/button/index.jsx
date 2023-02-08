import React from "react";

import "./button.css";

export const Button = ({ type, content, onClick }) => {
  return (
    <button className={"button"} type={type} onClick={onClick}>
      {content}
    </button>
  );
};
