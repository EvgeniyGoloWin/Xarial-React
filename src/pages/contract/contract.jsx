import React, {useEffect, useState} from 'react';
import Header from "../../components/header/header";
import {baseUrl} from "../../constants/api";
import {useParams} from "react-router";
import dragAndDrop from "../../assets/icons/drag.png";


import './contract.css'
import {useNavigate} from "react-router-dom";


const Contract = () => {
    const {number} = useParams()
    const navigate = useNavigate()
    const [status, setStatus] = useState(null)
    const [loading, setLoading] = useState(false)
    const [project, setProject] = useState({})
    const [deletedFiles, setDeletedFiles] = useState([])
    console.log(deletedFiles)
    console.log('project', project)

    useEffect(() => {
        setLoading(true)
        fetch(`${baseUrl}/doc/${number}`)
            .then(res => res.json())
            .then((res) => {
                setProject(res)
            })

        fetch(`${baseUrl}/status`)
            .then(res => res.json())
            .then((res) => {
                setStatus(res)
            })

        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [number])


    const onDropHandler = async (e) => {
        e.preventDefault()
        setProject({...project, docs: [...e.dataTransfer.files]})

    }
    const changeSelectValue = (e) => {
        setProject({...project, status: e.target.value})
    }

    const onChangeFiles = async (e) => {
        setProject({...project, docs: [...project.docs, ...e.target.files]})
    }
    const removeUploadedFile = (name) => {
        const arr = project.docs.filter((item) => item !== name)
        setProject({...project, docs: arr})
        setDeletedFiles(prev => [...deletedFiles, name])
    }
    const removeFile = (file) => {
        const arr = project.docs.filter((item) => item.name !== file.name)
        setProject({...project, docs: arr})
    }
    const onHandleSubmit = async (event) => {
        event.preventDefault()
        const formData = new FormData()
        await project.docs.forEach((item) => {
            if (typeof item !== "string") formData.append(`${item.name}`, item)
        })
        formData.append(`status`, project.status)

        if (deletedFiles.length !== 0) {
            await fetch(`${baseUrl}/admin/project/${number}`,
                {
                    method: "DELETE",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(deletedFiles)
                })
        }
        if (deletedFiles.length === 0) {
            const res = await fetch(`${baseUrl}/admin/project/${number}`,
                {
                    method: "PUT",
                    body: formData
                })
            const updatedProject = await res.json()
            setProject(updatedProject)
        }
    }
    const onClickBackAdmin = () => navigate('/admin')

    return (
        <>
            <Header/>
            {loading ? <p>Data is loading</p> : <div className="wrapper_contract">
                <div className="sub-header">
                    <button className="sub-header-button_back" onClick={onClickBackAdmin}>&#8592; back</button>
                </div>
                <form className={"form_contract"} onSubmit={(e) => onHandleSubmit(e)}>
                    <label className={"label_contract"}>
                        <p>Project number is: {project?.project_number}</p>
                    </label>
                    <div>
                        <select className={"select"} onChange={(e) => changeSelectValue(e)}>
                            <option value={project?.status}>{project?.status}</option>
                            {status?.filter((status) => status !== project.status).map((item, index) => (
                                <option key={`${index}`} value={item}>
                                    {item}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className='dragNDrop'>
                        <div
                            className='drop-area'
                            onDrop={(e) => onDropHandler(e)}
                        >Click or drop files
                            <img className='image_drag' src={dragAndDrop} alt='upload file'/>
                            <input className='inputFile' type='file' id='file' multiple onChange={onChangeFiles}/>
                        </div>

                    </div>
                    {Object.keys(project).length &&
                        Array.from(project?.docs).map((item, index) => {
                            return <div className="show_upload_files" key={index}>
                                {typeof item === 'string' ?
                                    <a className={"doc"} href={`http://localhost:8080/${item}`} target="_blank"
                                       rel="noreferrer">doc {index + 1}</a> :
                                    <p className={"name"}>{item.name}</p>}
                                <button className="remove" type={"button"}
                                        onClick={() => typeof item === 'string' ? removeUploadedFile(item) : removeFile(item)}>X
                                </button>
                            </div>
                        })
                    }

                    <button className='btn' type="submit">Save</button>

                    <div className='user_info_table' dangerouslySetInnerHTML={{__html: project?.user_info}}/>
                </form>

            </div>}
        </>
    );
};

export default Contract;
