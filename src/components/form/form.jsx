import React from 'react';


import "./form.css"

const Form = () => {
    return (
        <form className={"form"}>
            <div className={"form_group"}>
                <label>Email address</label>
                <input className={"input"} type="text"/>
            </div>
            <div className={"form_group"}>
                <label>Password</label>
                <input className={"input"} type="password"/>
            </div>
            <div className='form_btn'>
            <button className='btn_forgot'> Forgot password</button>
            <button className='btn_singIn'> Sing in</button>
            </div>
        </form>
    );
};

export default Form;