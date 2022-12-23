import React, {useEffect, useState} from 'react';
import Header from "../../components/header/header";
import {token} from "../../constants/storageKey";
import {baseUrl} from "../../constants/api";
import {useParams} from "react-router";


import "./project.css"
import {useNavigate} from "react-router-dom";


const Project = () => {
    const {number} = useParams()
    const navigate = useNavigate()
    const [project, setProject] = useState(null)
    const [loading, setLoading] = useState(false)

    const isAuth = sessionStorage.getItem(token)
    console.log(Boolean(isAuth))
    useEffect(() => {
        setLoading(true)
        fetch(`${baseUrl}/doc/${number}`).then((res) => res.json()).then(res => setProject(res))
        setTimeout(() => setLoading(false), 1500)
    }, [number])

    const onClickBackHome = () => navigate('/')

    return (
        <>
            <Header/>
            {loading ? <p className={"loader"}>Data is loading...</p> : <div className={"user"}>
                <div className="sub-header">
                    <button className="sub-header-button_back" onClick={onClickBackHome}>&#8592; back</button>
                </div>
                <p className={"project"}>
                    <b>Your project number is</b> : {project?.project_number}
                </p>
                <p className={"project"}>
                    <b>Your project status</b> : {project?.status}
                </p>

               <div>
                    {
                        project?.docs.map((item, index) =>
                            <a className={"doc"} href={`https://test-nscu.onrender.com/${item}`} target="_blank"
                               rel="noreferrer">doc {index + 1}</a> )
                    }
               </div>
            </div>}
        </>
    );
};

export default Project;
