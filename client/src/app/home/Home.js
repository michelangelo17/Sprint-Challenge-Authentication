import React, { useEffect } from 'react'
import Logout from '../authComponents/logout/Logout'
import { Heading, Text } from '@chakra-ui/core'
import { useSelector } from 'react-redux'

const Home = () => {
  const { jokes } = useSelector(state => state.jokes)
  return (
    <>
      <Heading as='h1'>Home</Heading>
      <Logout />
      {jokes.map(joke => (
        <Text key={joke.id}>{joke.joke}</Text>
      ))}
    </>
  )
}
export default Home
