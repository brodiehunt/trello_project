const Board = require('./../models/Board')
const User = require('./../models/User')
const {createBoardUtil} = require('./../utils/boardUtils')

// create new board, req.body will be sent a title. 
// board id needs to be added to user array of board ids


// user creates board
const createBoard = async (req, res, next) => {

  const { board_title } = req.body
  try {
    
    const newBoard =  await Board.create({title: board_title})
    let user =  await User.findById(req.user._id)
    user.boards.push({board_ID: newBoard._id, title: board_title})
    await user.save()
    res.status(200).json({response: newBoard, message: "route working"})
    
  } catch(error) {
    next(error)
  }
}

const getBoard = async (req, res, next) => {
  const {id} = req.params;
  try{
    const board = await Board.findById(id)
    return res.status(200).json({data: board, message: "get board working"})
  }catch(error) {
    next(error)
  }
}

// Update board title, will take the new title of the board and board id and update it
const updateBoardTitle = async (req, res, next) => {
  const {board_title, board_ID} = req.body
  try {
    let board = await Board.findById(board_ID)
    board.title = board_title;
    let updatedBoard = await board.save()
    let user = await User.findOneAndUpdate({_id: req.user._id},
      {$set: {"boards.$[a].title": board_title}},
      {new: true, arrayFilters: [{"a.board_ID": board_ID}]}
    )
    res.status(200).json({response: updatedBoard, userBoards: user.boards, message: "title update working"})
  } catch(error){
    next(error)
  }
}

const deleteBoard = async (req, res, next) => {
  const {board_ID} = req.body
  
  try{
    
    let board = await Board.findByIdAndDelete(board_ID)
    if (!board) throw "board with this id doesnt exist"
    await User.updateOne({_id: req.user._id}, { $pull: { boards: {board_ID: board_ID}}})
    res.status(200).json({message: "board should be deleted from collection and user array"})
  } catch(error) {
    next(error)
  }
}


// Delete Board, will take board id and delete board, will remove board from user array of board ids.


module.exports = {
  createBoard,
  updateBoardTitle,
  deleteBoard,
  getBoard
}