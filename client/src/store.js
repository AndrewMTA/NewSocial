import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/userSlice";
import usersSlice from "./features/usersSlice";
import postsSlice from "./features/postsSlice";
import appApi from "./services/appApi";

// persist our store
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import logger from 'redux-logger';
import thunk from "redux-thunk";

// reducers
const reducer = combineReducers({
    user: userSlice,
    users:usersSlice,
    posts: postsSlice,
    [appApi.reducerPath]: appApi.reducer,
});

const persistConfig = {
    key: "root",
    storage,
    blackList: [appApi.reducerPath],
};

// persist our store
const persistedReducer = persistReducer(persistConfig, reducer);

// setup middleware
const middleware = [thunk, appApi.middleware, logger];

// creating the store
const store = configureStore({
    reducer: persistedReducer,
    middleware: middleware,
});

export default store;
