import React from 'react';
import "./Todo.css";
import TodoTitle from './TodoTitle'
import NewCard from './NewCard'
const Todo = ({todo, board_ID, setBoardData}) => {


  return (
    <div className="todo-container">
      <TodoTitle title={todo.title} id={todo._id} setBoardData={setBoardData}/>
      {todo.cards.length > 0 && 
        todo.cards.map((card) => {
          return <p>{card.title}</p>
        })
      }
      <NewCard id={todo._id} setBoardData={setBoardData}/>
      
    </div>
  )
}

export default Todo;