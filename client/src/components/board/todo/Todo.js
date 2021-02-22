import React from 'react';
import "./Todo.css";
import TodoTitle from './TodoTitle'
import NewCard from './NewCard'
import Card from './../card/Card'

const Todo = ({todo, board_ID, setBoardData}) => {


  return (
    <div className="todo-container">
      <TodoTitle title={todo.title} id={todo._id} setBoardData={setBoardData}/>
      {todo.cards.length > 0 && 
        todo.cards.map((card) => {
          return <Card card={card} board_ID={board_ID} todo_ID={todo._id} setBoardData={setBoardData}/> 
        })
      }
      <NewCard id={todo._id} setBoardData={setBoardData}/>
      
    </div>
  )
}

export default Todo;