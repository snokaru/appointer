import React from 'react'
import {
    Flex,
    Spinner,
} from '@chakra-ui/react'


export default function BigSpinner() {
   return (  
        <Flex height='90vh' width='100%' justify='center' align='center'>
          <Spinner size='xl'/>
        </Flex> 
   )
}