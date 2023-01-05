import { createSlice } from "@reduxjs/toolkit";
import appApi from "../services/appApi";

export const usersSlice = createSlice({
    name: "users",
    initialState: null,
    reducers: {
        addNotifications: (state, { payload }) => {
            if (state.newMessages[payload]) {
                state.newMessages[payload] = state.newMessages[payload] + 1;
            } else {
                state.newMessages[payload] = 1;
            }
        },
        resetNotifications: (state, { payload }) => {
            delete state.newMessages[payload];
        },
    },

    extraReducers: (builder) => {
       
        // save user after update
        builder.addMatcher(appApi.endpoints.updateUser.matchFulfilled, (state, { payload }) => payload);
        // save user uploading user profile
        builder.addMatcher(appApi.endpoints.uploadUserPicture.matchFulfilled, (state, { payload }) => payload);
        builder.addMatcher(appApi.endpoints.getUser.matchFulfilled, (state, { payload }) => payload || []);
    },
});

export const { addNotifications, resetNotifications } = usersSlice.actions;
export default usersSlice.reducer;
