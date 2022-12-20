import React, {useEffect, useState} from 'react';
import Header from "../../components/header/header";
import DragDrop from "../../components/drag&drop/drag&drop";


import './contract.css'
import {baseUrl} from "../../constants/api";

const Contract = () => {

    const [status,setStatus] = useState(null)
    const [changeStatus,setChangeStatus] = useState(true)


    console.log(status)

    useEffect(() => {
        fetch(`${baseUrl}/status`)
            .then(res => res.json())
            .then((res)=> {
                setStatus(res)
            })
    }, [])

    console.log(changeStatus)

    useEffect(() => {
        fetch(`${baseUrl}//admin/changeStatus`)
            .then(res => res.json())
            .then((res)=> {
                setChangeStatus(res)
            })
    }, [])

    return (
        <>
            <Header/>
            <div className="wrapper_contract">
                <form className={"form_contract"}>
                        <label className={"label_contract"}>
                            <p>name</p>
                        </label>
                    <div>
                        {/*<label className={"label_contract"}>Status</label>*/}
                        <select className={"input"}>
                            {status?.map(item => (
                                <>
                                <option key={item}>
                                    {item}
                                </option>
                                </>
                            ))}
                        </select>
                    </div>
                        <DragDrop/>
                        <div>
                            <button className='btn' type="submit">Save</button>
                        </div>
                </form>
            </div>
            {/*<h1 className={"h1"}>My project</h1>*/}
            {/*{mock.map((item, index) => {*/}
            {/*    return <Block key={`${index}`} item={item}/>*/}
            {/*})}*/}
            {}
        </>
    );
};

export default Contract;