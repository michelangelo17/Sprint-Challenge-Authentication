import { createSlice } from '@reduxjs/toolkit'

const jokesSlice = createSlice({
  name: 'jokesReducer',
  initialState: {
    jokes: [],
    getJokesError: null,
  },
  reducers: {
    setJokes(state, action) {
      state.jokes = action.payload
    },
    setGetJokesError(state, action) {
      state.getJokesError = action.payload
    },
  },
})

export const { setJokes, setGetJokesError } = jokesSlice.actions

export default jokesSlice.reducer
