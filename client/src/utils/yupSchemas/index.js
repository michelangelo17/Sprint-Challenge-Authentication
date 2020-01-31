import * as yup from 'yup'

export const loginSchema = yup.object().shape({
  username: yup
    .string()
    .required('Please enter your username!')
    .min(5, 'Username is too short! (Min 5 char)')
    .max(15, 'Username is too long! (Max 15 char)'),
  password: yup
    .string()
    .required('Please enter your password')
    .min(6, 'Password is too short! (Min 6 char)'),
})

export const signUpSchema = yup.object().shape({
  username: yup
    .string()
    .required('Please enter your username!')
    .min(5, 'Username is too short! (Min 5 char)')
    .max(15, 'Username is too long! (Max 15 char)'),
  password: yup
    .string()
    .required('Please enter your password')
    .min(6, 'Password is too short! (Min 6 char)'),
})
