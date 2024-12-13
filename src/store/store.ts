import { configureStore } from "@reduxjs/toolkit";
import { api } from "../api/api";
import { groupSlice } from "../slices/groupSlice";
const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        [groupSlice.name]: groupSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export default store;   
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


