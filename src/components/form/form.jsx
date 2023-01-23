import React, {useState} from 'react';
import {useNavigate, useLocation} from "react-router-dom";
import {baseUrl} from "../../constants/api";
import {role, token} from "../../constants/storageKey";
import {useDispatch} from "react-redux";
import {setUser} from "../../store/slice/userSlice";
import axios from "axios";

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

        const res = await axios.post(`${baseUrl}/user/login`, formState);
        const data = await res.data
        console.log(data)
        if (data.token) sessionStorage.setItem(token, data.token)
        if (data.token) sessionStorage.setItem(role, data.role)
        dispatch(setUser(data))
        data.role === "user" ? navigate("/project") : navigate("/admin")
    }

    const handleSubmitRegister = async (e) => {
        e.preventDefault()

        const res = await axios.post(`${baseUrl}/user/register`, formState);

        console.log(res.data)
    }

    const handleOnChange = (e) => {
        setFormState({...formState, [e.target.name]: e.target.value})
    }

    const register = () => {
        navigate('/registration')
    }

    return (
        <form className={"registration__form"} onSubmit={page ? handleSubmitLogin : handleSubmitRegister}>
            <div className={"form__block"}>
                <label htmlFor={"email"} className={"form__block__label"}>Email address</label>
                <input id={"email"} className={"form__block__input"} type="text" name={"email"} value={formState.email}
                       onChange={(event => handleOnChange(event))} required/>
            </div>
            <div className={"form__block"}>
                <label htmlFor={"password"} className={"form__block__label"}>Password</label>
                <input id={"password"} className={"form__block__input"} type="password" name={"password"}
                       value={formState.password}
                       onChange={(event => handleOnChange(event))} required/>
            </div>
            <div className={"registration__form__buttons"}>
                {page &&
                    <button className={"buttons__forgot"} type={"button"} onClick={register}> Registration</button>}
                <button className={"buttons_singIn"} type={"submit"}>{page ? 'Sing in' : 'Registration'}</button>
            </div>
        </form>
    );
};

export default Form;