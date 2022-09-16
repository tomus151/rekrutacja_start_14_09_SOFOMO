import { configureStore } from "@reduxjs/toolkit";
import IP_API from "../api/ipApi";
import historySlice from "./slices/historySlice";

const store = configureStore({
    reducer: {
        [IP_API.reducerPath]: IP_API.reducer,
        historySlice
    }
});
export default store;
