import React from 'react';
import {useNavigate} from "react-router";


import "./adminBlock.css"

const AdminBlock = ({item}) => {
    const navigate = useNavigate();
    const openItem = (name) => navigate(`/admin/contract/${name}`)

    console.log(item)
    return (
        <div className={"adminBlock"}>
            <p>{item.project_number}</p>
            <p>{item.status}</p>
            <button onClick={() => openItem(item.project_number)} className={"btn"}>Edit</button>
        </div>
    );
};

export default AdminBlock;