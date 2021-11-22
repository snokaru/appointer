import {
    Box,
    useColorModeValue,
} from '@chakra-ui/react'

export default function ContentBox({children, ...rest}) {
    return (
        <Box rounded='lg' bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} {...rest}>
            { children }
        </Box>
    )
}