import axios from 'axios';
import React from 'react'
import { AiFillEdit } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { baseURL } from '../utils/constant';
export default function ToDo({text , id , setShowPopup, setPopupContent, setUpdateUI}) {

    const deleteTodo = () =>{
        axios.delete(`${baseURL}/deletetodo/${id}`).then(res=>{
            console.log('responce', res.data)
            setUpdateUI((perv) => !perv)
        }).catch(err=>{
            console.log('error', err)
        })
    }
const handleUpdate = () => {
    setPopupContent({text, id})
    setShowPopup(true)
}

  return (
    <div className="toDo">
    {text}
    <div className="icons">
      <AiFillEdit className="icon" onClick={handleUpdate} />
      <RxCross1 className="icon"  onClick={deleteTodo}/>
    </div>
  </div>
  )
}
