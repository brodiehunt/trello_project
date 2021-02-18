import api from './../config/api';

const getBoard = async (board_ID) => {

  try {
    const response = await api.get(`/boards/getboard/${board_ID}`)
    return response.data
  }catch(error){
    return error
  }
}

export {
  getBoard
}