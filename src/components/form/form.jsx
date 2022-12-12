import React from 'react';


import "./form.css"

const Form = () => {
    return (
        <form className={"form"}>
            <div className={"form_group"}>
                <label>Email</label>
                <input className={"input"} type="text"/>
            </div>
            <div className={"form_group"}>
                <label>Password</label>
                <input className={"input"} type="password"/>
            </div>
        </form>
    );
};

export default Form;