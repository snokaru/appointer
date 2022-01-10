import React, { useState } from 'react'
import {
    Flex,
    Heading,
    Box,
    Text,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    FormControl,
    FormLabel,
    Input,
    useDisclosure,
    useToast,
} from '@chakra-ui/react'

import { useNeutralColor, useBaseColor, usePrimaryColor, usePrimaryAltColor, useSuccessColor, useSuccessColorAlt } from '../hooks/colors'
import { useNewAppointmentMutation } from '../features/businesses/hooks'
import { useCurrentUser } from '../features/auth/context'

export default function AppointmentType({id, name, description, duration, price, businessId}) {
    const { isOpen, onOpen, onClose } = useDisclosure(id)
    const [formState, setFormState] = useState({
        time_start: '',
        time_end: '',
    })
    const newAppointmentMutation = useNewAppointmentMutation(businessId, id)
    const toast = useToast()
    const user = useCurrentUser();

    const handleChange = ({
        target: { name, value },
    }) => setFormState((prev) => ({...prev, [name]: value }))

    return (
        <>
            <Box bg={useNeutralColor()} key={id} p={4} m={4}>
                <Flex direction='row' justifyContent='space-between'>
                    <Box>
                        <Heading size='md' mb={2}>{name}</Heading>
                        <Text>{description}</Text>
                    </Box>
                    <Box>
                        <Text>{duration}</Text>
                        <Text color={useSuccessColor()}>${price}</Text>
                    </Box>
                </Flex>
                {user?.customer &&
                    <Flex direction='row' justifyContent='flex-end'>
                        <Button
                            color={useBaseColor()}
                            bg={usePrimaryColor()}
                            _hover={{ bg: usePrimaryAltColor() }}
                            onClick={onOpen}
                        >
                        Make Appointment
                        </Button>
                    </Flex>
                }
            </Box>
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Create an appointment</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <FormControl>
                        <FormLabel for='time-start'></FormLabel>
                        <Input onChange={handleChange} type='datetime-local' name='time_start'></Input>
                    </FormControl>
                    <FormControl>
                        <FormLabel for='time-start'></FormLabel>
                        <Input onChange={handleChange} type='datetime-local' name='time_end'></Input>
                    </FormControl>
                    <ModalFooter>
                        <Button
                            color={useBaseColor()}
                            bg={useSuccessColor()}
                            _hover={{ bg: useSuccessColorAlt() }}
                            onClick={() => {
                                try {
                                    newAppointmentMutation.mutate(formState)
                                    onClose()
                                    toast({
                                        title: "Success",
                                        description: "New appointment succesfully created!",
                                        isClosable: true,
                                        status: 'success',
                                    })
                                } catch (e) {
                                    toast({
                                        title: "Error",
                                        description: "An error occured when trying to create a new appointment!",
                                        isClosable: true,
                                        status: 'error',
                                    })
                                }

                            }}
                        >
                            Create
                        </Button>
                    </ModalFooter>
                </ModalBody>
            </ModalContent>
        </Modal>
        </>
    )
}