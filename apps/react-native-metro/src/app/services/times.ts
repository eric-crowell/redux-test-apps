import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

interface TimeResponse {
  time: string
}

export const timeApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  reducerPath: 'timeApi',
  tagTypes: ['Time'],
  endpoints: (build) => ({
    getTime: build.query<TimeResponse, string>({
      query: (id) => `/time/${id}`,
      /**
       * The `providesTags` option causes the query to fail in React Native.
       * I don't know why this is the case yet.
       */
      providesTags: (_result, _err, id) => [{ type: 'Time', id }],
    }),
  }),
})
