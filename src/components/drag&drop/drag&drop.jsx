import React, {useEffect, useRef, useState} from 'react';
import dragAndDrop from '../../assets/icons/drag.png'

import './drag&drop.css'
import form from "../form/form";

const DragDrop = () => {
        const [drag,setDrag] = useState(false)
        const [file,setFile] = useState([])
        const inputFile = useRef(null)


    const removeImage = (id) => {
        setFile((file) => file.filter((item) => item.id !== id));
    };

    useEffect(() => {
        setFile(file);
    }, []);

    function dragStartHandler(e) {
        e.preventDefault()
        setDrag(true)
    }

    function dragLeaveHandler(e) {
        e.preventDefault()
        setDrag(false)
    }

    async function onDropHandler(e) {
        e.preventDefault()
        let files = [...e.dataTransfer.files]

        // setFile()
        const formData = new FormData()
        await files.forEach((item)=> {
            formData.append(`${item.name}`, item)
        })
        // axios.post('url',formData,options)
        const res = await fetch(`http://localhost:8080/admin/upload/1287`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            body: formData // body data type must match "Content-Type" header
        });
        const url = await res.json()
        setFile(url)
        setDrag(false)
    }

    const onButtonClick = async (e) => {
        console.log(e)
        inputFile.current.click()
        // let files = e.dataTransfer.files
        console.log(inputFile.current.files)

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
};


    return (
        <>
        <div className='dragNdrop' onClick={e => onButtonClick(e)}>
                 <div
                    className='drop-area'
                    onDragStart={e => dragStartHandler(e)}
                    onDragLeave={e => dragLeaveHandler(e)}
                    onDragOver={e => dragStartHandler(e)}
                    onDrop={e => onDropHandler(e)}
                >{drag ? 'Transfer your files' : 'Drag&Drop or click here'}
                     <img className='image_drag' src={dragAndDrop} alt='upload file'/>
                 </div>
            <input className='inputFile' type='file' id='file' multiple ref={inputFile}/>
          </div>
            { file.length !== 0 &&
                 file.map((item,index)=> {
                        return <div key={index}>
                            <div className="img_remove">
                                <button className="img_remove" onClick={() => removeImage(file.id)}>X</button>
                            </div>
                            <img className="img_upload" src={`http://localhost:8080/${item}`}/>
                        </div>
                        })
            }
        </>
    );
};

export default DragDrop;