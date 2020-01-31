import { setJokes, setIsLoading, setGetJokesError } from '../slices/jokesSlice'

import { axiosWithAuth } from '../../utils/axiosWithAuth'

export const getJokes = () => async dispatch => {
  try {
    const res = await axiosWithAuth().get('/jokes')
    dispatch(setJokes(res.data))
  } catch (e) {
    dispatch(setGetJokesError(e.message))
  }
}
