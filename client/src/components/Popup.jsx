import axios from "axios";
import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { baseURL } from "../utils/constant";

const Popup = ({setShowPopup, popupContent, setUpdateUI}) => {
  const [input, setInput] = useState(popupContent.text)

  const updateTodo = () =>{
    axios.put(`${baseURL}/updatetodo/${popupContent.id}`, { todo: input }).then(res=>{
      console.log('responce', res.data)
      setUpdateUI((perv) =>!perv)
      setShowPopup(false)
    }).catch(err=>{
      console.log('error', err)
    })
  }

  return (
    <div className="backdrop">
      <div className="popup">
        <RxCross1 className="cross" onClick={()=>setShowPopup(false)}/>
        <h1>Update ToDo</h1>

        <div className="popup__input_holder">
          <input
            type="text"
            placeholder="Update ToDo..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={updateTodo}>Update</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
