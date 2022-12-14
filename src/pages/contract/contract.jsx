import React from 'react';
import Header from "../../components/header/header";
import DragDrop from "../../components/drag&drop/drag&drop";
import AdminBlock from "../../components/projectBlock/adminBlock/adminBlock";

import './contract.css'

const Contract = () => {

    const mock = [{
        name: "name",
        status: "status",
    }]

    return (
        <>
            <Header/>
            <h1 className={"h1"}>My project</h1>
            {mock.map((item, index) => {
                return <AdminBlock key={`${index}`} item={item}/>
            })}
            <DragDrop/>
        </>
    );
};

export default Contract;