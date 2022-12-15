import React from 'react';
import {Navigate, Outlet} from "react-router-dom";
import {role, token} from "../../constants/storageKey";
import login from "../../pages/login/login";
import {redirect} from "react-router";

const PrivateRoutesAdmin = ({children}) => {
    const whatRole = sessionStorage.getItem(role)


    if (whatRole === "admin") {
        redirect("/admin")
    }

    return children ? children : <Outlet/>;
};

export default PrivateRoutesAdmin;