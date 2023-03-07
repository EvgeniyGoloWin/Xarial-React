import React from "react";
import saveImg from "../../assets/icons/ok.png";

export const EditItem = ({ content, name, value, onChange, onSave }) => {
  return (
    <div className={"group__input__block"}>
      <p className={"block__p"}>{content}</p>
      <input
        className={"block__input"}
        defaultValue={value}
        onChange={onChange}
        name={name}
      />
      <img
        className={"save_icon"}
        src={saveImg}
        alt={"save"}
        onClick={onSave}
      />
    </div>
  );
};
