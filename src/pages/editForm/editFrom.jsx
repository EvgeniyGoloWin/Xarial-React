import React, {useEffect, useState} from 'react';
import Header from "../../components/header/header";
import {baseUrl} from "../../constants/api";

import "./editFrom.css"
import {mockData} from "../../constants/mockForm"
import plus from "../../assets/icons/addIcon.png"
import del from "../../assets/icons/removeIcon.png"
import {inputTypes} from "../../constants/inputTypes";

const EditFrom = () => {
    const [state, setState] = useState(mockData)
    const [loading, setLoading] = useState(false)
    // console.log(JSON.stringify(mockData))
    // useEffect(() => {
    //     setLoading(true)
    //
    //     fetch(`${baseUrl}/form`).then((res) => res.json()).then((res2) => setState(res2))
    //     setTimeout(() => {
    //         setLoading(false)
    //     }, 1500)
    // }, [])


    console.log(state)

    const handleChangeInput = (e, a, b) => {
        e.stopPropagation()
        e.preventDefault()

        const element = {...state.body[a].form[b].element, [e.target.name]: e.target.value}

        const formEl = {...state.body[a].form[b], element}

        const newArr = state.body[a].form.map((form, index) => {
            if (index === b) {
                return formEl
            } else {
                return form
            }
        })
        const body = state.body.map((item, index) => {
            if (index === a) {
                return {...item, form: newArr}
            } else {
                return item
            }
        })
        setState({...state, body})

    }

    const handleChangeInputTitle = async (e, a, b) => {
        e.stopPropagation()
        e.preventDefault()

        const formEl = {...state.body[a].form[b], title: e.target.value}

        const arr = state.body[a].form.map((item, index) => {
            if (index === b) {
                return formEl
            } else {
                return item
            }
        })

        const body = state.body.map((item, index) => {
            if (index === a) {
                return {...item, form: arr}
            } else {
                return item
            }
        })

        setState({...state, body})

    }

    const addRadioButton = (a, b) => {
        const el = {
            type: "radio",
            name: "",
            label: "",
            value: ""
        }
        const elements = state.body[a].form[b].elements.concat(el)

        const mewFormEl = {...state.body[a].form[b], elements}

        const newForm = state.body[a].form.map((item, index) => {
            if (index === b) {
                return mewFormEl
            } else {
                return item
            }
        })

        const newBody = state.body.map((item, index) => {
            if (index === a) {
                return {...item, form: newForm}
            } else {
                return item
            }
        })
        setState({...state, body: newBody})

    }

    const addInputToForm = (a) => {
        const obj = {
            element: {
                title: "",
                type: "text",
                placeholder: "",
            }
        }
        const addInput = state.body[a].form.concat(obj)

        const body = state.body.map((item, index) => {
            if (index === a) {
                return {...item, form: addInput}
            } else {
                return item
            }
        })

        setState({...state, body})
    }

    const addInputsToForm = (a) => {
        const obj = {
            title: "",
            elements: [
                {
                    type: "radio",
                    name: "",
                    label: "",
                    value: ""
                }
            ]
        }
        const addInputs = state.body[a].form.concat(obj)

        const body = state.body.map((item, index) => {
            if (index === a) {
                return {...item, form: addInputs}
            } else {
                return item
            }
        })

        setState({...state, body})

    }


    const handleInputChangeRadio = async (e, a, b, c) => {
        const element = {...state.body[a].form[b].elements[c], [e.target.name]: e.target.value}

        const elements = state.body[a].form[b].elements.map((el, index) => {
            if (index === c) {
                return element
            } else {
                return el
            }
        })

        const formEl = {...state.body[a].form[b], elements}

        const newForm = state.body[a].form.map((item, index) => {
            if (index === b) {
                return formEl
            } else {
                return item
            }
        })

        const newBody = state.body.map((item, index) => {
            if (index === a) {
                return {...item, form: newForm}
            } else {
                return item
            }
        })
        setState({...state, body: newBody})

    }

    const removeInput = (a, b) => {
        const newFrom = state.body[a].form.filter((_, i) => i !== b)

        const newBody = state.body.map((item, index) => {
            if (index === a) {
                return {...item, form: newFrom}
            } else {
                return item
            }
        })
        setState({...state, body: newBody})
    }

    const removeRadioButton = (a, b, c) => {
        const newElements = state.body[a].form[b].elements.filter((_, i) => i !== c)

        const formEl = {...state.body[a].form[b], elements: newElements}

        const newForm = state.body[a].form.map((_, i) => {
            if (i === b) {
                return formEl
            } else {
                return _
            }
        })

        const newBody = state.body.map((item, index) => {
            if (index === a) {
                return {...item, form: newForm}
            } else {
                return item
            }
        })
        console.log(newBody)
        setState({...state, body: newBody})

    }

    const removeRadioButtonGroup = (a, b) => {

    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await fetch(`http://localhost:8080/form`, {
            method: 'PUT',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(state)
        });
        const data = await res.json()
        setState(data)
    }


    return (
        <>
            <Header/>
            {loading ? <p>data is loading</p> :
                <div className={"page"}>
                    <form className="edit__form" onSubmit={(e) => handleSubmit(e)}>
                        <div className="form__group__header">
                            <h1>{state?.header?.title}</h1>
                        </div>

                        {state?.body?.map((data, index) => {
                            return <div key={index} className="form__body">
                                {data.subtitle !== undefined && <h3 className={"subheader"}>{data?.subtitle}</h3>}
                                {data.form.map((item, index1) => {
                                    return item.element ?
                                        <div className={"body__group"} key={`${index1}`}>
                                            <img
                                                className={"group__remove"}
                                                src={del} alt={"delete"}
                                                onClick={() => removeInput(index, index1)}/>
                                            <div className={"group__input__block"}>
                                                <p className={"block__p"}>Edit input title</p>
                                                <input className={"block__input"} defaultValue={item.element.title}
                                                       onChange={(e) => handleChangeInput(e, index, index1)}
                                                       name={"title"}/>
                                            </div>
                                            <div className={"group__input__block"}>
                                                <p className={"block__p"}>Edit input type</p>
                                                <select className={"block__select"}
                                                        onChange={(e) => handleChangeInput(e, index, index1)}
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
                                                       onChange={(e) => handleChangeInput(e, index, index1)}
                                                       name={"placeholder"}/>
                                            </div>
                                            <div className={"group__input__block"}>
                                                <p className={"block__p"}>Edit input name</p>
                                                <input className={"block__input"} defaultValue={item.element.name}
                                                       onChange={(e) => handleChangeInput(e, index, index1)}
                                                       name={"name"}/>
                                            </div>
                                            <input type={`${item.element.type}`}
                                                   className={"block__result"}
                                                   name={`${item.element.name}`}
                                                   placeholder={`${item.element.placeholder}`}/>


                                        </div>
                                        :
                                        <div className={"body__group"} key={`${index1}`}>
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
                                })}
                                <div className={"add__block"}>
                                    <img src={plus} alt={"plus"}
                                         className={"add__block__plus"}
                                         onClick={() => addInputToForm(index)}/>
                                    <p className={"add__block__p"}>Add input</p>

                                    <img src={plus} alt={"plus"}
                                         className={"add__block__plus"}
                                         onClick={() => addInputsToForm(index)}/>
                                    <p className={"add__block__p"}>Add input radio</p>
                                </div>
                            </div>
                        })}
                        <button className="btn" type={"submit"}>
                            Save
                        </button>
                    </form>
                </div>
            }
        </>
    )
        ;
};

export default EditFrom;
