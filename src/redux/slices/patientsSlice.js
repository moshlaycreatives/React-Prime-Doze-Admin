import { createSlice } from "@reduxjs/toolkit";
import { PATIENTS_DATA } from "../data/patientsData.js";

const initialState = {
    items: PATIENTS_DATA,
};

const patientsSlice = createSlice({
    name: "patients",
    initialState,
    reducers: {
        setPatients(state, action) {
            state.items = action.payload;
        },
        addPatient(state, action) {
            state.items.unshift(action.payload);
        },
        updatePatient(state, action) {
            const index = state.items.findIndex((item) => item.id === action.payload.id);
            if (index !== -1) {
                state.items[index] = { ...state.items[index], ...action.payload };
            }
        },
        removePatient(state, action) {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
    },
});

export const { setPatients, addPatient, updatePatient, removePatient } = patientsSlice.actions;

export default patientsSlice.reducer;
