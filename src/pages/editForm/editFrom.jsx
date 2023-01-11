import React, {useEffect, useState} from 'react';
import Header from "../../components/header/header";

import "./editFrom.css"
import {baseUrl} from "../../constants/api";


const EditFrom = () => {
    useEffect(() => {
        setLoading(true)

        fetch(`${baseUrl}/form`).then((res) => res.json()).then((res2) => setState(res2))
        setTimeout(() => {
            setLoading(false)
        }, 1500)
    }, [])

    const [state, setState] = useState([])
    const [loading, setLoading] = useState(false)

    const handleChangeInputTitle = async (e, a, b) => {
        e.stopPropagation()
        e.preventDefault()
        let value = e.target.value
        // const element = {...state.body[a].form[b].element, name: value}

        const formEl = {...state.body[a].form[b], title: value}
        console.log(formEl)
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

         setState({...state,  body: body})

    }

    // const handleInputChangeRadio = async (e, a, b) => {
    //     const title = {...state.body[a].form[b], title: e.target.value}
    //
    //     const arr = state.body[a].form.map((item, index) => {
    //         if (index === b) {
    //             return title
    //         } else {
    //             return item
    //         }
    //     })
    //
    //
    //     const body = state.body.map((item, index) => {
    //         if (index === a) {
    //             return {...item, form: arr}
    //         } else {
    //             return item
    //         }
    //     })
    //
    //     await setState({...state, body: body})
    // }
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
                                                       onChange={(e) => handleChangeInputTitle(e, index, index1)}/>
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
