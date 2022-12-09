import React, {useState} from 'react';
import {
    Navigate,
    Outlet,
} from 'react-router-dom';
import {useSelector} from "react-redux";

const PrivateRoutes = () => {
    const {auth} = useSelector((state) => state.user)

    if (!auth) {
        return <Navigate to={'/login'} replace/>;
    }

    return children ? children : <Outlet/>;

};

export default PrivateRoutes;