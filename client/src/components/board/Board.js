import React, {useState, useEffect} from 'react'
import "./Board.css"
import {getBoard} from './../../services/boardServices'
import NewTodo from './NewTodo'
import Todo from './todo/Todo'
const Board = (props) => {

  console.log(props)
  const [boardData, setBoardData] = useState(null);

  useEffect((e) => {
    getBoard(props.match.params.id)
    .then((response) => {
      console.log(response.data)
      setBoardData(response.data)
    })
    .catch((error)=> console.log(error))
  }, [])

  return (
    <div className="board-container">
      <div className="board-top-bar">
        {(boardData) && boardData.title }
        {(boardData) && (boardData.todos.length > 0) && boardData.todos[boardData.todos.length -1].title}
      </div>
      <div className="todos-container">
        <NewTodo board_ID={props.match.params.id} setBoardData={setBoardData}/>
        {(boardData) && (boardData.todos.length > 0) && 
        boardData.todos.map((todo) => {
          return < Todo key={todo._id} board_ID={boardData._id} todo={todo} setBoardData={setBoardData}/>
        })
        }
      </div>
      
      Welcome to the board {props.match.params.id} <br/>
      
    </div>
  )
}

export default Board