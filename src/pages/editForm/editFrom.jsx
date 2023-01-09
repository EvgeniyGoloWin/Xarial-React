import React, {useEffect, useState} from 'react';
import Header from "../../components/header/header";

import "./editFrom.css"
import {baseUrl} from "../../constants/api";

const formData = {
    header: {
        title: "Xarial Development Services Quote",


    },
    body: [

        {

            form: [
                {
                    title: "Your email",
                    element: {
                        tag: "input",
                        type: "email",
                        name: "email",
                        placeholder: "Email"
                    }
                },
                {
                    title: "Name",
                    element: {
                        tag: "input",
                        type: "text",
                        name: "name",
                        placeholder: "Name"
                    }
                },
                {
                    title: "Company",
                    element: {
                        tag: "input",
                        type: "text",
                        name: "company",
                        placeholder: "Company"
                    }
                },
                {
                    title: "Country",
                    element: {
                        tag: "input",
                        type: "text",
                        name: "country",
                        placeholder: "Country"
                    }
                },
                {
                    title: "What type of service are you looking for?",
                    typeBlock: 'transition_form',
                    elements: [
                        {
                            tag: "input",
                            type: "radio",
                            name: "service",
                            value: '1',
                            label: "New Product/Macro development"
                        }, {
                            tag: "input",
                            type: "radio",
                            name: "service",
                            value: '2',
                            label: "SOLIDWORKS API consultancy"
                        },
                        {
                            tag: "input",
                            type: "radio",
                            name: "service",
                            value: '3',
                            label: "Other"
                        }]
                }
            ]
        },


        {
            subtitle: "SOLIDWORKS API Consultancy",
            form: [
                {
                    title: "What type of application do you want to develop?",
                    elements: [
                        {
                            tag: "input",
                            type: "radio",
                            name: "application",
                            value: 'VBA Macro',
                            label: "New Product/Macro development"
                        },
                        {
                            tag: "input",
                            type: "radio",
                            name: "application",
                            value: 'Add-in',
                            label: "SOLIDWORKS API consultancy"
                        },
                        {
                            tag: "input",
                            type: "radio",
                            name: "application",
                            value: 'Stand-alone application',
                            label: "Stand-alone application"
                        }, {
                            tag: "input",
                            type: "radio",
                            name: "application",
                            value: 'Not Sure',
                            label: "Not Sure"
                        }
                    ]
                }, {
                    title: "Describe the product you are looking to develop",
                    element: {
                        tag: "input",
                        type: "text",
                        name: "describe",
                        placeholder: "Answer"
                    }
                }, {
                    title: "Will this product be used",
                    elements: [
                        {
                            tag: "input",
                            type: "radio",
                            name: "product",
                            value: 'Internally in the company',
                            label: "Internally in the company"
                        },
                        {
                            tag: "input",
                            type: "radio",
                            name: "product",
                            value: 'Externally (resale)',
                            label: "Externally (resale)"
                        },
                        {
                            tag: "input",
                            type: "radio",
                            name: "product",
                            value: 'Both',
                            label: "Both"
                        }
                    ]
                },
                {

                    title: "Expected product delivery date",
                    element: {
                        tag: "input",
                        type: "date",
                        name: "Expected product delivery date",
                        // placeholder: "Answer"??
                    }
                },
                {
                    title: "Do you have a budget for this service, if so, please specify the range",
                    element: {
                        tag: "input",
                        type: "text",
                        name: "budget",
                        placeholder: "Answer"
                    }
                },
                {
                    title: "Get a copy of the answers",
                    element: {
                        tag: "input",
                        type: "checkbox",
                        name: "copy",
                        // placeholder: "Answer"??
                    }
                }
            ]
        },


        {
            subtitle: "Will this product be used",
            form: [
                {
                    title: "Describe the requirements ",
                    element: {
                        tag: "input",
                        type: "text",
                        name: "Describe the requirements",
                        placeholder: "Answer"
                    }
                },
                {
                    title: "Do you have a budget for this service, if so, please specify the range",
                    element: {
                        tag: "input",
                        type: "text",
                        name: "Do you have a budget for this service, if so, please specify the range",
                        placeholder: "Answer"
                    }
                },
                {
                    title: "Get a copy of the answers",
                    element: {
                        tag: "input",
                        type: "checkbox",
                        name: "copy",
                        // placeholder: "Answer"??
                    }
                }

            ]
        },


        {
            subtitle: "Other service",
            form: [
                {
                    title: "Describe the requirements ",
                    element: {
                        tag: "input",
                        type: "text",
                        name: "Describe the requirements",
                        placeholder: "Answer"
                    }
                },
                {
                    title: "Do you have a budget for this service, if so, please specify the range",
                    element: {
                        tag: "input",
                        type: "text",
                        name: "Do you have a budget for this service, if so, please specify the range",
                        placeholder: "Answer"
                    }
                },
                {
                    title: "Get a copy of the answers",
                    element: {
                        tag: "input",
                        type: "checkbox",
                        name: "copy",
                        // placeholder: "Answer"??
                    }
                }

            ]
        },


    ],
    footer: {
        buttons: {
            next: "Next",
            back: "Back",
            clear: "Clear Form",
            submit: "Submit"
        }
    },
    modal: {
        title: "Xarial Development Services Quote",
        text: "Thank you for submitting your request. Out team will be in touch with you shortly"
    }
}

const EditFrom = () => {

    useEffect(() => {
        setLoading(true)

        fetch(`${baseUrl}/form`).then((res) => res.json()).then((res2) => setState(res2))
        setTimeout(() => {
            setLoading(false)
        }, 1500)
    }, [])
    const [state, setState] = useState(formData)
    const [loading, setLoading] = useState(false)

    console.log(state)

    const handleChangeInputTitle = async (e, a, b) => {
        e.stopPropagation()
        e.preventDefault()
        let value = e.target.value
        const element = {...state.body[a].form[b].element, name: value}

        const formEl = {title: value, element}

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

        await setState({...state, body: body})

    }

    const handleInputChangeRadio = async (e, a, b) => {
        const title = {...state.body[a].form[b], title: e.target.value}

        const arr = state.body[a].form.map((item, index) => {
            if (index === b) {
                return title
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

        await setState({...state, body: body})
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
                    <form id="form" className="js-form" onSubmit={(e) => handleSubmit(e)}>
                        <div className="form__group__header">
                            <h1>{state?.header?.title}</h1>
                        </div>
                        <div id="main-block" className="js-form">
                            {state?.body?.map((data, index) => {
                                return <div key={index}>
                                    {data.subtitle !== undefined && <h3 className={"subheader"}>{data?.subtitle}</h3>}
                                    {data.form.map((item, index1) => {
                                        return item.element ? <div className="form__group" key={`${index1}`}>
                                                <input className="editInput" defaultValue={item.title}
                                                       onChange={(e) => handleChangeInputTitle(e, index, index1)}/>
                                                {item.element && <input type={`${item.element.type}`}
                                                                        className="edit_input js-input js-input-email answer"
                                                                        name={`${item.element.name}`}
                                                                        placeholder={`${item.element.placeholder}`}/>}

                                            </div>
                                            :
                                            <div className="form__group" key={`${index1}`}>
                                                <input className="editInput" value={item.title}
                                                       onChange={(e) => handleInputChangeRadio(e, index, index1)}/>
                                                <div className="radioBtn service">
                                                    {item?.elements.map((btn, index) => {
                                                        return <span key={`${index}`}><label htmlFor={btn.value}>{
                                                            btn.label
                                                        }
                                                            <input className="answer" type={btn.type} id="1"
                                                                   name={btn.name}
                                                                   value={btn.value}/>
                                    </label></span>
                                                    })}

                                                </div>
                                            </div>
                                    })}

                                </div>
                            })}


                            <div className="block_btn">
                                <button className="btn_btn">
                                    {state?.footer?.buttons?.next}
                                </button>
                                <button className="btn_btn">
                                    {state?.footer?.buttons?.back}
                                </button>
                                <button className="btn_btn">{state?.footer?.buttons?.submit}</button>
                                <button className="btn_btn">{state?.footer?.buttons?.clear}</button>
                            </div>
                        </div>
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
