import React from "react";
import { inputTypes } from "../constants/inputTypes";

import { EditItem } from "../../../components";
import del from "../../../assets/icons/delete.svg";
import saveImg from "../../../assets/icons/ok.png";

const EditInput = ({ item, remove, onChangeInput, save }) => {
  return (
    <div className={"body__group"}>
      <img
        className={"group__remove"}
        src={del}
        alt={"delete"}
        onClick={remove}
      />
      <EditItem
        name={"title"}
        content={"Edit input title"}
        value={item.element.title}
        onChange={onChangeInput}
        onSave={save}
      />

      <div className={"group__input__block"}>
        <p className={"block__p"}>Edit input type</p>
        <select
          className={"block__select"}
          onChange={onChangeInput}
          name={"type"}
          defaultValue={item.element.type}
        >
          {inputTypes.map((type, i) => {
            return (
              <option key={`${i}`} value={type}>
                {type}
              </option>
            );
          })}
        </select>
        <img
          className={"save_icon"}
          src={saveImg}
          alt={"save"}
          onClick={save}
        />
      </div>
      {item.element.type !== "checkbox" && (
        <EditItem
          name={"placeholder"}
          onChange={onChangeInput}
          onSave={save}
          value={item.element.placeholder}
          content={"Edit input placeholder"}
        />
      )}
      <EditItem
        name={"name"}
        value={item.element.name}
        onChange={onChangeInput}
        onSave={save}
        content={"Edit input name"}
      />

      <input
        type={`${item.element.type}`}
        className={"block__result"}
        name={`${item.element.name}`}
        placeholder={`${item.element.placeholder}`}
      />
    </div>
  );
};

export default EditInput;
