import React, { useEffect } from 'react'

import * as authService from './services'

const AuthContext = React.createContext()

const SET_USER = 'SET_USER'
const UNSET_USER = 'UNSET_USER'

const SET_ERROR = 'SET_ERROR'
const UNSET_ERROR = 'UNSET_ERROR'

function authReducer(state, action) {
    switch (action.type) {
        case SET_USER:
            return { ...state, user: action.payload }
        case UNSET_USER:
            console.log('unsetting user...')
            return { ...state, user: null }
        case SET_ERROR:
            return {...state, error: action.payload }
        case UNSET_ERROR:
            return {...state, error: action.payload }
        default:
            return state
    }
}

function setUser(user) {
    return {
        type: SET_USER,
        payload: user,
    }
}

function unsetUser() {
    return {
        type: UNSET_USER,
    }
}

function setError(error) {
    return {
        type: SET_ERROR,
        payload: error,
    }
}

function unsetError() {
    return {
        type: UNSET_ERROR,
    }
}

function useAuthContext() {
    const context = React.useContext(AuthContext)
    return context
}

export function AuthProvider({children}) {
    const initialValue = {
        user: null,
        error: null,
    }
    const [state, dispatch] = React.useReducer(authReducer, initialValue)

    const loginWithLocalStorage = async () => {
        const accessToken = localStorage.getItem('access-token')
        const refreshToken = localStorage.getItem('refresh-token')
        if (accessToken && refreshToken) {
            try {
                authService.updateTokens(accessToken, refreshToken) 
                const user = await authService.getCurrentUser()
                dispatch(setUser(user))
            } catch (e) {
                console.log(e)
            }
        }
    }

    useEffect(() => {
        loginWithLocalStorage()
    }, [])


    return (
        <AuthContext.Provider value={{state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useLogin() {
    const { dispatch } = useAuthContext()
    return async (email, password) => {
        const user = await authService.login(email, password)
        dispatch(setUser(user))
    }
}

export function useLogout() {
    const { dispatch } = useAuthContext()
    return () => {
        console.log('executing logout...')
        authService.updateTokens()
        dispatch(unsetUser())
    }
}

export function useCurrentUser() {
    const authContext = useAuthContext()
    return authContext.state.user
}

export function useAuthError() {
    const authContext = useAuthContext()
    return authContext.state.error
}

