import React, {useEffect, useState} from 'react';
import Header from "../../components/header/header";
import {baseUrl} from "../../constants/api";
import {useParams} from "react-router";
import dragAndDrop from "../../assets/icons/drag.png";


import './contract.css'


const Contract = () => {
    const {number} = useParams()
    const [status, setStatus] = useState(null)
    const [loading, setLoading] = useState(false)
    // const [changeStatus,setChangeStatus] = useState(true)
    const [project, setProject] = useState({})
    const [deletedFiles, setDeletedFiles] = useState([])
    console.log(deletedFiles)
    console.log(project)

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


    // useEffect(() => {
    //     fetch(`${baseUrl}/`)
    //         .then(res => res.json())
    //         .then((res)=> {
    //             setChangeStatus(res)
    //         })
    // }, [])

    const onDropHandler = async (e) => {
        e.preventDefault()
        setProject({...project, docs: [...e.dataTransfer.files]})

    }
    const changeSelectValue = (e) => {
        setProject({...project, status: e.target.value})
    }

    const onChangeFiles = async (e) => {
        console.log(e.target.files)
        setProject({...project, docs: [...e.target.files]})
    }
    const removeFile = (name) => {
        const arr = []
        arr.push(name)
        setDeletedFiles(arr)
        const test = project.docs.filter((item) => item !== name)
        console.log(test)
        setProject({...project, docs: test})
    }
    const onHandleSubmit = async (event) => {
        event.preventDefault()
        const formData = new FormData()
        await project.docs.forEach((item) => {
            formData.append(`${item.name}`, item)
        })
        formData.append(`status`, project.status)

        const res = await fetch(`http://localhost:8080/admin/project/${number}`,
            {
                method: "PUT",
                body: formData
            })
        const updatedProject = res.json()

        // if (deletedFiles.length !== 0) {
        //     await fetch(`http://localhost:8080/admin/project/${number}`,
        //         {
        //             method: "DELETE",
        //             body: JSON.parse(deletedFiles)
        //         })
        // }
        setProject(updatedProject)
    }

    return (
        <>
            <Header/>
            {loading ? <p>Data is loading</p> : <div className="wrapper_contract">
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
                                       rel="noreferrer">doc
                                        ${index}</a> :
                                    <p className={"name"}>{item.name}</p>}
                                <button className="remove" type={"button"}
                                        onClick={() => removeFile(typeof item === 'string' ? item : item.name)}>X
                                </button>
                            </div>
                        })
                    }

                    <button className='btn' type="submit">Save</button>
                </form>
            </div>}
        </>
    );
};

export default Contract;