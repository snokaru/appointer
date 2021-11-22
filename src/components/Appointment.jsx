import {
    Flex,
    Image,
    Heading,
    Text,
    Box,
    Button,
    Link,
} from '@chakra-ui/react'
import dateFormat from 'dateformat'

import ContentBox from './ContentBox'

export default function Appointment({id, name, imageUrl, dateStart, dateEnd, service, price}) {
    return (
        <ContentBox>
            <Flex direction={{base: 'column', md: 'row'}}>
                <Image objectFit='cover' src={imageUrl} height='200px' width={{base: '100%', md: '300px'}} />
                <Flex flex='1' direction='column' justify='space-between' align='left' p={5}>
                    <Flex direction='row' justify='space-between' align='center'>
                        <Box>
                            <Heading size='lg'>{service}</Heading>
                            <Text size='md' color='gray.400'>at <Link color='blue.400'>{name}</Link></Text>
                        </Box>
                        <Heading color='green.400'>${price}</Heading>
                    </Flex>
                    <Flex direction={{base: 'column', sm: 'row'}} justify='space-between' align={{base: 'left', sm: 'center'}} mt='10px'>
                        <Box fontSize='sm'>
                            <Text>{dateFormat(dateStart, "dddd, d mmm")}</Text>
                            <Text>{dateFormat(dateStart, "HH:MM")} - {dateFormat(dateEnd, "HH:MM")}</Text>
                        </Box>
                        <Button colorScheme='blue'>Details</Button>
                    </Flex>
                </Flex>
            </Flex>
        </ContentBox>
    )
}