import { Text, useColorModeValue } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React from 'react'


function NavItem(props) {
    return (
        <Link to={props.href}>
            <Text
                px={2}
                py={3}
                rounded={'md'}
                _hover={{
                    cursor: 'pointer',
                    textDecoration: 'none',
                    bg: useColorModeValue('gray.200', 'gray.700')
                }}
            >
                {props.label}
            </Text>
        </Link>
    )
}

export default NavItem