import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  StackDivider,
  SimpleGrid,
  Flex,
  Image,
  useColorModeValue,
  createIcon,
} from '@chakra-ui/react'
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from 'react-icons/io5'
import Feature from '../../components/Feature'

export default function Hero() {
  return (
    <>
    <Flex 
        p={0}
        m={0}
        minH={'93vh'}
        alignItems={{base:'top', md:'center'}}
        w={'full'}
        backgroundImage={'url(https://images.pexels.com/photos/6146929/pexels-photo-6146929.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)'}
        backgroundSize={'cover'}
        backgroundPosition={'center center'}
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
          backgroundColor={{base: 'white', md: 'transparent'}}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
            color={{base: 'black', md: 'white'}}
          >
            Can't keep up with your appointments? <br />
            <Text as={'span'} color={'blue.400'}>
              Use Planner.
            </Text>
          </Heading>
          <Text color={{base: 'black', md: 'white'}} mt={5} fontSize={'md'} fontWeight={'500'}>
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
              bg={'blue.400'}
              rounded={'full'}
              px={6}
              _hover={{
                bg: 'blue.500',
              }}>
                  Join Now
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
