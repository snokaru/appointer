import {
    Box,
    Heading,
    VStack,
} from '@chakra-ui/react'

import Appointment from '../../components/Appointment'
import BigSpinner from '../../components/BigSpinner';
import { useCurrentUser } from '../auth/context';
import { useAppointmentsQuery } from './hooks'

export default function AppointmentListPage() {
    const user = useCurrentUser()
    const { isLoading, data: appointmentsData } = useAppointmentsQuery(user.id)
    console.log(appointmentsData?.results)


    return (
        <Box minH='90vh'>
        { isLoading ? <BigSpinner /> :
            <VStack align='stretch' spacing={7} m={{'base': 0}} px={{'xl': 60}}>
                <Heading mt={4}>Appointments</Heading>
                { appointmentsData.results.map(app => <Appointment key={app.id} {...app}/>)}
            </VStack>
        }
        </Box>
    )
}
