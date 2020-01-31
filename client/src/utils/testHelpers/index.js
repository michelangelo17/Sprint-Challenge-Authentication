import React from 'react'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'
import authReducer from '../../redux/slices/authSlice'
import { BrowserRouter } from 'react-router-dom'
import { configureStore } from '@reduxjs/toolkit'
import { theme, ThemeProvider } from '@chakra-ui/core'

export const renderWithReduxRouterAndChakra = (
  ui,
  {
    preloadedState,
    store = configureStore({
      reducer: authReducer,
      preloadedState,
    }),
  } = {}
) => {
  const rendered = render(
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>{ui}</ThemeProvider>
      </BrowserRouter>
    </Provider>,
    ({
      preloadedState,
      store = configureStore({
        reducer: authReducer,
        preloadedState,
      }),
    } = {})
  )
  return {
    ...rendered,
    rerender: (ui, options) =>
      renderWithReduxRouterAndChakra(ui, {
        container: rendered.container,
        ...options,
      }),
  }
}

// export const renderWithReduxAndRouter = (
//   ui,
//   {
//     preloadedState,
//     store = configureStore({
//       reducer: authReducer,
//       preloadedState,
//     }),
//   } = {}
// ) => {
//   const rendered = render(
//     <Provider store={store}>
//       <BrowserRouter>{ui}</BrowserRouter>
//     </Provider>,
//     ({
//       preloadedState,
//       store = configureStore({
//         reducer: authReducer,
//         preloadedState,
//       }),
//     } = {})
//   )
//   return {
//     ...rendered,
//     rerender: (ui, options) =>
//       renderWithReduxAndRouter(ui, {
//         container: rendered.container,
//         ...options,
//       }),
//   }
// }

// export const renderWithRedux = (
//   ui,
//   {
//     preloadedState,
//     store = configureStore({
//       reducer: authReducer,
//       preloadedState,
//     }),
//   } = {}
// ) => {
//   const rendered = render(
//     <Provider store={store}>{ui}</Provider>,
//     ({
//       preloadedState,
//       store = configureStore({
//         reducer: authReducer,
//         preloadedState,
//       }),
//     } = {})
//   )
//   return {
//     ...rendered,
//     rerender: (ui, options) =>
//       renderWithRedux(ui, { container: rendered.container, ...options }),
//   }
// }

// export const renderWithRouter = ui => {
//   const rendered = render(<BrowserRouter>{ui}</BrowserRouter>)
//   return {
//     ...rendered,
//     rerender: ui => renderWithRouter(ui, { container: rendered.container }),
//   }
// }
