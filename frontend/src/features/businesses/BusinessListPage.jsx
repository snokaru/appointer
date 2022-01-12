import React from 'react'
import { 
  Spinner,
  Box, 
  VStack,
  Heading,
  Flex,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

import { usePrimaryColor, usePrimaryAltColor, useBaseColor } from "../../hooks/colors"
import { useBusinessListQuery } from './hooks'
import Business from '../../components/Business'
import BigSpinner from '../../components/BigSpinner'

export default function BussinessListPage() {
  const { isLoading, data } = useBusinessListQuery()
  console.log(data)

  return (
      <Box minH='90vh'>
      {isLoading ? 
        <BigSpinner/>
      : 
        <VStack align='stretch' spacing={7} m={{'base': 0}} px={{'xl': 60}}>
            <Heading mt={4}>Businesses</Heading>
            { data.results.map(bus => 
              <Business {...bus} key={bus.user.id}/>)}
        </VStack>
      }
      </Box>
  )
}
