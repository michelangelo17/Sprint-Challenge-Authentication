import React from 'react'
import { Heading, Link, Flex } from '@chakra-ui/core'
import { Link as RLink } from 'react-router-dom'

const NewOrExisting = () => (
  <Flex justifyContent='center' m='50px 0'>
    <Flex direction='column' w='50%' alignItems='center'>
      <Heading as='h1'>Welcome!</Heading>
      <Link m='20px 0 20px' as={RLink} to='/login'>
        I have an account
      </Link>
      <Link m='10px 0 20px' as={RLink} to='/signup'>
        I need to make an account
      </Link>
    </Flex>
  </Flex>
)

export default NewOrExisting
