import api from './../config/api';

const getBoard = async (board_ID) => {

  try {
    const response = await api.get(`/boards/getboard/${board_ID}`)
    return response.data
  }catch(error){
    return error
  }
}

const createBoard = async (board_title) => {
  try {
    const response = await api.post('/boards/createboard', board_title);
    return response.data
  }catch(error){
    throw error
  }
}

const updateTitle = async (board_title) => {
  try{
    const response = await api.put('/boards/updateboardtitle', board_title)
    return response.data
  }catch(error) {
    throw error
  }
}

const deleteBoard = async (board_ID) => {
  try {
    const response = await api.delete(`/boards/deleteboard/${board_ID}`)
    return response.data
  } catch(error) {
    throw error
  }
}

export {
  getBoard,
  createBoard,
  deleteBoard,
  updateTitle
}