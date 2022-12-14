import React from 'react';

import "./admin.css"
import AdminBlock from "../../components/projectBlock/adminBlock/adminBlock";
import Header from "../../components/header/header";
import DragDrop from "../../components/drag&drop/drag&drop";

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
            <DragDrop/>
        </>
    );
};

export default Admin;