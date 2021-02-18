import React, {useState, useRef, useEffect} from 'react'
import "./todo/Todo.css"
import {RiAddLine} from 'react-icons/ri'
import {Form, Button} from 'react-bootstrap';
import {addTodo} from './../../services/todoServices'
const NewTodo = ({board_ID, setBoardData}) => {

  const initialFormState = {
    todoTitle: ""
  }
  const [formOpen, setFormOpen] = useState(false)
  const [formState, setFormState] = useState(initialFormState)
  const wrapperRef = useRef(null)

  console.log("formopenstate", formOpen)

 

  const handleFormChange = (event) => {
    event.preventDefault()
    const name = event.target.name;
    const value = event.target.value;
    setFormState({
      ...formState,
      [name]: value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    let requestInfo = formState;
    requestInfo.board_ID = board_ID;
    console.log("im submitting", requestInfo)
    addTodo(requestInfo)
      .then((data) => {
        console.log(data.response)
        setFormState(initialFormState)
        setFormOpen(false)
        setBoardData(data.response)
      })
      .catch((error) => {
        console.log(error)
      })
    }

  useEffect(() => {
    function handleClick(event) {
      if (wrapperRef.current && wrapperRef.current.contains(event.target)) {
        return setFormOpen(true)
      }
      setFormOpen(false)
      return setFormState(initialFormState)
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
    
  },[formOpen])

  
  
  return (
    <div className="new-todo-container" ref={wrapperRef}>
      {(formOpen === false) && 
      <div className='new-todo-content'>
        <RiAddLine className="add-todo-icon" size={20}/> 
        <p className="add-todo-description">Add Todo List</p>
      </div>
      }
      {(formOpen === true) && 
        <Form className="todo-form" onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Control className="input-form-todo" type="text" placeholder="Todo Title" name="todoTitle" value={formState.todoTitle} required onChange={handleFormChange} />
            <Button className="todo-button" variant="primary" type="submit">
              Add
            </Button>
          </Form.Row>
        </Form>
      }
    </div>
  )
}

export default NewTodo;