import React, {useState, useEffect, useRef} from 'react'
import "./Board.css"
import {getBoard, updateTitle} from './../../services/boardServices'
import NewTodo from './NewTodo'
import Todo from './todo/Todo'
import {useDispatch } from 'react-redux'
const Board = (props) => {

  
  const initialFormState = {title: ""}
  const [boardData, setBoardData] = useState(null);
  const [formState, setFormState] = useState(initialFormState)
  const ref = useRef(null)
  const dispatch = useDispatch()
  useEffect((e) => {
    getBoard(props.match.params.id)
    .then((response) => {
      console.log(response.data)
      setBoardData(response.data)
      setFormState({title: response.data.title})
    })
    .catch((error)=> console.log(error))
  }, [])

  const handleInputChange = (event) => {
    setFormState({title: event.target.value})
  }

  const handleUpdateTitleSubmit = (event) => {
    event.preventDefault(); 
    let requestInfo = {
      board_title: formState.title,
      board_ID: boardData._id
    }
    ref.current.blur()
    
    updateTitle(requestInfo)
      .then((data) => {
        setBoardData(data.response)
        
        dispatch({
          type: "SET_USER_BOARDS",
          data: data.userBoards
        })
      })
      .catch((error)=> {
        console.log(error)
      })
  }

  return (
    <div className="board-container">
      <div className="board-top-bar">
        <form className="update-board-title-form" onSubmit={handleUpdateTitleSubmit}>
          <input ref={ref} className="update-board-title-input" type="text" name="title" value={formState.title} required onChange={handleInputChange}/>
        </form>
      </div>
      <div className="todos-container">
        <NewTodo board_ID={props.match.params.id} setBoardData={setBoardData}/>
        {(boardData) && (boardData.todos.length > 0) && 
        boardData.todos.map((todo) => {
          return < Todo key={todo._id} board_ID={boardData._id} todo={todo} setBoardData={setBoardData}/>
        })
        }
      </div>
    </div>
  )
}

export default Board