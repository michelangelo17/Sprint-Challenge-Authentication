import React, { useEffect } from 'react'
import { ThemeProvider, CSSReset, theme } from '@chakra-ui/core'
import Login from './authComponents/newOrExisting/login/Login'
import { SignInRoute, PrivateRoute } from '../utils/authRoutes'
import NewOrExisting from './authComponents/newOrExisting/NewOrExisting'
import Home from './home/Home'
import SignUp from './authComponents/newOrExisting/signUp/SignUp'
import { useDispatch } from 'react-redux'
import { setSignedIn } from '../redux/slices/authSlice'
// import { customTheme } from './customTheme'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setSignedIn(JSON.parse(localStorage.getItem('signedIn'))))
  }, [dispatch])
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <SignInRoute exact path='/' component={NewOrExisting} />
      <SignInRoute path='/signup' component={SignUp} />
      <SignInRoute path='/login' component={Login} />
      <PrivateRoute path='/Home' component={Home} />
    </ThemeProvider>
  )
}

export default App
