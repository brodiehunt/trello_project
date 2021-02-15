const Board = require('./../models/Board')
const User = require('./../models/User')

const createCard = async (req, res, next) => {

  const {board_ID, card_title, to_do_ID} = req.body

  try {
    console.log("hitting try block createcard")
    let board = await Board.findOneAndUpdate({todos: { $elemMatch : { _id: to_do_ID}}}, {$push: {"todos.$.cards": {title: card_title}}}, {new: true})
    return res.status(200).json({response: board, message: "pray the board has been added"})
  }catch(error){
    next(error)
  }
}

const updateCard = async (req, res, next) => {
  const {updatedValue, feild, to_do_ID, card_ID, board_ID, card_title} = req.body;

  try {
    let board = await Board.findOneAndUpdate(
      {
        _id: board_ID
      },
      {
        $set: {
          [`todos.$[a].cards.$[b].${feild}`]: updatedValue
        }
      },
      {
        new: true,
        arrayFilters: [
          {"a._id": to_do_ID},
          {"b._id": card_ID}
        ]
      }
    )
    return res.status(200).json({response: board, message: "title should be updated"})
  }catch(error){
    next(error)
  }
}


const deleteCard = async (req, res, next) => {
  const {board_ID, card_ID, to_do_ID} = req.body;

  try{
    let board = await Board.findOneAndUpdate({_id: board_ID}, 
      {$pull: {'todos.$[a].cards': {_id: card_ID} }}, 
      {new: true, arrayFilters: [{"a._id": to_do_ID}]})
    res.status(200).json({response: board, message: "does it delete card"})
  } catch(error) {
    next(error)
  }
}

const createChecklistItem = async (req, res, next) => {
  const {board_ID, card_ID, to_do_ID, checklistItem} = req.body;

  try{
    let board = await Board.findOneAndUpdate({_id: board_ID},
      {$push: {'todos.$[a].cards.$[b].checkList.items': {description: checklistItem}}},
      {new: true, arrayFilters: [{"a._id": to_do_ID}, {"b._id": card_ID}]}
    )
    res.status(200).json({response: board, message: "should create checklist item"})

  } catch(error){
    next(error)
  }
}

const updateChecklistItem = async (req, res, next) => {
  const {board_ID, card_ID, to_do_ID, item_ID, item_feild, item_update} = req.body;

  try{
    let board = await Board.findOneAndUpdate({_id: board_ID},
      {$set: {[`todos.$[a].cards.$[b].checkList.items.$[c].${item_feild}`]: item_update}},
      {new: true, arrayFilters: [{"a._id": to_do_ID}, {"b._id": card_ID}, {"c._id": item_ID}]})
      res.status(200).json({response: board, message: "does checklist description update"})
  } catch(error){
    next(error)
  }
}

const deleteChecklistItem = async (req, res, next) => {
  const {board_ID, card_ID, to_do_ID, item_ID} = req.body;

  try{
    let board = await Board.findOneAndUpdate({_id: board_ID},
      {$pull: {'todos.$[a].cards.$[b].checkList.items': {_id: item_ID}}},
      {new: true, arrayFilters: [{"a._id": to_do_ID}, {"b._id": card_ID}]}
    )
    res.status(200).json({response: board, message: "delete checklist item"})

  }catch(error){
    next(error)
  }
}

module.exports = {
  createCard,
  updateCard,
  deleteCard,
  createChecklistItem,
  updateChecklistItem,
  deleteChecklistItem
}