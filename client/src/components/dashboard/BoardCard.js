import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {FaTrashAlt} from 'react-icons/fa'
import {deleteBoard} from './../../services/boardServices'
import {useDispatch } from 'react-redux'

const BoardCard = ({board}) => {

  const dispatch = useDispatch()
  
  const handleDeleteBoard = (event) => {
    event.preventDefault()
    deleteBoard(board.board_ID)
      .then((data)=> {
        console.log(data)
        dispatch({
          type: "SET_USER_BOARDS",
          data: data.user.boards
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
  

  return(
    <Link to={`/board/${board.board_ID}`}>
      <div className="board-card-container">
        <h4 className="board-card-title">{board.title}</h4>
        <FaTrashAlt className="delete-board-icon" onClick={handleDeleteBoard}/>
      </div>
    </Link>
  )
}

export default BoardCard