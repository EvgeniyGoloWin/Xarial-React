import React, {useState} from 'react';
import {useNavigate, useLocation} from "react-router-dom";
import {baseUrl} from "../../constants/api";
import {role, token} from "../../constants/storageKey";
import {useDispatch} from "react-redux";
import {setUser} from "../../store/slice/userSlice";


import "./form.css"


const Form = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const page = location.pathname === '/login'


    const [formState, setFormState] = useState({
        email: "",
        password: ''
    })

    const handleSubmitLogin = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('email', `${formState.email}`)
        formData.append('password', `${formState.password}`)
        const res = await fetch(`${baseUrl}/user/login`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            body: formData // body data type must match "Content-Type" header
        });
        const data = await res.json()
        if (data.token) sessionStorage.setItem(token, data.token)
        if (data.token) sessionStorage.setItem(role, data.role)
        dispatch(setUser(data))
        data.role === "user" ? navigate("/project") : navigate("/admin")
    }

    const handleSubmitRegister = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('email', `${formState.email}`)
        formData.append('password', `${formState.password}`)
        const res = await fetch(`${baseUrl}/user/register`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            body: formData // body data type must match "Content-Type" header
        });
        console.log(res.json())
    }

    const handleOnChange = (e) => {
        setFormState({...formState, [e.target.name]: e.target.value})
    }

    const register = () => {
        navigate('/registration')
    }

    return (
        <form className={"form"} onSubmit={page ? handleSubmitLogin : handleSubmitRegister}>
            <div className={"form_group"}>
                <label htmlFor={"email"} className={"label"}>Email address</label>
                <input id={"email"} className={"input"} type="text" name={"email"} value={formState.email}
                       onChange={(event => handleOnChange(event))}/>
            </div>
            <div className={"form_group"}>
                <label htmlFor={"password"} className={"label"}>Password</label>
                <input id={"password"} className={"input"} type="password" name={"password"} value={formState.password}
                       onChange={(event => handleOnChange(event))}/>
            </div>
            <div className='form_btn'>
                {page && <button className='btn_forgot' type={"button"} onClick={register}> Registration</button>}
                <button className='btn_singIn' type={"submit"}>{page ? 'Sing in' : 'Registration'}</button>
            </div>
        </form>
    );
};

export default Form;