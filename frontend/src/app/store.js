import { configureStore } from '@reduxjs/toolkit'
import { api as authApi } from './services/auth'
import authReducer from '../features/auth/slice'

export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(authApi.middleware),
});
