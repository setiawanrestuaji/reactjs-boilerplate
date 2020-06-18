import { combineReducers } from 'redux'
import users from './users'

const reducers = combineReducers({
    userReducer: users,
    // other reducer
})

export default reducers