import React, {useEffect, useState} from 'react';
import AdminBlock from "../../components/projectBlock/adminBlock/adminBlock";
import Header from "../../components/header/header";

import "./admin.css"
import {baseUrl} from "../../constants/api";


const Admin = () => {

    const [projects,setProjects] = useState()
    console.log(projects)

    useEffect(() => {
        fetch(`${baseUrl}/docs`)
            .then(res => res.json())
            .then((res)=> {
                setProjects(res)
            })
    }, [])

    return (
        <>
            <Header/>
            <div className={"admin"}>
                <h1 className={"h1"}>Projects</h1>
                {projects?.map((item, index) => {
                    return <AdminBlock key={`${index}`} item={item}/>
                })}
            </div>
        </>
    );
};

export default Admin;