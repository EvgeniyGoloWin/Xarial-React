// import React, {useState} from 'react';
// import editIcon from "../../assets/icons/edit_icon.png";
//
// const EditInput = ({item, handleChangeInputTitle}) => {
//     const [open, setOpen] = useState(false)
//     const openDialog = () => {
//         setOpen(true)
//     }
//     return (
//         <div className="form__group">
//             <>
//                 <input className="editInput" defaultValue={item.title}
//                        onChange={handleChangeInputTitle}/>
//                 {item.element && <input type={`${item.element.type}`}
//                                         className="edit_input js-input js-input-email answer"
//                                         name={`${item.element.name}`}
//                                         placeholder={`${item.element.placeholder}`}/>}
//                 <img src={editIcon} width={20} height={20} onClick={openDialog} alt={"edit"}/>
//                 <dialog open={open}>
//                     <>text</>
//                 </dialog>
//             </>
//         </div>
//     );
// };
//
// export default EditInput;