import React from 'react';
import {
    Navigate,
    Outlet,
} from 'react-router-dom';

import {role, token} from "../../constants/storageKey";


const PrivateRoutes = ({children}) => {
    const isAuth = sessionStorage.getItem(token)
    const whatRole = sessionStorage.getItem(role)
    console.log(typeof whatRole)


    if (!isAuth) {
        return <Navigate to={'/login'}/>;
    } else if (isAuth && whatRole === "user") {
        return <Navigate to={'/user'}/>;
    } else if (isAuth && whatRole === "admin") {
        return <Navigate to={'/admin'}/>;
    }

    return children ? children : <Outlet/>;

};

export default PrivateRoutes;