import React from 'react';
import {useNavigate} from "react-router";


import "./adminBlock.css"

const AdminBlock = ({item}) => {
    const navigate = useNavigate();
    const openItem = (name) => navigate(`/admin/contract/${name}`)

    const getProgress = (status) => {
        switch (status) {
            case "pending":
                return 10;
            case "rejected":
                return 35;
            case "fulfilled":
                return 100;
        }
    }

    console.log(item)
    return (
        <div className={"adminBlock"}>
            <p>{item.name}</p>
                <p>{item.status}</p>
            <div className="progress">
                <div className="bar" style={{width: `${getProgress(item.status)}%`}}/>
            </div>
            <button onClick={() => openItem(item.name)} className={"btn"}>Edit</button>
        </div>
    );
};

export default AdminBlock;