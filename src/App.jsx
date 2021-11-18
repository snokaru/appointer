import React from 'react'
import NavItem from './components/NavItem'
import Navbar from './features/common/Navbar'
import { Routes, Route } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import LogIn from './features/auth/LogIn'
import Register from './features/auth/Register'
import Hero from './features/hero/Hero'
import Dashboard from './features/dashboard/Dashboard'

function App() {
  const isLoggedIn = false;

  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={isLoggedIn ? <Dashboard /> : <Hero />} />
        <Route path="appointments/create" />
        <Route path="appointments" />
        <Route path="signin" element={<LogIn /> }/>
        <Route path="register" element={<Register /> }/>
      </Routes>
    </Box>
  )
}

export default App


