const Board = require('./../models/Board')
const User = require('./../models/User')


// Create to-do list, requires to update board, req.body will have board id and todo list title. 
// will require a board_ID, to-do title. Will need to update the board and return the updated board. 

const createToDo = async (req, res, next) => {

  const {board_ID, to_do_title} = req.body

  try {
    let board = await Board.findOneAndUpdate({_id: board_ID}, { $push: {todos: { title: to_do_title}}}, {new: true})
    res.status(200).json({response: board, message: "To-do succussfully added"})
  } catch(error){
    next(error)
  }
}


// Update to-do list title, takes board id, to-do id and todo-title and updates to-do title.
const updateToDoTitle = async (req, res, next) => {
  const {to_do_ID, board_ID, to_do_title} = req.body

  try{
    let board = await Board.findOneAndUpdate({"todos._id": to_do_ID}, {$set: {"todos.$.title": to_do_title}}, {new: true})
    
    res.status(200).json({response: board, message: "check the title is updated"})
  } catch(error){
    next(error)
  }
}


// Delete to-do list, takes Board id, to-do id, and deletes it. Still an update of the board

const deleteToDo = async (req, res, next) => {
  const {to_do_ID} = req.body;

  try {
    const board = await Board.findOneAndUpdate({"todos._id": to_do_ID}, {$pull: {todos: {_id: to_do_ID}}}, {new: true})
    return res.status(200).json({response: board, message: "delete completed, did it delete?"})
  }catch(error){
    next(error)
  }
}

module.exports = {
  createToDo,
  updateToDoTitle,
  deleteToDo
}