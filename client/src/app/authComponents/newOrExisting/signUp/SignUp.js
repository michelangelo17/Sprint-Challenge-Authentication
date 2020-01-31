import React from 'react'
import { Formik, Form, Field } from 'formik'
import { signUpSchema } from '../../../../utils/yupSchemas'
import { useDispatch, useSelector } from 'react-redux'
import { setIsLoading } from '../../../../redux/slices/authSlice'
import { postSignUp } from '../../../../redux/thunks/authThunks'
import { Link as RLink } from 'react-router-dom'
import {
  Heading,
  FormControl,
  Input,
  Button,
  FormLabel,
  FormErrorMessage,
  Flex,
  Text,
  Link,
} from '@chakra-ui/core'

const SignUp = () => {
  const dispatch = useDispatch()
  const { isLoading, welcomeMessage, postSignUpError } = useSelector(
    state => state
  )
  return (
    <Flex alignItems='center' flexDirection='column'>
      <Heading m='50px 0' as='h1'>
        Please Sign Up for an Account
      </Heading>
      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={signUpSchema}
        onSubmit={(values, { resetForm }) => {
          console.log(values)
          dispatch(setIsLoading(true))
          dispatch(postSignUp(values))
          resetForm()
        }}
      >
        {({ errors }) => {
          console.log(errors)
          return (
            <Flex as={Form} flexDirection='column' w='50%' alignItems='center'>
              <FormControl isInvalid={errors.username}>
                <FormLabel id='usernameLabel' htmlFor='username'>
                  Choose a Username
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
                  Choose a Password
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
      {postSignUpError && (
        <>
          <Heading m='50px 0' as='h2'>
            {postSignUpError.message}
          </Heading>
          <Text m='30px' fontSize='xl' textAlign='center'>
            {postSignUpError.error}
          </Text>
        </>
      )}
      <Link m='20px' as={RLink} to='/login'>
        Go to Login
      </Link>
    </Flex>
  )
}
export default SignUp
