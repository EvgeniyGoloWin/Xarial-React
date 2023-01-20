import React from 'react';
import del from "../../assets/icons/delete.svg";
import plus from "../../assets/icons/add.svg";

const EditInputsRadio = ({
                             item,
                             index,
                             index1,
                             handleChangeInputTitle,
                             removeInput,
                             removeRadioButton,
                             handleInputChangeRadio,
                             addRadioButton
                         }) => {
    return (

        <div className={"body__group"}>
            <div className={"group__radio__header"}>
                <input className={"block__input"} value={item.title}
                       onChange={(e) => handleChangeInputTitle(e, index, index1)}/>
                <img
                    className={"group__remove"}
                    src={del} alt={"delete"}
                    onClick={() => removeInput(index, index1)}/>
            </div>

            {item?.elements.map((btn, index2) => {
                return <div key={`${index2}`} className={"body__group"}>
                    <div className={"group__radio__block"}>
                                                                <span className={"block__radio__span"}>
                                                            <label className={"block__radio__label"}
                                                                   htmlFor={btn.value}>{
                                                                btn.label
                                                            }
                                                                <input type={btn.type}
                                                                       name={btn.name}
                                                                       value={btn.value}
                                                                       id={btn.value}/>
                                                            </label>

                                                        </span>
                        <img src={del}
                             className={"group__remove"}
                             alt={"delete"}
                             onClick={() => removeRadioButton(index, index1, index2)}/>
                    </div>

                    <div className={"group__input__block"}>
                        <p className={"block__p"}>Edit input label</p>
                        <input className={"block__input"}
                               defaultValue={btn.label}
                               onChange={(e) => handleInputChangeRadio(e, index, index1, index2)}
                               name={"label"}/>
                    </div>
                    <div className={"group__input__block"}>
                        <p className={"block__p"}>Edit input value</p>
                        <input className={"block__input"}
                               defaultValue={btn.value}
                               onChange={(e) => handleInputChangeRadio(e, index, index1, index2)}
                               name={"value"}/>
                    </div>
                    <div className={"group__input__block"}>
                        <p className={"block__p"}>Edit input name</p>
                        <input className={"block__input"}
                               defaultValue={btn.name}
                               onChange={(e) => handleInputChangeRadio(e, index, index1, index2)}
                               name={"name"}/>
                    </div>
                </div>
            })}
            <div className={"add__block"}>
                <img className={"add__block__plus"}
                     src={plus} alt={"plus"}
                     onClick={() => addRadioButton(index, index1)}/>
                <p className={"add__block__p"}>Add radio button</p>
            </div>
        </div>
    );
};

export default EditInputsRadio;