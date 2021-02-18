const express = require('express')
const router = express.Router();
const {createBoard, updateBoardTitle, deleteBoard, getBoard } = require('./../controllers/board_controller')
const {createToDo, updateToDoTitle, deleteToDo} = require('./../controllers/todo_controller')
const {createCard, updateCard, deleteCard, createChecklistItem, updateChecklistItem, deleteChecklistItem} = require('./../controllers/card_controller')

// Board routes top level CRUD

router.get('/getboard/:id', getBoard)

router.post('/createboard', createBoard)

router.put('/updateboardtitle', updateBoardTitle)

router.delete('/deleteboard', deleteBoard)

// Board routes related to top level todo CRUD

router.post('/createtodo', createToDo)

router.put('/updatetodotitle', updateToDoTitle)

router.put('/deletetodo', deleteToDo)

// Board routes related to cards

router.post('/createcard', createCard)

router.put('/updatecard', updateCard)

router.delete('/deletecard', deleteCard)

// checklist routes

router.put('/createchecklistitem', createChecklistItem)

router.put('/updatechecklistitem', updateChecklistItem)

router.delete('/deletechecklistitem', deleteChecklistItem)

module.exports = router;