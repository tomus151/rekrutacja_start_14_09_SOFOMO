import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchValues: []
};

const historySlice = createSlice({
    name: "historySlice",
    initialState,
    reducers: {
        addHistory(state, { payload }) {
            if (payload?.history)
                state.searchValues.unshift({
                    name: payload.history.name,
                    lat: payload.history.lat,
                    lng: payload.history.lng,
                    ip: payload.history.ip
                });
        }
    }
});

export const { addHistory } = historySlice.actions;

export const selectGetHistory = (state) => state.historySlice;

export default historySlice.reducer;
