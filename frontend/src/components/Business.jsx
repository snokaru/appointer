import React from 'react'
import { Flex, Heading, Button, Image, Box, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

import ContentBox from './ContentBox'
import { useBaseColor, usePrimaryColor, usePrimaryAltColor, useSuccessColor } from '../hooks/colors'


export default function Business({name, user, image_url, description}) {
    const navigate = useNavigate()

    return (
        <ContentBox>
        <Flex direction={{base: 'column', md: 'row'}}>
            <Image objectFit='cover' src={image_url} height='200px' width={{base: '100%', md: '300px'}} />
            <Flex flex='1' direction='column' justify='space-between' align='left' p={5}>
                <Flex direction='row' justify='space-between' align='center'>
                    <Heading size='lg'>{name}</Heading>
                </Flex>
                <Text>{description}</Text>
                <Flex direction={{base: 'column', sm: 'row'}} justify='space-between' align={{base: 'left', sm: 'center'}} mt='10px'>
                    <Button
                        color={useBaseColor()}
                        bg={usePrimaryColor()}
                        _hover={{ bg: usePrimaryAltColor() }}
                        onClick={() => navigate(`/businesses/${user.id}`)}
                    >
                        Details
                    </Button>
                </Flex>
            </Flex>
        </Flex>
        </ContentBox>
    )
}
