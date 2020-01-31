import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getJokes } from '../../redux/thunks/jokesThunks'

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { signedIn } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  return (
    <Route
      {...rest}
      render={() => {
        if (signedIn) {
          dispatch(getJokes())
          return <Component />
        } else {
          return <Redirect to='/' />
        }
      }}
    />
  )
}

export const SignInRoute = ({ component: Component, ...rest }) => {
  const { signedIn } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  return (
    <Route
      {...rest}
      render={() => {
        if (signedIn) {
          dispatch(getJokes)
          return <Redirect to='/home' />
        } else {
          return <Component />
        }
      }}
    />
  )
}
