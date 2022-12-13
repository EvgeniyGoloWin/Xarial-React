import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

import "./form.css"


const Form = () => {
    const navigate = useNavigate()
    const [formState, setFormState] = useState({
        email: "",
        password: ''
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log()
    }
    const register = () => {
        navigate('/registration')
    }

    return (
        <form className={"form"} onSubmit={handleSubmit}>
            <div className={"form_group"}>
                <label htmlFor={"email"} className={"label"}>Email address</label>
                <input id={"email"} className={"input"} type="text" name={"email"} value={formState.email}/>
            </div>
            <div className={"form_group"}>
                <label  htmlFor={"password"} className={"label"}>Password</label>
                <input id={"password"} className={"input"} type="password" name={"password"} value={formState.password}/>
            </div>
            <div className='form_btn'>
                <button className='btn_forgot' type={"button"} onClick={register}> Registration</button>
                <button className='btn_singIn' type={"submit"}> Sing in</button>
            </div>
        </form>
    );
};

export default Form;