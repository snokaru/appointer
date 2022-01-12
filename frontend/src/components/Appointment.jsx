import {
    Flex,
    Image,
    Heading,
    Text,
    Box,
    Button,
    Badge,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import dateFormat from 'dateformat'

import ContentBox from './ContentBox'
import { useDangerColor, useDangerColorAlt, useBaseColor, useNeutralColor, usePrimaryAltColor, usePrimaryColor, useSuccessColor, useSuccessColorAlt } from '../hooks/colors'
import Business from './Business'
import { useCurrentUser } from '../features/auth/context'
import { useConfirmAppointmentMutation, useDeleteAppointmentMutation } from '../features/appointments/hooks'

export default function Appointment({id, time_start, time_end, confirmed, type}) {
    const user = useCurrentUser()
    const confrimAppointmentMutation = useConfirmAppointmentMutation(type.bussiness.user, id)
    const deleteAppointmentMutation = useDeleteAppointmentMutation(user.id, id)

    return (
        <ContentBox>
            <Flex direction={{base: 'column', md: 'row'}}>
                <Image objectFit='cover' src={type.bussiness.image_url} height='200px' width={{base: '100%', md: '300px'}} />
                <Flex flex='1' direction='column' justify='space-between' align='left' p={5}>
                    <Flex direction='row' justify='space-between' align='center'>
                        <Box>
                            <Heading size='lg'>{type.name} <Badge ml={1} colorScheme={confirmed ? 'green' : 'red'} p={1} fontSize='sm'>{confirmed ? "CONFIRMED" : "UNCONFIRMED"}</Badge></Heading>
                             <Link to={`/businesses/${type.bussiness.user}`} color={usePrimaryColor()}><Text color={usePrimaryColor()}>{type.bussiness.name}</Text></Link>
                        </Box>
                        <Heading color={useSuccessColor()}>${type.price}</Heading>
                    </Flex>
                    <Flex direction={{base: 'column', sm: 'row'}} justify='space-between' align={{base: 'left', sm: 'center'}} mt='10px'>
                        <Box fontSize='sm'>
                            <Text>{dateFormat(time_start, "dddd, d mmm")}</Text>
                            <Text>{dateFormat(time_start, "HH:MM")} - {dateFormat(time_end, "HH:MM")}</Text>
                        </Box>
                        {(user?.bussiness && !confirmed) && <Button color={useBaseColor()} bg={useSuccessColor()} _hover={{bg: useSuccessColorAlt()}} onClick={() => confrimAppointmentMutation.mutate()}>Confirm</Button> }
                        {(user?.customer && !confirmed) && <Button color={useBaseColor()} bg={useDangerColor()} _hover={{bg: useDangerColorAlt()}} onClick={() => deleteAppointmentMutation.mutate()}>Delete</Button> }
                    </Flex>
                </Flex>
            </Flex>
        </ContentBox>
    )
}
