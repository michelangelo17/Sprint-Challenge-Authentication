import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../slices/authSlice'
import jokesReducer from '../slices/jokesSlice'

const store = configureStore({
  reducer: { auth: authReducer, jokes: jokesReducer },
  devTools: process.env.NODE_ENV !== 'production',
})

export default store
