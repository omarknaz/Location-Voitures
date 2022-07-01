



import { combineReducers } from 'redux'

import userReducer from './user.reducer'
import adminReducer from "./admin.reducers"
import reservationReducer from "./reservation.reducers"
export default combineReducers({
  admin: adminReducer,
  user: userReducer,
  book: reservationReducer
})