import React, {useState, useRef, useEffect} from 'react'
import "./Todo.css"
import {Form} from 'react-bootstrap';
import {updateTodo, deleteTodo} from './../../../services/todoServices'
import {FaTrashAlt} from 'react-icons/fa'
const TodoTitle = ({title, id, setBoardData}) => {

  const initialFormState = {todoTitle: title}
  const [formOpen, setFormOpen] = useState(false)
  const [formState, setFormState] = useState(initialFormState)
  const ref = useRef(null);
  

  const handleClick = (event) => {
    if ( ref.current && ref.current.contains(event.target)) {
      return setFormOpen(true)
    }
    setFormOpen(false)
    return setFormState(initialFormState)
  }

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
    let requestInfo = formState
    requestInfo.to_do_ID = id
    console.log("requestInfo", requestInfo)
    updateTodo(requestInfo)
      .then((data) => {
        console.log(data.response)
        setBoardData(data.response)
        setFormOpen(false)
      })
      .catch((error) => {
        console.log(error)
      })
    // let requestInfo = formState;
    // requestInfo.board_ID = board_ID;
    // console.log("im submitting", requestInfo)
    // addTodo(requestInfo)
    //   .then((data) => {
    //     console.log(data.response)
    //     setFormState(initialFormState)
    //     setFormOpen(false)
    //     setBoardData(data.response)
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
    }

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    }
  },[])

  const handleDeleteTodo = (event) => {
    event.preventDefault();
    deleteTodo({to_do_ID: id})
      .then((data) => {
        console.log(data.response)
        setBoardData(data.response)
      })
      .catch((error) => {
        console.log(error)
      })

  }

  return (
    <div className="todo-title-container">
      {(formOpen === false) && 
        <div className="todo-title" ref={ref}>{title}</div>
      }
      {(formOpen ===true) && 
        <Form className="update-todo-title" onSubmit={handleSubmit} ref={ref}>
          <Form.Control className="input-form-todo-update" type="text" name="todoTitle" value={formState.todoTitle} required onChange={handleFormChange} />
        </Form>
      }
      <FaTrashAlt className="delete-todo" onClick={handleDeleteTodo}/>
    </div>
  )
}

export default TodoTitle;