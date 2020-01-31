import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../slices/authSlice'
import jokesReducer from '../slices/jokesSlice'

const store = configureStore({
  reducer: { auth: authReducer, jokes: jokesReducer },
  devTools: false,
})

export default store
