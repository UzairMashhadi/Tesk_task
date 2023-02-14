import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import apiEndpoint from '../../config/environment';

export const uploadServerApi = createApi({
  reducerPath: 'uploadServerApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${apiEndpoint}/`,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as any).auth.token
      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),

  endpoints: (builder) => ({
    uploadOne: builder.mutation({
      query: (payload) => ({
        url: "upload-one",
        method: "POST",
        body: payload
      }),
    }),
  })
})

export const {
  useUploadOneMutation
} = uploadServerApi;

export function isErrorWithMessage(
  error: unknown
): error is {
  message: string,
  status: number,
  success: boolean,
  data: any
} {
  return (
    typeof error === 'object' &&
    error != null &&
    'message' in error &&
    typeof (error as any).message === 'string'
  )
}

export function isFetchBaseQueryError(
  error: unknown
): error is {
  status: number,
  data: {
    message: string,
    status: number,
    success: boolean,
    data: any
  }
} {
  return typeof error === 'object' && error != null && 'status' in error
}