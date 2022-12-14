import React, {useRef, useState} from 'react';
import dragAndDrop from '../../assets/icons/drag.png'

import './drag&drop.css'
import form from "../form/form";

const DragDrop = () => {
        const [drag,setDrag] = useState(false)
        const inputFile = useRef(null)

    function dragStartHandler(e) {
        e.preventDefault()
        setDrag(true)
    }

    function dragLeaveHandler(e) {
        e.preventDefault()
        setDrag(false)
    }

    function onDropHandler(e) {
        e.preventDefault()
        let files = [...e.dataTransfer.files]
        console.log(files)
        const formData = new FormData()
        formData.append("file", files[0])
        formData.append("userId", 1)
        // axios.post('url',formData,options)

        setDrag(false)
    }

    const onButtonClick = () => {
        inputFile.current.click();
    };

    return (
        <div className='dragNdrop' onClick={onButtonClick}>
                 <div
                    className='drop-area'
                    onDragStart={e => dragStartHandler(e)}
                    onDragLeave={e => dragLeaveHandler(e)}
                    onDragOver={e => dragStartHandler(e)}
                    onDrop={e => onDropHandler(e)}
                >{drag ? 'Transfer your files' : 'Drag&Drop or click here'}
                     <img className='image_drag' src={dragAndDrop} alt='upload file'/></div>
            <input className='inputFile' type='file' id='file' multiple ref={inputFile}/>
          </div>
    );
};

export default DragDrop;