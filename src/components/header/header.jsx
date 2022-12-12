import React from 'react';

import "./header.css"
import {useSelector} from "react-redux";

const Header = () => {
    const {auth} = useSelector((state) => state.user)

    return (
        <header className={"header"}>
        <div className={"logo"}>
            <p>Xarial CMS</p>
        </div >
            <div>
            {auth ? <button className={"btn"}>Log out</button> : <button className={"btn"}>Sing in</button>}
            </div>
        </header>
    );
};

export default Header;