import React, {useEffect, useRef, useState} from 'react';
import Header from "../../components/header/header";
import {baseUrl} from "../../constants/api";

import './editStatus.css'
import {json} from "react-router";

const EditStatus = () => {
    const inputRef = useRef(null)
    const [state,setState] = useState([])

    useEffect(() => {
        fetch(`${baseUrl}/status`)
            .then(res => res.json())
            .then((res) => {
                setState(res)
            })},[])

    const handleClickAdd = async () => {
        await setState(prev => [...state,inputRef.current.value])
        inputRef.current.value = '';
    }

    const handleClickRemove = (name) => {
        const arr = state.filter((item) => item !== name)
         setState(arr)
    }

    const handleClickSave = async () => {
        const test = JSON.stringify(state)
        const res = await fetch(`${baseUrl}/status`, {
            method: 'PUT',
            body: test
        });
        const data = await res.json()
        setState(data)
    }

    return (
        <>
          <Header/>

            <div className="editPage">
                <div className="add_status">
                    <input className="input_status" ref={inputRef} />
                    <button className="btn" onClick={handleClickAdd}>Add</button>
                </div>
                {state?.map((item, index) => {
                return <div key={`${index}`} className="status"> <p>
                    {item}
                </p>
                    <button onClick={()=>handleClickRemove(item)} className="remove" type={"button"}>X
                    </button>
                </div>
            })}
                <div className='section_btn'>
                    <button type="button" onClick={handleClickSave} className="btn">Save</button>
                </div>
            </div>
        </>
    );
};

export default EditStatus;