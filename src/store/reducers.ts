import { combineReducers } from '@reduxjs/toolkit'
import footerDataReducer from './reducers/footerDataSlice'

const rootReducer = combineReducers({
  callMenu: footerDataReducer,
})

export default rootReducer
