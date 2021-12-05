import { useColorModeValue } from '@chakra-ui/react'

export function usePrimaryColor() {
    return useColorModeValue('blue.400', 'cyan.400')
}

export function usePrimaryAltColor() {
    return useColorModeValue('blue.300', 'cyan.300')
}

export function useBaseColor() {
    return useColorModeValue('white', 'gray.700')
}

export function useWhiteColor() {
    return useColorModeValue('white')
}

export function useBlackColor() {
    return useColorModeValue('black')
}

export function useNeutralColor() {
    return useColorModeValue('gray.50', 'gray.800')
}

export function useNeutralComplementColor() {
    return useColorModeValue('gray.800', 'gray.50')
}

export function useSuccessColor() {
    return useColorModeValue('green.400', 'green.300')
}