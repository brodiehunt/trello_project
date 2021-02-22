import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import './dashboard.css'
import BoardCard from './BoardCard'
import NewBoardModal from './NewBoardModal'
import {BsPerson} from 'react-icons/bs'

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
          Create New Board
        </div>
      </div>
      <div className="boards-title">
        < BsPerson size={30} className="personal-boards-icon"/>
        <h3 className="personal-boards-title">
          Personal Boards
        </h3>
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
