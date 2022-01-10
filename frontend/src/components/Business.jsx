import React from 'react'
import { Flex, Heading, Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

import ContentBox from './ContentBox'
import { useBaseColor, usePrimaryColor, usePrimaryAltColor } from '../hooks/colors'


export default function Business({name, user}) {
    const navigate = useNavigate()

    return (
        <ContentBox padding={5}>
            <Flex direction="column">
              <Heading size="lg">{name}</Heading>
              <Flex direction="row" justifyContent={"flex-end"}>
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
        </ContentBox>
    )
}

