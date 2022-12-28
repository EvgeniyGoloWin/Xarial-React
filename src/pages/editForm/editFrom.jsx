import React, {useState} from 'react';
import Header from "../../components/header/header";

import "./editFrom.css"

const formData = {
    header: {
        title: "Xarial Development Services Quote"
    },
    body: [

        [
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
        ],


        [
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
            // {
            //     title: "Get a copy of the answers",
            //     element: {
            //         tag: "input",
            //         type: "checkbox",
            //         name: "copy",
            //         // placeholder: "Answer"??
            //     }
            // }
        ],


        [
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
            // {
            //     title: "Get a copy of the answers",
            //     element: {
            //         tag: "input",
            //         type: "checkbox",
            //         name: "copy",
            //         // placeholder: "Answer"??
            //     }
            // }

        ],


        [
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

        ],
        [{
            title: "Get a copy of the answers",
            element: {
                tag: "input",
                type: "checkbox",
                name: "copy",
                // placeholder: "Answer"??
            }
        }]


    ],
    footer: {
        buttons: {
            next: "Next",
            back: "Back",
            clear: "Clear Form"
        }
    },
    modal: {
        title: "Xarial Development Services Quote",
        text: "Thank you for submitting your request. Out team will be in touch with you shortly"
    }
}

// const mock = [{
//     divClassName: "form__group",
//     pClassName: "question",
//     pText: `Your email`,
//     inputType: "email",
//     inputName: "email",
//     inputPlaceholder: 'Email'
//
// }, {
//     divClassName: "form__group",
//     pClassName: "question",
//     pText: `Name`,
//     inputType: "text",
//     inputName: "name",
//     inputPlaceholder: 'Name'
// }, {
//     divClassName: "form__group",
//     pClassName: "question",
//     pText: `Company`,
//     inputType: "text",
//     inputName: "Company",
//     inputPlaceholder: 'Company'
// }]

const EditFrom = () => {
    const [state, setState] = useState(formData)

    const handleChange = (e, a, b) => {
        e.stopPropagation()
        let value = e.target.value
        setState({...state, body: state.body[a][b].title = value})

    }

    return (
        <>
            <Header/>
            <div className={"page"}>
                <form id="form" className="js-form">
                    <div className="form__group__header">
                        <h1>{state.header.title}</h1>
                    </div>
                    <div id="main-block" className="js-form">
                        {state.body.map((data, index) => {
                            return <div key={index}>
                                {data.map((item, index1) => {

                                    return item.element ? <div className="form__group" key={`${index1}`}>
                                            <input className="question" value={item.title} onChange={(e)=>handleChange(e,index,index1)}/>
                                            {item.element && <input type={`${item.element.type}`}
                                                                    className="edit_input js-input js-input-email answer"
                                                                    name={`${item.element.name}`}
                                                                    placeholder={`${item.element.placeholder}`}/>}

                                        </div>
                                        :
                                        <div className="form__group" key={`${index1}`}>
                                             <input className="question" value={item.title} onChange={()=>handleChange(index,index1)}/>
                                            <div className="radioBtn service">
                                                {item?.elements.map((btn, index) => {
                                                    console.log(btn)
                                                    return <span key={`${index}`}><label htmlFor={btn.value}>{
                                                        btn.label
                                                    }
                                                        <input className="answer" type={btn.type} id="1" name={btn.name}
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
                                {state.footer.buttons.next}
                            </button>
                            <button className="btn_btn">
                                {state.footer.buttons.back}
                            </button>
                            <button className="btn_btn" type="reset">{state.footer.buttons.clear}</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
        ;
};

export default EditFrom;
