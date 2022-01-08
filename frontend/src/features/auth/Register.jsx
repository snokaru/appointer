import { 
    Flex,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Link,
    Button,
    Heading,
    Text,
 } from "@chakra-ui/react"

 import { Link as RouterLink } from 'react-router-dom'

 import ContentBox from '../../components/ContentBox'
 
import React from 'react'
import { useBaseColor, usePrimaryAltColor, usePrimaryColor } from "../../hooks/colors";

export default function Register() {
    return (
    <Flex minH='90vh' align='center' justify='center'>
      <Stack spacing={8} mx='auto' maxW='lg' py={12} px={6}>
        <Stack align='center'>
          <Heading fontSize='4xl'>Create your account!</Heading>
        </Stack>
        <ContentBox p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email Address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <FormControl id="password-confirm">
              <FormLabel>Confirm Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack direction={{ base: 'column', sm: 'row' }} align='start' justify='space-between'>
                <Link color={usePrimaryColor()}as={Text}>
                    <RouterLink to="/signin">Already have an account? Sign In!</RouterLink>     
                </Link>
              </Stack>
              <Button bg={usePrimaryColor()} color={useBaseColor()} _hover={{ bg: usePrimaryAltColor() }}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </ContentBox>
      </Stack>
    </Flex>
 
    );
}
