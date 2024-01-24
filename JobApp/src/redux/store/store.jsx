import { configureStore, combineReducers } from '@reduxjs/toolkit'
import favouriteReducer from '../reducers/favourite'
import jobReducer from '../reducers/job'

const bigReducer = combineReducers({
  favourite: favouriteReducer,
  job: jobReducer,
})

const store = configureStore({
  reducer: bigReducer,
})

export default store
