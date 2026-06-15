import { createSlice } from "@reduxjs/toolkit";
import { OPTICAL_STORES_DATA } from "../data/opticalStoresData.js";

const initialState = {
    items: OPTICAL_STORES_DATA,
};

const opticalStoresSlice = createSlice({
    name: "opticalStores",
    initialState,
    reducers: {
        setOpticalStores(state, action) {
            state.items = action.payload;
        },
        addOpticalStore(state, action) {
            state.items.unshift(action.payload);
        },
        updateOpticalStore(state, action) {
            const index = state.items.findIndex((item) => item.id === action.payload.id);
            if (index !== -1) {
                state.items[index] = { ...state.items[index], ...action.payload };
            }
        },
        removeOpticalStore(state, action) {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
    },
});

export const { setOpticalStores, addOpticalStore, updateOpticalStore, removeOpticalStore } =
    opticalStoresSlice.actions;

export default opticalStoresSlice.reducer;
