import { Routes, Route } from 'react-router-dom'
import { Box, useColorModeValue } from '@chakra-ui/react'

import Hero from './features/hero/Hero'
import Navbar from './features/common/Navbar'
import Dashboard from './features/dashboard/Dashboard'

import LogIn from './features/auth/LogIn'
import Register from './features/auth/Register'

import AppointementDetail from './features/appointments/AppointementDetail'
import { useNeutralColor } from './hooks/colors'


function App() {
  const isLoggedIn = true;

  return (
    <Box>
      <Navbar />
      <Box bg={useNeutralColor()}>
        <Routes>
          <Route path="/" element={isLoggedIn ? <Dashboard /> : <Hero />} />
          <Route path="appointments/create" />
          <Route path="appointments" element={<AppointementDetail/>} />
          <Route path="signin" element={<LogIn /> }/>
          <Route path="register" element={<Register /> }/>
        </Routes>
      </Box>
    </Box>
  )
}

export default App


