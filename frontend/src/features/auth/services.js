import axios from 'axios'
        
export async function login(email, password) {
    console.log('making login request')
    const tokens = await getTokens(email, password)
    console.log('request fulfiflled with')
    console.log(tokens)

    updateTokens(tokens.access, tokens.refresh)

    return await getCurrentUser()
}

export function updateTokens(access, refresh) {
    if (access && refresh) {
        localStorage.setItem('access-token', access)
        localStorage.setItem('refresh-token', refresh)
        axios.defaults.headers.common['Authorization'] = `Bearer ${access}`
    } else {
        localStorage.removeItem('access-token')
        localStorage.removeItem('refresh-token')
        axios.defaults.headers.common['Authorization'] = null 
    }
}

export async function getTokens(email, password) {
    const response = await axios.post('/api/auth/', { email, password })
    console.log(response)
    return response.data
}

export async function getCurrentUser() {
    return (await axios.get('/api/users/me/')).data
}

