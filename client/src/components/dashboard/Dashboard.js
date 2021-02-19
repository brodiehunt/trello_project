import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import './dashboard.css'
import BoardCard from './BoardCard'
import NewBoardModal from './NewBoardModal'


const Dashboard = () => {

  const [showModal, setShowModal] = useState(false)
  const loggedInUser = useSelector(state => state.loggedInUser)
  const boards = useSelector(state => state.boards)
  
  const showModalClick = (event) => {
    if (showModal === false) {
      setShowModal(true)
    } else {
      setShowModal(false)
    }
  }

  console.log(showModal)

  return (
    <div className="dashboard-container">
      <NewBoardModal showModal={showModal} showModalClick={showModalClick} />
      <div className="dashboard-heading">
        <h1 className="dashboard-title">
          Welcome to your dashboard {loggedInUser}
        </h1>
      </div>
      <div className="create-board-container">
        <div className="new-board-card" onClick={showModalClick}>
          Create Board container
        </div>
      </div>
      <div className="boards">
        {boards.length > 0 && boards.map((board) => {
           return <BoardCard key={board._id} board={board} />
        })}
        
      </div>
    </div>
  )
}

export default Dashboard;
