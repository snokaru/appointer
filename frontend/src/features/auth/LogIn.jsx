import { 
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    Container,
    useToast,
    useColorModeValue,
} from "@chakra-ui/react"

import { useDispatch } from 'react-redux'
import { setCredentials } from './slice'
import { useLoginMutation, useCurrentUserQuery } from '../../app/services/auth'

import { Link as RouterLink, useNavigate } from 'react-router-dom'

import ContentBox from '../../components/ContentBox'
 
import React, { useState } from 'react'
import { usePrimaryAltColor, usePrimaryColor, useBaseColor } from "../../hooks/colors";

export default function LogIn() {
    const dispatch = useDispatch()
    const [login, { isLoading }] = useLoginMutation()
    const navigate = useNavigate();
    const toast = useToast();
    const [formState, setFormState] = useState({
        email: '',
        password: '',
    })
    
    const handleChange = ({
        target: { name, value },
    }) => setFormState((prev) => ({...prev, [name]: value }))

    console.log(formState);


    return (
    <Flex minH='90vh' align='center' justify='center'>
      <Stack spacing={8} mx='auto' maxW='lg' py={12} px={6}>
        <Heading fontSize='4xl'>Sign in to your account!</Heading>
        <ContentBox p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input onChange={handleChange} type="email" name="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input onChange={handleChange} type="password" name="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack direction={{ base: 'column', sm: 'row' }} align='start' justify='space-between'>
                <Checkbox>Remember me</Checkbox>
                <Link color={usePrimaryColor()}>Forgot password?</Link>
              </Stack>
              <Link color={usePrimaryColor()} as={Text} mt={0}>
                <RouterLink to="/register">Don't have an account? Sign Up!</RouterLink>
              </Link>
              <Button
                color={useBaseColor()}
                bg={usePrimaryColor()}
                _hover={{ bg: usePrimaryAltColor() }}
                onClick={async () => {
                    try {
                        const user = await login(formState).unwrap()
                        dispatch(setCredentials(user))
                        navigate('/') 
                    } catch (err) {
                        console.log(err)
                        toast({
                        status: 'error',
                        title: 'Error',
                        description: 'An error occured!',
                        isClosable: true,
                    })
                    }
                }}
                isLoading={isLoading}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </ContentBox>
      </Stack>
    </Flex>
 
    );
}
