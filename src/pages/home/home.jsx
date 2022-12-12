import React from 'react';

import "./home.css"
import Header from "../../components/header/header";


const Home = () => {
    return (
        <>
            <Header/>
        <div className={"home"}>
            <div className={"blue"}>
                <p className={"white"}>Xarial</p>
                <p className={"cms"}>CMS</p>
            </div>
            <div className={"blue"}>
                <p className={"text"}>Find information about your project</p>
            </div>
            <div className={"find"}>
                <input className={"input"} type="text"/>
                <button className={"find_btn"}>Find</button>
            </div>
        </div>
        </>
    );
};

export default Home;