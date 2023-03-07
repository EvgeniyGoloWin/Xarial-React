import React from "react";
import del from "../../../assets/icons/delete.svg";
import plus from "../../../assets/icons/add.svg";
import saveImg from "../../../assets/icons/ok.png";
import { EditItem } from "../../../components";

const EditInputsRadio = ({
  item,
  index,
  index1,
  handleChangeInputTitle,
  removeInput,
  removeRadioButton,
  handleInputChangeRadio,
  addRadioButton,
  save,
}) => {
  return (
    <div className={"body__group"}>
      <div className={"group__radio__header"}>
        <>
          <input
            className={"block__input"}
            defaultValue={item.title}
            onChange={(e) => handleChangeInputTitle(e, index, index1)}
          />
          <img
            className={"save_icon"}
            src={saveImg}
            alt={"save"}
            onClick={save}
          />
        </>
        <img
          className={"group__remove"}
          src={del}
          alt={"delete"}
          onClick={() => removeInput(index, index1)}
        />
      </div>

      {item?.elements.map((btn, index2) => {
        return (
          <div key={`${index2}`} className={"body__group"}>
            <div className={"group__radio__block"}>
              <span className={"block__radio__span"}>
                <label className={"block__radio__label"} htmlFor={btn.value}>
                  {btn.label}
                  <input
                    type={btn.type}
                    name={btn.name}
                    value={btn.value}
                    id={btn.value}
                  />
                </label>
              </span>
              <img
                src={del}
                className={"group__remove"}
                alt={"delete"}
                onClick={() => removeRadioButton(index, index1, index2)}
              />
            </div>

            <EditItem
              content={"Edit input label"}
              value={btn.label}
              onChange={(e) => handleInputChangeRadio(e, index, index1, index2)}
              name={"label"}
              onSave={save}
            />

            <EditItem
              content={"Edit input value"}
              value={btn.value}
              onChange={(e) => handleInputChangeRadio(e, index, index1, index2)}
              name={"value"}
              onSave={save}
            />

            <EditItem
              content={"Edit input name"}
              name={"name"}
              onSave={save}
              onChange={(e) => handleInputChangeRadio(e, index, index1, index2)}
              value={btn.name}
            />
          </div>
        );
      })}

      <div className={"add__block"}>
        <img
          className={"add__block__plus"}
          src={plus}
          alt={"plus"}
          onClick={() => addRadioButton(index, index1)}
        />
        <p className={"add__block__p"}>Add radio button</p>
      </div>
    </div>
  );
};

export default EditInputsRadio;
