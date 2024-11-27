import { combineReducers } from '@reduxjs/toolkit'
import callMenuReducer from './reducers/callMenuSlice'
import authTokenReducer from './reducers/authTokenSlice'
import profileReducer from './reducers/profileSlice'

const rootReducer = combineReducers({
  callMenu: callMenuReducer,
  authToken: authTokenReducer,
  userProfile: profileReducer,
})

export default rootReducer
