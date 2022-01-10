import { Routes, Route } from 'react-router-dom'
import { Box } from '@chakra-ui/react'

import Hero from './features/hero/Hero'
import Navbar from './features/common/Navbar'
import Dashboard from './features/dashboard/Dashboard'

import LogIn from './features/auth/LogIn'
import Register from './features/auth/Register'
import { useCurrentUser } from './features/auth/context'

import AppointementDetail from './features/appointments/AppointementDetail'
import { useNeutralColor } from './hooks/colors'
import BussinessListPage from './features/businesses/BusinessListPage'
import BusinessDetailPage from './features/businesses/BusinessDetailPage'

function App() {
  const user = useCurrentUser(); 

  return (
    <Box>
      <Navbar />
      <Box bg={useNeutralColor()}>
        <Routes>
          <Route path="/" element={user ? <Dashboard /> : <Hero />} />
          <Route path="signin" element={<LogIn /> }/>
          <Route path="register" element={<Register /> }/>
          <Route path="businesses" element={<BussinessListPage />} />
          <Route path="businesses/:businessId" element={<BusinessDetailPage />} />
        </Routes>
      </Box>
    </Box>
  )
}

export default App


