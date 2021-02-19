import React, {useState} from 'react'
import './NewBoardModal.css'
import {MdClose} from 'react-icons/md'
import {createBoard} from './../../services/boardServices'
import {useDispatch } from 'react-redux'

const NewBoardModal = ({showModal, showModalClick}) => {

  const dispatch = useDispatch()
  const initialFormState = {title: ''}
  const showHideClass = showModal ? "new-board-modal show" : "new-board-modal hide";
  const [formState, setFormState] = useState(initialFormState)

  const handleFormChange = (event) => {
    
    setFormState({title: event.target.value})
    console.log(formState)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    createBoard(formState)
      .then((data)=> {
        showModalClick()
        dispatch({
          type: "SET_USER_BOARDS",
          data: data.user.boards
        })
        setFormState(initialFormState)
        console.log(data)
      })
      .catch((error)=> {
        console.log(error)
      })

  }
  return (
    <div className={showHideClass}>
      <section className="board-modal-main">
        <div className="new-board-title-container">
          <form className="create-board-form" onSubmit={handleFormSubmit}>
            <input className="board-form-title-input" type="text" name="title" placeholder="Add a board" required value={formState.title} onChange={handleFormChange} >

            </input>
          </form>
          <MdClose onClick={showModalClick} size={25} className="board-modal-close" />
        </div>
      </section>
    </div>
  )
}


export default NewBoardModal;