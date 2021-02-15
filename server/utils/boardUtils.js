const Board = require('./../models/Board')


const createBoardUtil = async (boardInfo) => {

  console.log(boardInfo)
  return await Board.create(boardInfo)

}

module.exports = {
  createBoardUtil
}