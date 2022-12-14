import React from 'react';
import AdminBlock from "../../components/projectBlock/adminBlock/adminBlock";
import Header from "../../components/header/header";

import "./admin.css"


const Admin = () => {
    const mock = [{
        name: "name",
        status: "status",
    }, {
        name: "name2",
        status: "rejected",
    }, {
        name: "name3",
        status: "fulfilled",
    }]
    return (
        <>
            <Header/>
            <div className={"admin"}>
                <h1 className={"h1"}>Projects</h1>
                {mock.map((item, index) => {
                    return <AdminBlock key={`${index}`} item={item}/>
                })}
            </div>
        </>
    );
};

export default Admin;