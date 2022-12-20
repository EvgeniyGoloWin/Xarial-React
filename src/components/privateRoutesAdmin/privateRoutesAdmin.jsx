import React from 'react';
import {Navigate, Outlet} from "react-router-dom";
import {role, token} from "../../constants/storageKey";

import {redirect} from "react-router";

const PrivateRoutesAdmin = ({children}) => {
    const whatRole = sessionStorage.getItem(role)
    const isAuth = sessionStorage.getItem(token)

    if (whatRole === "admin") {
        redirect("/admin")
    }
    if (!isAuth) {
        return <Navigate to={'/login'}/>;
    }

    return children ? children : <Outlet/>;
};

export default PrivateRoutesAdmin;