import {
    Box,
} from '@chakra-ui/react'
import Appointments from './Appointments'

export default function Dashboard() {
    return ( 
        <Box padding={2} bgColor={'gray.50'}> 
            <Appointments />
        </Box>
    )
}