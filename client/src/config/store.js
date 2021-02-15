import {createStore} from 'redux'

import user from './userReducer'

const store = createStore(user)

export default store;