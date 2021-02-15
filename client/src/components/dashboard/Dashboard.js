import React from 'react';
import {useSelector} from 'react-redux';
import './dashboard.css'
const Dashboard = () => {

  const loggedInUser = useSelector(state => state.loggedInUser)
  console.log(loggedInUser, "user")
  return (
    <div className="dashboard-container">
      <p>Welcome to the dashboard {loggedInUser} </p>
    </div>
  )
}

export default Dashboard;
