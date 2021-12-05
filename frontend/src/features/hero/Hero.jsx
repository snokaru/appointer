import {
  Box,
  Heading,
  Text,
  Button,
  Stack,
  Flex,
  useColorMode,
} from '@chakra-ui/react'

import { Link } from 'react-router-dom'

import { usePrimaryColor, usePrimaryAltColor, useBaseColor, useNeutralColor, useWhiteColor } from '../../hooks/colors';

export default function Hero() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
    <Flex 
        p={0}
        m={0}
        minH={'93vh'}
        alignItems={{base:'top', md:'center'}}
        w={'full'}
        position='cover'
        backgroundSize='cover'
        backgroundPosition='center center'
        bgImage={{
          base:
          'linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ),' + ( colorMode == 'light' ? 
          'url(https://images.pexels.com/photos/6146929/pexels-photo-6146929.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)' :
          'url(https://images.pexels.com/photos/327540/pexels-photo-327540.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)' ),
          sm: 
          'linear-gradient( rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15) ),' + ( colorMode == 'light' ? 
          'url(https://images.pexels.com/photos/6146929/pexels-photo-6146929.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)' :
          'url(https://images.pexels.com/photos/327540/pexels-photo-327540.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)' ),
        }}
      >
        <Stack
          height={'100%'}
          as={Box}
          justify={'center'}
          spacing={5}
          m={10}
          p={5}
          maxW={'3xl'}
          borderRadius={'lg'}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
            color={useWhiteColor()}
          >
            Can't keep up with your appointments? <br />
            <Text as={'span'} color={usePrimaryColor()}>
              Use Planner.
            </Text>
          </Heading>
          <Text color={'white'} mt={5} fontSize={'md'} fontWeight={'500'}>
              Planner is your one-stop location for managing your appointments. You can make appointments to all the businesses you love and keep track of them!
              At the same time, Planner provides the perfect opportunity for you to grow your business.
          </Text>
          <Stack
            direction={'row'}
            spacing={3}
            align={'center'}
            position={'relative'}>
            <Button
              colorScheme={'green'}
              bg={usePrimaryColor()}
              rounded={'full'}
              px={6}
              _hover={{
                bg: usePrimaryAltColor(),
              }}>
                <Link to="/register">
                  Join Now
                </Link>
            </Button>
            <Button rounded={'full'} px={6}>
                Learn More
            </Button>
          </Stack>
        </Stack>
        </Flex>
    </>
  );
}
