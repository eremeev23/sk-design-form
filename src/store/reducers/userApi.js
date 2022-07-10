import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000/api/'}),
  endpoints: build => ({
    addUser: build.mutation({
      query: (body) => ({
        url: 'users',
        method: 'POST',
        body
      })
    }),
  })
})

export const { useAddUserMutation } = userApi