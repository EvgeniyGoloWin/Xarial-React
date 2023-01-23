import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {token, role} from "../../constants/storageKey";

import "./header.css"

import logo from "../../assets/icons/xarial-icon.svg"

const Header = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const auth = sessionStorage.getItem(token)
    const admin = sessionStorage.getItem(role)
    const logOut = () => {
        sessionStorage.clear()
        navigate('/')
    }
    const singIn = () => {
        navigate('/login')
    }
    const goHome = () => {
        navigate('/')
    }
    const toAdmin = () => {
        navigate('/admin')
    }

    const toEditStatus = () => {
        navigate('/admin/editStatus')
    }
    const toEditForm = () => {
        navigate('/admin/editForm')
    }

    return (
        <header className={"header"}>
            <div className={"header__logo"}>
                <img className={"logo"} src={logo} alt={"logo"}/>
                <p className={"header__goHome"} onClick={goHome}>Xarial CMS</p>
            </div>
            <div className={"header__links"}>
                {(admin && location.pathname !== "/admin") &&
                    <button className={"link"} onClick={toAdmin}>Admin</button>}
                {location.pathname === "/admin" &&
                    <button className={"link"} onClick={toEditStatus}>Edit status</button>}
                {location.pathname === "/admin" && <button className={"link"} onClick={toEditForm}>Edit form</button>}
                {auth ? <button onClick={logOut} className={"btn"}>Log out</button> :
                    <button onClick={singIn} className={"btn"}>Sing in</button>}
            </div>
        </header>
    );
};

export default Header;