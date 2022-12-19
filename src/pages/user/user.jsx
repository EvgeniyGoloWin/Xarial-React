import React, {useEffect} from 'react';
import Header from "../../components/header/header";

// import {baseUrl} from "../../constants/api";

import "./user.css"
import {token} from "../../constants/storageKey";


const User = () => {

    const item = {
        name: "1287",
        status: "Request Received",
        docs: []
    }
    const isAuth = sessionStorage.getItem(token)


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
    useEffect(() => {
        // const res = fetch(`${baseUrl}/doc`)
    }, [])

    return (
        <>
            <Header/>
            <div className={"user"}>

                <p>
                    Your project number is : {item.name}
                </p>
                <p>
                    Your project status {item.status}
                </p>
                <div className="progress">
                    <div className="bar" style={{width: `${getProgress(item.status)}%`}}/>
                </div>

                isAuth && <div>
                ?
            </div>

            </div>
        </>
    );
};

export default User;