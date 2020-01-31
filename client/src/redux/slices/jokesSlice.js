import { createSlice } from '@reduxjs/toolkit'

const jokesSlice = createSlice({
  name: 'jokesReducer',
  initialState: {
    jokes: [],
    isLoading: false,
    getJokesError: null,
  },
  reducers: {
    setJokes(state, action) {
      state.jokes = action.payload
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload
    },
    setGetJokesError(state, action) {
      state.getJokesError = action.payload
    },
  },
})

export const { setJokes, setIsLoading, setGetJokesError } = jokesSlice.actions

export default jokesSlice.reducer
