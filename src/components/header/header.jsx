import React from 'react';

import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import "./header.css"


const Header = () => {
    const navigate = useNavigate()

    // const {auth} = useSelector((state) => state.user)
    const auth = false


    const logOut = () => {

    }
    const singIn = () => {
        navigate('/login')
    }
    return (
        <header className={"header"}>
            <div className={"logo"}>
                <p>Xarial CMS</p>
            </div>
            <div>
                {auth ? <button onClick={logOut} className={"btn"}>Log out</button> :
                    <button onClick={singIn} className={"btn"}>Sing in</button>}
            </div>
        </header>
    );
};

export default Header;