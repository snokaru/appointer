import {
    Box,
    Heading,
    Button,
    VStack,
    StackDivider,
} from '@chakra-ui/react'

import Appointment from '../../components/Appointment'

export default function Appointments() {
    const appointments = [
        {
            id: 1,
            name: "John's Barber Shop",
            image: "https://images.pexels.com/photos/3992870/pexels-photo-3992870.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            dateStart: new Date('2021-04-18T11:00:00Z'),
            dateEnd: new Date('2021-04-18T12:00:00Z'),
            service: 'Basic Haircut',
            price: 50
        },
        {
            id: 2,
            name: "Cathy's Wine and Dine",
            image: "https://images.pexels.com/photos/5083913/pexels-photo-5083913.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            dateStart: new Date('2021-04-18T11:00:00Z'),
            dateEnd: new Date('2021-04-18T12:00:00Z'),
            service: 'Table of Two',
            price: 50
        },
        {
            id: 3,
            name: "Dr. Mihail Radulescu",
            image: "https://images.pexels.com/photos/305565/pexels-photo-305565.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            dateStart: new Date('2021-04-18T11:00:00Z'),
            dateEnd: new Date('2021-04-18T12:00:00Z'),
            service: 'Basic Consultation',
            price: 50
        },
    ]

    console.log('first appointment date:', appointments[0]['dateStart'])
    return (
        <Box>
            <VStack align='stretch' spacing={7} m={7} px={60}>
                <Heading>My Appointments</Heading>
                { appointments.map(app => <Appointment key={app.id} name={app.name} imageUrl={app.image} dateStart={app.dateStart} 
                dateEnd={app.dateEnd} service={app.service} price={app.price} />)}
            </VStack>
        </Box>
    )
}