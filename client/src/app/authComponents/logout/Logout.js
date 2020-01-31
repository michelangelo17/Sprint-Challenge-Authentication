import React from 'react'
import { Button } from '@chakra-ui/core'
import { useDispatch } from 'react-redux'
import { getLogout } from '../../../redux/thunks/authThunks'

const Logout = () => {
  const dipatch = useDispatch()
  const handleClick = () => dipatch(getLogout())
  return <Button onClick={handleClick}>logout</Button>
}

export default Logout
