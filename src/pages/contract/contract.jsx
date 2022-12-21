import React, {useEffect, useState} from 'react';
import Header from "../../components/header/header";
import DragDrop from "../../components/drag&drop/drag&drop";


import './contract.css'
import {baseUrl} from "../../constants/api";
import {useParams} from "react-router";
import dragAndDrop from "../../assets/icons/drag.png";

const Contract = () => {
    const {number} = useParams()
    const [status, setStatus] = useState(null)
    const [loading, setLoading] = useState(false)
    // const [changeStatus,setChangeStatus] = useState(true)
    const [project, setProject] = useState({})

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
    }, [])


    // useEffect(() => {
    //     fetch(`${baseUrl}/`)
    //         .then(res => res.json())
    //         .then((res)=> {
    //             setChangeStatus(res)
    //         })
    // }, [])

    async function onDropHandler(e) {
        e.preventDefault()
        // let files = e.dataTransfer.files
        setProject({...project, docs: e.dataTransfer.files})
        // setFile()
        // const formData = new FormData()
        // await files.forEach((item) => {
        //     formData.append(`${item.name}`, item)
        // })
        // axios.post('url',formData,options)
        // const res = await fetch(`http://localhost:8080/admin/upload/1287`, {
        //     method: 'POST', // *GET, POST, PUT, DELETE, etc.
        //     body: formData // body data type must match "Content-Type" header
        // });
        // const url = await res.json()

    }

    const onChangeFiles = async (e) => {
        console.log(e.target.files)
        setProject({...project, docs: e.target.files})
        // let files = e.dataTransfer.files


        // setFile()
        // const formData = new FormData()
        // await files.forEach((item)=> {
        //     formData.append(`${item.name}`, item)
        // })
        // // axios.post('url',formData,options)
        // const res = await fetch(`http://localhost:8080/admin/upload/1287`, {
        //     method: 'POST', // *GET, POST, PUT, DELETE, etc.
        //     body: formData // body data type must match "Content-Type" header
        // });
        // const url = await res.json()
        // setFile(url)
    }


    return (
        <>
            <Header/>
            {loading ? <p>Data is loading</p> : <div className="wrapper_contract">
                <form className={"form_contract"}>
                    <label className={"label_contract"}>
                        <p>Project number is: {project?.project_number}</p>
                    </label>
                    <div>
                        <select className={"select"}>
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
                            return <div key={index}><p>{item.name}</p>
                                <div className="img_remove">
                                    <button className="img_remove">X</button>
                                </div>
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