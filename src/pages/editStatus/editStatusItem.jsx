import React, {useRef, useState} from 'react';
import edit_icon from "../../assets/icons/edit_icon.png";
import save from "../../assets/icons/ok.png";

const EditStatusItem = ({item,index,handleClickUpdate,handleClickRemove}) => {
    const inputEditRef = useRef(null)
    const [edit, setEdit] = useState(false)

    return (
        <div className="status"><p>
        {item}
    </p>
        { edit && <input ref={inputEditRef}/> }
        <div className='btns_icon'>
            <img onClick={() => setEdit(true)} className='edit_icon' src={edit_icon}/>
            {!edit && <button onClick={() => handleClickRemove(item)} className="remove" type={"button"}>X</button>}
            {edit && <img className="save_icon" src={save} onClick={(i) => {
                handleClickUpdate(index,inputEditRef.current.value)
                setEdit(false)}}/>}
        </div>
    </div>
    );
};

export default EditStatusItem;