import React from 'react'
import "./Card.css"
import {FaTrashAlt} from 'react-icons/fa'
import {deleteCard} from './../../../services/cardServices'
const Card = ({card, todo_ID, board_ID, setBoardData}) => {

  const handleDeleteCard = (event) => {
    const requestInfo = {
      card_ID: card._id,
      to_do_ID: todo_ID,
      board_ID: board_ID
    }

    deleteCard(requestInfo)
      .then((data) => {
        console.log(data.response)
        setBoardData(data.response)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return(
    <div className="card-container">
      {card.title}
      <FaTrashAlt className="delete-card-icon" onClick={handleDeleteCard}/>
    </div>
  )
}

export default Card