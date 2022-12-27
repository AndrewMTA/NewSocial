import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { useParams } from "react-router-dom";

// define a service user a base URL

const appApi = createApi({
    reducerPath: "appApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000",
    }),

    endpoints: (builder) => ({
        // creating the user
        signupUser: builder.mutation({
            query: (user) => ({
                url: "/user",
                method: "POST",
                body: user,
            }),
        }),

        //update info
        updateUser: builder.mutation({
            query: (user) => ({
                url: `/user/${user._id}`,
                method: "PUT",
                body: user,
            }),
        }),

        // login
        loginUser: builder.mutation({
            query: (user) => ({
                url: "/user/login",
                method: "POST",
                body: user,
            }),
        }),

        // logout

        logoutUser: builder.mutation({
            query: (payload) => ({
                url: "/logout",
                method: "DELETE",
                body: payload,
            }),
        }),
    }),
});

export const { useSignupUserMutation, useLoginUserMutation, useLogoutUserMutation, useUpdateUserMutation, } = appApi;

export default appApi;
