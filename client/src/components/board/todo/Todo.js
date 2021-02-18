import React from 'react';
import "./Todo.css";
import TodoTitle from './TodoTitle'
const Todo = ({todo, board_ID, setBoardData}) => {


  return (
    <div className="todo-container">
      <TodoTitle title={todo.title} id={todo._id} setBoardData={setBoardData}/>
      
    </div>
  )
}

export default Todo;