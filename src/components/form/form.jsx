import React, {useState} from 'react';
import {useNavigate,useLocation} from "react-router-dom";

import "./form.css"


const Form = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const page = location.pathname === '/login'


    const [formState, setFormState] = useState({
        email: "",
        password: ''
    })
    console.log(formState)
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log()
    }

    const handleOnChange = (e) => {
        console.log(e.target.name)
        setFormState({...formState,[e.target.name] : e.target.value})
    }

    const register = () => {
        navigate('/registration')
    }

    return (
        <form className={"form"} onSubmit={handleSubmit}>
            <div className={"form_group"}>
                <label htmlFor={"email"} className={"label"}>Email address</label>
                <input id={"email"} className={"input"} type="text" name={"email"} value={formState.email} onChange={(event => handleOnChange(event))}/>
            </div>
            <div className={"form_group"}>
                <label  htmlFor={"password"} className={"label"}>Password</label>
                <input id={"password"} className={"input"} type="password" name={"password"} value={formState.password} onChange={(event => handleOnChange(event) )}/>
            </div>
            <div className='form_btn'>
                { page && <button className='btn_forgot' type={"button"} onClick={register}> Registration</button> }
                  <button className='btn_singIn' type={"submit"}>{ page? 'Sing in' : 'Registration'}</button>
            </div>
        </form>
    );
};

export default Form;