import { 
    Box,
    Flex,
    IconButton,
    HStack,
    Button,
    Menu,
    MenuItem,
    MenuList,
    MenuDivider,
    MenuButton,
    Avatar,
    Text,
    useDisclosure,
    useColorMode,
    Stack,
    Collapse,
} from '@chakra-ui/react'
import {
    CloseIcon,
    HamburgerIcon,
    MoonIcon,
    SunIcon,
} from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import React from 'react'

import NavItem from '../../components/NavItem'
import { useNeutralColor, usePrimaryColor, usePrimaryAltColor, useBaseColor } from '../../hooks/colors'

import { useCurrentUser, useLogout } from '../auth/context'

function Navbar() {
    const { isOpen, onToggle } = useDisclosure()
    const { colorMode, toggleColorMode } = useColorMode()
    const user = useCurrentUser()
    const logout = useLogout()

    return (
        <Box px={4} bg={useBaseColor()}>
            <Flex 
                h={16}
                alignItems={'center'}
                justifyContent={'space-between'}
                borderBottom={1}
                borderColor={useNeutralColor()}
                borderStyle={'solid'}
                minH={'7vh'}
            >
                <IconButton 
                    onClick={onToggle}
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    display={{md: 'none'}}
                    variant={'ghost'}
                />
                <HStack spacing={8} alignItems={'center'}>
                    <Text
                        fontFamily={'heading'}
                        fontWeight={600}
                    >
                        Planner
                    </Text>
                    <HStack as={'nav'} spacing={4} display={{base: 'none', md: 'flex'}}> 
                        <NavItem href={"/"} label={"Home"} />
                        {user && <NavItem href={"/businesses"} label={"Businesses"} /> }
                    </HStack>
                </HStack>
                <Box display='flex'> 
                <Button onClick={toggleColorMode} mr={5}>
                    {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </Button>
                {user ? 
                    <Menu>
                        <MenuButton
                            as={Button}
                            cursor={'pointer'}
                            variant={'link'}
                            rounded={'full'}
                        >
                        <Avatar
                            size={'sm'} 
                        />
                        </MenuButton>
                        <MenuList>
                            <MenuItem>My Appointments</MenuItem>
                            <MenuItem>Profile</MenuItem>
                            <MenuDivider />
                            <MenuItem onClick={logout}>Logout</MenuItem>
                        </MenuList>
                    </Menu>
                :
                    <HStack>
                        <Button display={{base: 'none', md:'inline-flex'}}> <Link to="/signin">Sign In</Link></Button>
                        <Button
                            fontSize={'sm'}
                            fontWeight={600}
                            color={useBaseColor()}
                            bg={usePrimaryColor()}
                            _hover={{bg: usePrimaryAltColor()}}
                        >
                        <Link to="/register">
                            Sign Up
                        </Link>
                        </Button>
                    </HStack>
                }
                </Box>
            </Flex>
            <Collapse in={isOpen} animateOpacity>
                <Box pb={4} display={{ md: 'none' }}>
                    <Stack as={'nav'} spacing={4}>
                        <NavItem href={"/"} label={"Page"} />
                        <NavItem href={"/appointments"} label={"Appointments"} />
                        <NavItem href={"/appointments/create"} label={"Make Appointment"} />
                    </Stack>
                </Box>
            </Collapse>
        </Box>
    )
}

export default Navbar
