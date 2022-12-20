import React from 'react';
import Header from "../../components/header/header";
import {token} from "../../constants/storageKey";
import {useSelector} from "react-redux";

import "./user.css"


const User = () => {
    const {project} = useSelector((state) => state.project)
    console.log(project)

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


    return (
        <>
            <Header/>
            <div className={"user"}>

                <p>
                    Your project number is : {project.name}
                </p>
                <p>
                    Your project status {project.status}
                </p>
                {/*<div className="progress">*/}
                {/*    <div className="bar" style={{width: `${getProgress(project.status)}%`}}/>*/}
                {/*</div>*/}

                {isAuth && <div>
                    {project?.docs}
                </div>}

            </div>
        </>
    );
};

export default User;