import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const BoardCard = ({board}) => {


  

  return(
    <Link to={`/board/${board.board_ID}`}>
      <div className="board-card-container">
        <h4 className="board-card-title">{board.title}</h4>
        
        
      </div>
    </Link>
  )
}

export default BoardCard