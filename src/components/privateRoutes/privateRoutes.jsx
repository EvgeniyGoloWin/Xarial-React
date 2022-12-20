import React from 'react';
import {
    Navigate,
    Outlet,
} from 'react-router-dom';

import {role, token} from "../../constants/storageKey";


const PrivateRoutes = ({children}) => {
    const isAuth = sessionStorage.getItem(token)

    if (!isAuth) {
        return <Navigate to={'/login'}/>;
    }

    return children ? children : <Outlet/>;

};

export default PrivateRoutes;