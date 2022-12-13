import React from 'react';
import Header from "../../components/header/header";
import Form from "../../components/form/form";

import "./login.css"


const Login = () => {
    return (
        <>
            <Header/>
            <div className={"login"}>
                <Form/>
            </div>
        </>
    );
};

export default Login;