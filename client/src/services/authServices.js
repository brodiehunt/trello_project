import api from './../config/api'

// call api to post user registration data

const registerUser = async (registrationInfo) => {

  try {
    const response = await api.post("/users/register", registrationInfo)
    return response.data
  } catch(error) {
    throw error.response.data.message
  }
}

const loginUser = async (loginInfo) => {
  try {
    const response = await api.post("/users/login", loginInfo)
    return response.data
  } catch(error) {
    throw error.response.data.message
  }
}

const logoutUser = async () => {
  const response = await api.get("/users/logout")
  return response.data
}



export {
  registerUser,
  loginUser,
  logoutUser
}