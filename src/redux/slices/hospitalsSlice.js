import { createSlice } from "@reduxjs/toolkit";
import { HOSPITALS_DATA } from "../data/hospitalsData.js";

const initialState = {
    items: HOSPITALS_DATA,
};

const hospitalsSlice = createSlice({
    name: "hospitals",
    initialState,
    reducers: {
        setHospitals(state, action) {
            state.items = action.payload;
        },
        addHospital(state, action) {
            state.items.unshift(action.payload);
        },
        updateHospital(state, action) {
            const index = state.items.findIndex((item) => item.id === action.payload.id);
            if (index !== -1) {
                state.items[index] = { ...state.items[index], ...action.payload };
            }
        },
        removeHospital(state, action) {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
    },
});

export const { setHospitals, addHospital, updateHospital, removeHospital } =
    hospitalsSlice.actions;

export default hospitalsSlice.reducer;
