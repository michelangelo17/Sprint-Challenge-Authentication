import React from 'react'
import { Formik, Form, Field } from 'formik'
import { loginSchema } from '../../../../utils/yupSchemas'
import { useDispatch, useSelector } from 'react-redux'
import { setIsLoading } from '../../../../redux/slices/authSlice'
import { postSignIn } from '../../../../redux/thunks/authThunks'
import { Link as RLink } from 'react-router-dom'
import {
  Heading,
  FormControl,
  Input,
  Button,
  FormLabel,
  FormErrorMessage,
  Flex,
  Link,
  Text,
} from '@chakra-ui/core'

const Login = () => {
  const dispatch = useDispatch()
  const { isLoading, welcomeMessage, postSignInError } = useSelector(
    state => state
  )
  return (
    <Flex alignItems='center' flexDirection='column'>
      <Heading m='50px 0' as='h1'>
        Please Login To Your Account
      </Heading>
      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={loginSchema}
        onSubmit={(values, { resetForm }) => {
          console.log(resetForm)
          dispatch(setIsLoading(true))
          dispatch(postSignIn(values))
          resetForm({ username: '', password: '' })
        }}
      >
        {({ errors }) => {
          console.log(errors)
          return (
            <Flex as={Form} flexDirection='column' w='50%' alignItems='center'>
              <FormControl isInvalid={errors.username}>
                <FormLabel id='usernameLabel' htmlFor='username'>
                  Enter Username
                </FormLabel>
                <Input
                  m='10px 0 20px'
                  type='text'
                  name='username'
                  aria-describedby='usernameLabel'
                  placeholder='username'
                  as={Field}
                />
                <FormErrorMessage m='10px 0 20px'>
                  {errors.username}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.password}>
                <FormLabel id='passwordLabel' htmlFor='password'>
                  Enter Password
                </FormLabel>
                <Input
                  m='10px 0 20px'
                  type='password'
                  name='password'
                  aria-describedby='passwordLabel'
                  placeholder='password'
                  as={Field}
                />
                <FormErrorMessage m='10px 0 20px'>
                  {errors.password}
                </FormErrorMessage>
              </FormControl>
              <Flex justifyContent='center'>
                <Button type='submit' isDisabled={isLoading}>
                  Submit
                </Button>
              </Flex>
            </Flex>
          )
        }}
      </Formik>
      {welcomeMessage && (
        <Heading m='50px 0' as='h2'>
          {welcomeMessage}
        </Heading>
      )}
      {postSignInError && (
        <>
          <Heading m='50px 0' as='h2'>
            {postSignInError.message}
          </Heading>
          <Text m='30px' fontSize='xl' textAlign='center'>
            {postSignInError.error}
          </Text>
        </>
      )}
      <Link m='20px' as={RLink} to='/signup'>
        Go to Sign Up
      </Link>
    </Flex>
  )
}
export default Login
