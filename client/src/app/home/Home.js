import React from 'react'
import Logout from '../authComponents/logout/Logout'
import { Heading } from '@chakra-ui/core'

const Home = () => (
  <>
    <Heading as='h1'>Home</Heading>
    <Logout />
  </>
)

export default Home
