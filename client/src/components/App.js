import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Nav/Navbar'
import Dashboard from './dashboard/Dashboard'
import Register from './auth/Register'
import Login from './auth/Login'
import Board from './board/Board'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Dashboard}/>
        <Route exact path="/users/login" component={Login}/>
        <Route exact path="/users/register" component={Register}/>
        <Route exact path="/board/:id" component={Board} />
      </BrowserRouter>
    </>
  )
}

export default App
