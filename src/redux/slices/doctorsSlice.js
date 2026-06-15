import { createSlice } from "@reduxjs/toolkit";
import { DOCTORS_DATA } from "../data/doctorsData.js";

const initialState = {
    items: DOCTORS_DATA,
};

const doctorsSlice = createSlice({
    name: "doctors",
    initialState,
    reducers: {
        setDoctors(state, action) {
            state.items = action.payload;
        },
        addDoctor(state, action) {
            state.items.unshift(action.payload);
        },
        updateDoctor(state, action) {
            const index = state.items.findIndex((item) => item.id === action.payload.id);
            if (index !== -1) {
                state.items[index] = { ...state.items[index], ...action.payload };
            }
        },
        removeDoctor(state, action) {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
    },
});

export const { setDoctors, addDoctor, updateDoctor, removeDoctor } = doctorsSlice.actions;

export default doctorsSlice.reducer;
