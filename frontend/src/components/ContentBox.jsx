import {
    Box,
    useColorModeValue,
} from '@chakra-ui/react'
import { useBaseColor } from '../hooks/colors'

export default function ContentBox({children, ...rest}) {
    return (
        <Box rounded='lg' bg={useBaseColor()} {...rest}>
            { children }
        </Box>
    )
}