import React from 'react'
import Logout from '../authComponents/logout/Logout'
import { Heading, Text, Flex } from '@chakra-ui/core'
import { useSelector } from 'react-redux'

const Home = () => {
  const { jokes } = useSelector(state => state.jokes)
  return (
    <>
      <Flex mb='50px' justifyContent='space-between'>
        <Heading as='h1'>Welcome to Dad Jokes</Heading>
        <Logout />
      </Flex>
      {jokes.map(joke => (
        <Flex justifyContent='center' m='20px'>
          <Text fontSize='xl' key={joke.id}>
            {joke.joke}
          </Text>
        </Flex>
      ))}
    </>
  )
}
export default Home
