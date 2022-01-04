import React, { useState } from 'react'
import { 
    Flex,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useToast,
} from "@chakra-ui/react"
import { Link as RouterLink, useNavigate } from 'react-router-dom'

import ContentBox from '../../components/ContentBox'
import { usePrimaryAltColor, usePrimaryColor, useBaseColor } from "../../hooks/colors";
import { useLogin } from './context'

export default function LogIn() {
    const navigate = useNavigate();
    const toast = useToast();
    const [formState, setFormState] = useState({
        email: '',
        password: '',
    })

    const login = useLogin()

    const handleChange = ({
        target: { name, value },
    }) => setFormState((prev) => ({...prev, [name]: value }))

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
                        await login(formState.email, formState.password)
                        navigate("/")
                    } catch(e) {
                        toast({
                            title: "Error",
                            description: "An error occured when trying to log you in!",
                            isClosable: true,
                            status: 'error',
                        })
                    }
                }}
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
