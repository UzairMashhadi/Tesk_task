import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query/react";
import apiEndpoint from "../../config/environment";

export const adminServerApi = createApi({
  reducerPath: "adminServerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${apiEndpoint}/admin/`,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as any).auth.token;
      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),

  tagTypes: ["Courses", "Events"],

  endpoints: (builder) => ({
    getAllClients: builder.query({
      query: () => "all-clients",
    }),

    getAllCoaches: builder.query({
      query: () => "all-coaches",
    }),

    getUserById: builder.query({
      query: (id) => `user/${id}`,
    }),

    uploadCourse: builder.mutation({
      query: (payload) => ({
        url: "course",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Courses"],
    }),

    getCourses: builder.query({
      query: (id) => `course`,
      providesTags: ["Courses"],
    }),

    deleteCourse: builder.mutation({
      query: (id) => ({
        url: `course/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Courses"],
    }),

    getAllEvents: builder.query({
      query: () => "events",
      providesTags: ["Events"],
    }),

    createEvent: builder.mutation({
      query: (payload) => ({
        url: `events`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Events"],
    }),

    getAllUsers: builder.query({
      query: () => "all-users",
    }),
  }),
});

export const {
  useGetAllClientsQuery,
  useGetAllCoachesQuery,
  useGetUserByIdQuery,
  useUploadCourseMutation,
  useGetCoursesQuery,
  useDeleteCourseMutation,
  useGetAllEventsQuery,
  useGetAllUsersQuery,
  useCreateEventMutation,
} = adminServerApi;

export function isErrorWithMessage(error: unknown): error is {
  message: string;
  status: number;
  success: boolean;
  data: any;
} {
  return (
    typeof error === "object" &&
    error != null &&
    "message" in error &&
    typeof (error as any).message === "string"
  );
}

export function isFetchBaseQueryError(error: unknown): error is {
  status: number;
  data: {
    message: string;
    status: number;
    success: boolean;
    data: any;
  };
} {
  return typeof error === "object" && error != null && "status" in error;
}
