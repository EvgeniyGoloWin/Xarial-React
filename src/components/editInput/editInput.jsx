import React from 'react';
import {inputTypes} from "../../constants/inputTypes";
import del from "../../assets/icons/delete.svg";


const EditInput = ({item, remove, onChangeInput}) => {

    return (
        <div className={"body__group"}>
            <img
                className={"group__remove"}
                src={del} alt={"delete"}
                onClick={remove}/>
            <div className={"group__input__block"}>
                <p className={"block__p"}>Edit input title</p>
                <input className={"block__input"} defaultValue={item.element.title}
                       onChange={onChangeInput}
                       name={"title"}/>
            </div>
            <div className={"group__input__block"}>
                <p className={"block__p"}>Edit input type</p>
                <select className={"block__select"}
                        onChange={onChangeInput}
                        name={"type"} defaultValue={item.element.type}>
                    {inputTypes.map(((type, i) => {
                            return <option key={`${i}`} value={type}>{type}</option>
                        }
                    ))}
                </select>
            </div>
            <div className={"group__input__block"}>
                <p className={"block__p"}>Edit input placeholder</p>
                <input className={"block__input"}
                       defaultValue={item.element.placeholder}
                       onChange={onChangeInput}
                       name={"placeholder"}/>
            </div>
            <div className={"group__input__block"}>
                <p className={"block__p"}>Edit input name</p>
                <input className={"block__input"} defaultValue={item.element.name}
                       onChange={onChangeInput}
                       name={"name"}/>
            </div>
            <input type={`${item.element.type}`}
                   className={"block__result"}
                   name={`${item.element.name}`}
                   placeholder={`${item.element.placeholder}`}/>

        </div>
    );
}

export default EditInput;