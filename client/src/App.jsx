import { useEffect, useState } from "react"
import ToDo from "./components/ToDo"
import axios from "axios"
import { baseURL } from "./utils/constant"
import Popup from "./components/Popup"
function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState("")
  const [updateUI, setUpdateUI] = useState(false)
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState({})

  useEffect(() => {
    axios.get(`${baseURL}/gettodo`)
      .then((res) => {
        console.log('responce', res.data)
        setTodos(res.data)
      }).catch((err) => {
        console.log('error', err)
      })
  }, [updateUI])

  const saveTodo = () => {
    axios.post(`${baseURL}/savetodo`, { todo: input })
      .then((res) => {
        console.log('responce', res.data)
        setUpdateUI(!updateUI)
        setInput("")
      }).catch((err) => {
        console.log('error', err)
      })
  }


  return (
    <main>
      <div className="container">
        <h1 className="title">ToDo App</h1>
        <div className="input_holder">
          <input
            type="text"
            placeholder="Add a ToDo..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={saveTodo}>Add</button>
        </div>
        <div className="list">
          {todos.map((title, i) => {
            return <ToDo key={i} text={title?.todo} id={title._id} setUpdateUI={setUpdateUI} setShowPopup={setShowPopup}
            setPopupContent={setPopupContent}
            />
          })}
        </div>
      </div>
      {showPopup && (
        <Popup setShowPopup={setShowPopup} popupContent={popupContent} setUpdateUI={setUpdateUI}
        />
      )}
    </main>
  )
}

export default App
