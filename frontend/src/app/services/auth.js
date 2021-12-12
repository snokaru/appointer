import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: '/api/',
        prepareHeaders: (headers, { getState }) => {
            const token = getState().auth.token;
            if (token) {
                headers.set('Authorization:', `Bearer ${token}`)
            }
            return headers
        }
    }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: 'auth/',
                method: 'POST',
                body: credentials,
            }),
        }),
        currentUser: builder.query({
            query: () => ({
                url: 'user/me',
            }),
        }),
    })
})

export const { useLoginMutation, useCurrentUserQuery } = api
