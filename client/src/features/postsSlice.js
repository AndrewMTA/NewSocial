import { createSlice } from "@reduxjs/toolkit";
import appApi from "../services/appApi";

export const postsSlice = createSlice({
    name: "post",
    initialState: [],
    reducers: {
    },

    extraReducers: (builder) => {
      // after creating post
      builder.addMatcher(appApi.endpoints.createPost.matchFulfilled, (state, { payload }) => [payload, ...state]);
      // after creating post
      builder.addMatcher(appApi.endpoints.getPosts.matchFulfilled, (state, { payload }) => payload || []);
    },
});

export default postsSlice.reducer;
