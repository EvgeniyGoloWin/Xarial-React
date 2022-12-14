import React from 'react';
import Form from "../../components/form/form";

import './registration.css'
import Header from "../../components/header/header";

const Registration = () => {
    return (
        <>
        <Header/>
        <div className={"registration"}>
            <Form/>
        </div>
            </>
    );
};

export default Registration;