import { combineReducers } from '@reduxjs/toolkit'
import callMenuReducer from './reducers/callMenuSlice'
import authTokenReducer from './reducers/authTokenSlice'

const rootReducer = combineReducers({
  callMenu: callMenuReducer,
  authToken: authTokenReducer,
})

export default rootReducer
