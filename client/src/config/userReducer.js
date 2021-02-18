const initialState = {
  loggedInUser: null,
  boards: []
}


export default function (state = initialState, action) {
  switch(action.type) {
    case "SET_USER": {
      return {
        ...state,
        loggedInUser: action.data
      }
    }
    case "SET_USER_BOARDS": {
      return {
        ...state,
        boards: action.data
      }
    }
    default: {
      return state
    }
  }
}