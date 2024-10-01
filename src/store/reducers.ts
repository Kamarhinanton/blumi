import { combineReducers } from '@reduxjs/toolkit'
import footerDataReducer from './reducers/footerDataSlice'

const rootReducer = combineReducers({
  footerData: footerDataReducer,
})

export default rootReducer
