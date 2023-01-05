import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
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
                url: "/user/",
                method: "POST",
                body: user,
            }),
        }),

        getUser: builder.mutation({
            query: (users) => ({
                url:`/user/`,
                method:"GET",
                body: users,
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

        //upload picture
        uploadUserPicture: builder.mutation({
            query: (user) => ({
                  url: `/user/${user._id}`,
                  method: "POST",
                  body: (() => {
                    const formData = new FormData();
                    if (user && user.picture) {
                      formData.append('file', user.picture);
                    }
                    return formData;
                  })()
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

        // create Post
        createPost: builder.mutation({
            query: (payload) => ({
                url: "/posts",
                method: "POST",
                body: payload,
            }),
        }),

        // get Posts
        getPosts: builder.mutation({
            query: (payload) => ({
                url: "/posts",
                method: "GET",
                body: payload,
            }),
        }),
    }),
});

export const {
  useSignupUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
  useUpdateUserMutation,
  useUploadUserPictureMutation,
  useCreatePostMutation,
  useGetPostsMutation,
  useGetUserMutation,
} = appApi;

export default appApi;
