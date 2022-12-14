import React, {useRef, useState} from 'react';

import "./home.css"
import Header from "../../components/header/header";
import Block from "../../components/projectBlock/block/block";


const Home = () => {
    const [find, setFind] = useState('')
    const [res, setRes] = useState({})

    const inputChange = (e) => {
        setFind(e.target.value)
    }
    const handleClick = async () => {
        let formData = new FormData()
        formData.append(`number`, `${find}`)
        const res = await fetch(`http://localhost:8080/user/search`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            body: formData // body data type must match "Content-Type" header
        });

        const data = await res.json()
        setRes(data)
        setFind('')
    }
    console.log(res)
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
                    <input className={"input"} type="number" value={find}
                           onChange={(event) => inputChange(event)}/>
                    <button className={"find_btn"} type={"submit"} onClick={handleClick}>Find</button>
                </div>
                {Object.keys(res).length === 0 ? null : Object.keys(res).length === 1 ? <p className={"error"}>{res?.message}</p> :
                    <Block item={res}/>
                }
            </div>
        </>
    );
};

export default Home;