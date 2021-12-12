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
    useColorModeValue,
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

import { useCurrentUserQuery } from '../../app/services/auth'
import NavItem from '../../components/NavItem'
import { useNeutralColor, usePrimaryColor, usePrimaryAltColor, useBaseColor } from '../../hooks/colors'

function Navbar() {
    const { isOpen, onToggle } = useDisclosure()
    const { colorMode, toggleColorMode } = useColorMode()
    const { user, isLoading } = useCurrentUserQuery();

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
                        <NavItem href={"/appointments"} label={"Appointments"} />
                        <NavItem href={"/appointments/create"} label={"Appointment Detail"} />
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
                            src={'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'}
                        />
                        </MenuButton>
                        <MenuList>
                            <MenuItem>My Appointments</MenuItem>
                            <MenuItem>Profile</MenuItem>
                            <MenuDivider />
                            <MenuItem>Settings</MenuItem>
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
