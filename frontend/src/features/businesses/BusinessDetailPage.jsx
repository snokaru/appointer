import React from 'react'
import { useParams } from 'react-router-dom'
import {
    Box,
    Flex,
    Spinner,
    Heading,
    Button,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    ModalContent,
} from '@chakra-ui/react'

import ContentBox from '../../components/ContentBox'
import AppointmentType from '../../components/AppointmentType'
import { useBusinessAppointmentTypesListQuery, useBusinessDetailQuery } from './hooks'
import { useCurrentUser } from '../auth/context'
import { useSuccessColor, useSuccessColorAlt, useBaseColor, } from '../../hooks/colors'




export default function BusinessDetailPage() {
    const { businessId } = useParams()
    const { isLoading: isLoadingBusinessData, data: business } = useBusinessDetailQuery(businessId)
    const { isLoading: isLoadingAppointmentTypes, data: appointmentTypes } = useBusinessAppointmentTypesListQuery(businessId)
    const user = useCurrentUser()
    const { isOpen, onOpen, onClose } = useDisclosure()
    
    return (
        <>
            <Box minH='90vh'>
            { isLoadingBusinessData ? 
                <Flex justifyContent='center' alignItems='center'>
                    <Spinner/>
                </Flex> 
            :
            <Box minH='90vh' padding={10}>
                <ContentBox mx={{base: 10, lg: 300}} padding={5}>
                    <Heading>
                        {business.name}
                    </Heading>
                    {isLoadingAppointmentTypes ? 
                        <Flex justifyContent='center' alignItems='center'>
                            <Spinner/>
                        </Flex> 
                    :
                        appointmentTypes.results.map(type =>  
                            <AppointmentType {...type} businessId={businessId} />
                        )
                    }
                    {user?.bussiness &&
                        <Flex justifyContent='flex-end'>
                            <Button
                                color={useBaseColor()}
                                bg={useSuccessColor()}
                                _hover={{ bg: useSuccessColorAlt() }}
                                onClick={onOpen}
                            >New Appointment Type</Button>
                        </Flex>
                    }
                </ContentBox>
            </Box>
            }
            </Box>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create an appointment type</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}