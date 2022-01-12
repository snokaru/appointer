import React, { useState } from 'react'
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
    FormControl,
    FormLabel,
    Input,
    useToast,
} from '@chakra-ui/react'

import ContentBox from '../../components/ContentBox'
import AppointmentType from '../../components/AppointmentType'
import { useBusinessAppointmentTypesListQuery, useBusinessDetailQuery, useNewAppointmentTypeMutation } from './hooks'
import { useCurrentUser } from '../auth/context'
import { useSuccessColor, useSuccessColorAlt, useBaseColor, } from '../../hooks/colors'




export default function BusinessDetailPage() {
    const { businessId } = useParams()
    const { isLoading: isLoadingBusinessData, data: business } = useBusinessDetailQuery(businessId)
    const { isLoading: isLoadingAppointmentTypes, data: appointmentTypes } = useBusinessAppointmentTypesListQuery(businessId)
    const user = useCurrentUser()
    const newAppointmentTypeMutation = useNewAppointmentTypeMutation(businessId)
    const toast = useToast()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [formState, setFormState] = useState({
        name: '',
        description: '',
        duration : '',
        price: 0 
    })

    const handleChange = ({
        target: { name, value },
    }) => setFormState((prev) => ({...prev, [name]: value }))
    
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
                        <FormControl>
                            <FormLabel for='name'>Name</FormLabel>
                            <Input onChange={handleChange} type='text' name='name'></Input>
                        </FormControl>
                        <FormControl>
                            <FormLabel for='description'>Description</FormLabel>
                            <Input onChange={handleChange} type='text' name='description'></Input>
                        </FormControl>
                        <FormControl>
                            <FormLabel for='duration'>Duration</FormLabel>
                            <Input onChange={handleChange} type='text' name='duration'></Input>
                        </FormControl>
                        <FormControl>
                            <FormLabel for='price'>Price</FormLabel>
                            <Input onChange={handleChange} type='text' name='price'></Input>
                        </FormControl>
                        <Button
                            color={useBaseColor()}
                            bg={useSuccessColor()}
                            _hover={{ bg: useSuccessColorAlt() }}
                            onClick={() => {
                                try {
                                    newAppointmentTypeMutation.mutate(formState)
                                    onClose()
                                    toast({
                                        title: "Success",
                                        description: "New appointment type succesfully created!",
                                        isClosable: true,
                                        status: 'success',
                                    })
                                } catch (e) {
                                    console.log(e)
                                    toast({
                                        title: "Error",
                                        description: "An error occured when trying to create a new appointment type!",
                                        isClosable: true,
                                        status: 'error',
                                    })
                                }

                            }}
                        >
                            Create
                        </Button>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}