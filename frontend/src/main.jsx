import React from 'react'
import ReactDOM from 'react-dom'
import { ChakraProvider } from '@chakra-ui/provider'
import { BrowserRouter } from 'react-router-dom'

import { AuthProvider } from './features/auth/context'
import theme from './theme'
import App from './App'


ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
        <BrowserRouter>
          <ChakraProvider theme={theme}>
            <App />
          </ChakraProvider>
        </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
