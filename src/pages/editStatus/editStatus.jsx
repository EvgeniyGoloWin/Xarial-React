import React, {useEffect, useRef, useState} from 'react';
import Header from "../../components/header/header";
import {baseUrl} from "../../constants/api";
import EditStatusItem from "./editStatusItem";

import './editStatus.css'

const EditStatus = () => {
    const inputRef = useRef(null)
    const [state, setState] = useState([])

    useEffect(() => {
        fetch(`${baseUrl}/status`)
            .then(res => res.json())
            .then((res) => {
                setState(res)
            })
    }, [])

    const handleClickRemove = (name) => {
        const arr = state.filter((item) => item !== name)
        setState(arr)
    }

    const handleClickUpdate = (index, text) => {
        const updateText = state.map((item, i) => {
            if (index === i) {
                return text
            } else {
                return item
            }
        })
        setState(updateText)
    }

    const handleClickAdd = () => {
        setState([...state, inputRef.current.value])
        inputRef.current.value = ''
    }

    const handleClickSave = async () => {

        const res = await fetch(`${baseUrl}/status`, {
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
            <div className="editPage">
                <div className="add_status">
                    <input className="input_status" ref={inputRef}/>
                    <button className="btn" onClick={handleClickAdd}>Add</button>
                </div>
                {state.length && state?.map((item, index) => {
                    return <EditStatusItem key={index} item={item} index={index} handleClickUpdate={handleClickUpdate}
                                           handleClickRemove={handleClickRemove}/>
                })}
                <div className='section_btn'>
                    <button type="button" onClick={handleClickSave} className="btn">Save</button>
                </div>
            </div>
        </>
    );
};

export default EditStatus;