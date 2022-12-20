import React from 'react';
import {useNavigate} from "react-router-dom";

import "./block.css"


const Block = ({item}) => {
    const navigate = useNavigate()

    const getProgress = (status) => {
        switch (status) {
            case "Request Received":
                return 10;
            case "Quote Generated":
                return 25;
            case "Quote Accept":
                return 35;
            case "Project in progress":
                return 60;
            case "Project delivered":
                return 80;
            case "Project Accept":
                return 100;
            default:
                return 0
        }
    }
    const handeClick = () => {
        navigate("/user")
    }

    return (
        <div>
            <div className={"block"} onClick={handeClick}>
                <p>{item.project_number}</p>
                <p>{item.status}</p>
                <div className="progress">
                    <div className="bar" style={{width: `${getProgress(item.status)}%`}}/>
                </div>
            </div>
        </div>
    );
};

export default Block;