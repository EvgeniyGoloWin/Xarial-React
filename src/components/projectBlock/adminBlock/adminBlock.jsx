import React from 'react';

import "./adminBlock.css"

const AdminBlock = ({item}) => {

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
            <select>
                <option>{item.status}</option>
            </select>
            <div className="progress">
                <div className="bar" style={{width: `${getProgress(item.status)}%`}}/>
            </div>
            <button className={"btn"}>Save</button>
        </div>
    );
};

export default AdminBlock;