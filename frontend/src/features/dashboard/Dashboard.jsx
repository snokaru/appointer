import {
    Box,
} from '@chakra-ui/react'
import Appointments from './Appointments'

export default function Dashboard() {
    return ( 
        <Box padding={2}> 
            <Appointments />
        </Box>
    )
}