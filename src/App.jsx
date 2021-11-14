import React from 'react'
import NavItem from './components/NavItem'
import Navbar from './features/common/Navbar'
import { Routes, Route } from 'react-router-dom'
import { Box } from '@chakra-ui/react'

function App() {
  return (
    <Box>
      <Navbar>
        <NavItem href={"/"} label={"Page"} />
        <NavItem href={"/appointments"} label={"Appointments"} />
        <NavItem href={"/appointments/create"} label={"Make Appointment"} />
      </Navbar>
      <Routes>
        <Route path="/" />
        <Route path="appointments/create" />
        <Route path="appointments" />
      </Routes>
    </Box>
  )
}

export default App
