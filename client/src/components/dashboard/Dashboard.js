import React from 'react';
import {useSelector} from 'react-redux';
import './dashboard.css'
import BoardCard from './BoardCard'
const Dashboard = () => {

  const loggedInUser = useSelector(state => state.loggedInUser)
  const boards = useSelector(state => state.boards)
  console.log(loggedInUser, "user")
  console.log(boards, "user boards")
  return (
    <div className="dashboard-container">
      <div className="dashboard-heading">
        <h1 className="dashboard-title">
          Welcome to your dashboard {loggedInUser}
        </h1>
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
