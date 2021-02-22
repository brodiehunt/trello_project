import api from './../config/api';


const createCard = async (requestInfo) => {

  try {
    const response = await api.post('/boards/createcard', requestInfo)
    return response.data
  }catch (error) {
    throw error
  }
}

const deleteCard = async (requestInfo) => {
  try{
    const response = await api.put('/boards/deletecard', requestInfo)
    return response.data
  } catch(error) {
    throw error
  }
}


export {
  createCard,
  deleteCard
}