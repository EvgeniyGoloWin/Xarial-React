import React, {useEffect, useState} from 'react';
import Header from "../../components/header/header";
import {token} from "../../constants/storageKey";
import {baseUrl} from "../../constants/api";
import {useParams} from "react-router";


import "./project.css"


const Project = () => {
    const {number} = useParams()

    const [project, setProject] = useState(null)
    const [loading, setLoading] = useState(false)

    const isAuth = sessionStorage.getItem(token)
    console.log(Boolean(isAuth))
    useEffect(() => {
        setLoading(true)
        fetch(`${baseUrl}/doc/${number}`).then((res) => res.json()).then(res => setProject(res))
        setTimeout(() => setLoading(false), 1500)
    }, [])


    return (
        <>
            <Header/>
            {loading ? <p className={"loader"}>Data is loading...</p> : <div className={"user"}>

                <p className={"project"}>
                    Your project number is : {project?.project_number}
                </p>
                <p className={"project"}>
                    Your project status : {project?.status}
                </p>

                {isAuth ? <div>
                    {project?.docs}
                </div> : <p className={"project"}>Sorry, but you can't see attach files until you log in</p>}


            </div>}
        </>
    );
};

export default Project;