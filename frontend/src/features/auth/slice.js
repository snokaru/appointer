import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null,
    access: null,
    refresh: null,
}

const slice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (
            state,
            action) => {
                console.log('received payload')
                console.log(action)
                state.access = action.payload.access
                state.refresh = action.payload.refresh
            },
    }
})


export const { setCredentials } = slice.actions
export default slice.reducer
export const selectCurrentUser = (state) => state.auth.user
