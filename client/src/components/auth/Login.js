import React, {useState} from 'react'
import './AuthForm.css'
import {Form, Button} from 'react-bootstrap';
import {loginUser} from '../../services/authServices';
import {useDispatch } from 'react-redux'
const Login = ({history}) => {

  const initialFormState = {
    email: "",
    password: ""
  }
  const dispatch = useDispatch()
  const [formState, setFormState] = useState(initialFormState)

  function handleFormChange(event) {
    
    const name = event.target.name;
    const value = event.target.value;
    setFormState({
      ...formState,
      [name]: value
    })
    console.log(formState)
  }

  function handleFormSubmit(event) {
    event.preventDefault()
    if (formState.password.length < 6 ) {
      alert("Password must be 6 characters")
      return false;
    }

    // call to the api 
    loginUser(formState)
      .then((response) => {
        console.log(response)
        dispatch({
          type: "SET_USER",
          data: response.email
        })
        history.push('/')
      })
      .catch((error) => {
        console.log(error)
      })
    
    console.log("did this still print?")
  }

  return (
    <div className="auth-component-container">
      <div className="auth-form-container">
        <h1 className="auth-title">Login</h1>
        <Form className="auth-form" onSubmit={handleFormSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" value={formState.email} required onChange={handleFormChange}/>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" name="password" value={formState.password} required onChange={handleFormChange}/>
            <Form.Text className="text-muted">
              Password must contain at least 6 characters.
            </Form.Text>
          </Form.Group>
          <Button className="auth-button" variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default Login;