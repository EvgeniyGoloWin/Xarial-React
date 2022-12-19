import React from 'react';
import {useNavigate} from "react-router-dom";
import {token} from "../../constants/storageKey";

import "./header.css"


const Header = () => {
    const navigate = useNavigate()

    const auth = sessionStorage.getItem(token)


    const logOut = () => {
        sessionStorage.clear()
        navigate('/')
    }
    const singIn = () => {
        navigate('/login')
    }
    const goHome = () =>{
        navigate('/')
    }
    return (
        <header className={"header"}>
            <div className={"logo"}>
                <p className={"goHome"} onClick={goHome}>Xarial CMS</p>
            </div>
            <div>
                {auth ? <button onClick={logOut} className={"btn"}>Log out</button> :
                    <button onClick={singIn} className={"btn"}>Sing in</button>}
            </div>
        </header>
    );
};

export default Header;