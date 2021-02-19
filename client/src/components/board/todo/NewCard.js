import React, {useState, useEffect, useRef} from 'react'
import {RiAddLine} from 'react-icons/ri'
import {MdClose} from 'react-icons/md'
import {createCard} from './../../../services/cardServices'

const NewCard = ({id, setBoardData}) => {
  const initialFormState = {title: ""}
  const [formOpen, setFormOpen] = useState(false)
  const [formState, setFormState] = useState(initialFormState)
  const ref = useRef(null)

  const changeOpen =() => {
    setFormOpen(false)
  }
  const handleFormChange = (event) => {
    setFormState({title: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    let requestInfo = {
      card_title: formState.title,
      to_do_ID: id
    }
    createCard(requestInfo)
      .then((data) => {
        console.log(data)
        setBoardData(data.response)
        setFormState(initialFormState)
        setFormOpen(false)
      })
      .catch((error) => {
        console.log(error)
      })

  }

  useEffect(() => {
    function handleClick(event) {
      if (ref.current && ref.current.contains(event.target)) {
        return setFormOpen(true)
      }
      setFormOpen(false)
      return setFormState(initialFormState)
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
    
  },[formOpen])


  return (
    <div className="new-card-container" ref={ref}>
      {(formOpen === false) && 
        <div className="add-card-button" >
          < RiAddLine size={20} className="add-card-icon"/>
          <p className="add-card-text">Add another card</p>
        </div>
      }
      {formOpen && 
        <form className="new-card-form" onSubmit={handleSubmit}>
          <textarea className="new-card-title-input" name="title" placeholder="Enter title for card.." value={formState.title} required onChange={handleFormChange}/>
          <button type="submit" className="add-card-submit-button">Add Card</button>
          <MdClose  size={20} className="close-form-icon" onClick={changeOpen}/>
        </form>
      }
    </div>
  )
}

export default NewCard
