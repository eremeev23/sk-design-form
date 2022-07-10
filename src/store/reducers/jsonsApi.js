import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const jsonsApi = createApi({
  reducerPath: 'jsonsApi',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000/api/'}),
  endpoints: build => ({
    getCities: build.query({
      query: () => 'cities.json'
    }),
    getSources: build.query({
      query: () => 'sources.json'
    })
  })
})

export const { useGetCitiesQuery, useGetSourcesQuery } = jsonsApi