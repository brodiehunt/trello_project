import axios from 'axios'




console.log("server on aws", "http://localhost:3009")
export default axios.create({
  baseURL: "http://localhost:3009",
  timeout: 5000,
  withCredentials: true
})