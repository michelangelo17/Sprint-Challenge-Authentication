import {
  setSignedIn,
  setIsLoading,
  setPostSignInError,
  setPostSignUpError,
  setWelcomeMessage,
  setLogoutMessage,
  setGetLogoutError,
} from '../slices/authSlice'
import { axiosWithAuth } from '../../utils/axiosWithAuth'
import { getJokes } from './jokesThunks'

export const checkToken = token => async dispatch => {
  if (!token) {
    localStorage.setItem('token', false)
    localStorage.setItem('signedIn', false)
    return dispatch(setSignedIn(false))
  }
  dispatch(setSignedIn(true))
  localStorage.setItem('token', token)
  localStorage.setItem('signedIn', true)
  dispatch(getJokes())
}

export const postSignIn = values => async dispatch => {
  try {
    const res = await axiosWithAuth().post('/auth/login', values)
    const { message, token } = res.data
    dispatch(checkToken(token))
    dispatch(setIsLoading(false))
    dispatch(setWelcomeMessage(message))
    dispatch(setPostSignInError(null))
    dispatch(setLogoutMessage(null))
  } catch (e) {
    const { message, error, token } = e.response.data
    dispatch(setPostSignInError({ message: message, error: error }))
    dispatch(checkToken(token))
    dispatch(setIsLoading(false))
    dispatch(setWelcomeMessage(null))
    dispatch(setLogoutMessage(null))
  }
}

export const postSignUp = values => async dispatch => {
  try {
    const res = await axiosWithAuth().post('/auth/register', values)
    const { message, token } = res.data
    dispatch(checkToken(token))
    dispatch(setIsLoading(false))
    dispatch(setWelcomeMessage(message))
    dispatch(setPostSignUpError(null))
    dispatch(setLogoutMessage(null))
  } catch (e) {
    const { message, error, token } = e.response.data
    dispatch(setPostSignUpError({ message: message, error: error }))
    dispatch(checkToken(token))
    dispatch(setIsLoading(false))
    dispatch(setWelcomeMessage(null))
    dispatch(setLogoutMessage(null))
  }
}

export const getLogout = () => async dispatch => {
  try {
    const res = await axiosWithAuth().get('/auth/logout')
    const { message, token } = res.data
    dispatch(checkToken(token))
    dispatch(setLogoutMessage(message))
    dispatch(setWelcomeMessage(null))
  } catch (e) {
    const { message, error, token } = e.response.data
    dispatch(setGetLogoutError({ message: message, error: error }))
    dispatch(checkToken(token))
    dispatch(setWelcomeMessage(null))
  }
}
