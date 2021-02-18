import api from './../config/api';


const addTodo = async (todoInfo) => {

  try{
    const response = await api.post("/boards/createtodo", todoInfo )
    return response.data
  } catch(error) {
    throw error
  }
}

const updateTodo = async (todoInfo) => {
  try{
    const response = await api.put("/boards/updatetodotitle", todoInfo)
    return response.data
  } catch(error){
    throw error
  }
}

const deleteTodo = async (todoInfo) => {
  try{
    const response = await api.put("/boards/deletetodo", todoInfo)
    return response.data
  } catch(error){
    throw error
  }
}


export {
  addTodo,
  updateTodo,
  deleteTodo
}