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
    useColorModeValue,
} from "@chakra-ui/react"

import { Link as RouterLink } from 'react-router-dom'

import ContentBox from '../../components/ContentBox'
 
import React from 'react'
import { usePrimaryAltColor, usePrimaryColor, useBaseColor } from "../../hooks/colors";

export default function LogIn() {
    return (
    <Flex minH='90vh' align='center' justify='center'>
      <Stack spacing={8} mx='auto' maxW='lg' py={12} px={6}>
        <Heading fontSize='4xl'>Sign in to your account!</Heading>
        <ContentBox p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack direction={{ base: 'column', sm: 'row' }} align='start' justify='space-between'>
                <Checkbox>Remember me</Checkbox>
                <Link color={usePrimaryColor()}>Forgot password?</Link>
              </Stack>
              <Link color={usePrimaryColor()} as={Text} mt={0}>
                <RouterLink to="/register">Don't have an account? Sign Up!</RouterLink>
              </Link>
              <Button color={useBaseColor()} bg={usePrimaryColor()} _hover={{ bg: usePrimaryAltColor() }}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </ContentBox>
      </Stack>
    </Flex>
 
    );
}
