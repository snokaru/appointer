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

export default function BussinessListPage() {
  const { isLoading, data } = useBusinessListQuery()

  return (
      <Box minH='90vh'>
      {isLoading ? 
        <Flex>
          <Spinner/>
        </Flex> 
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
