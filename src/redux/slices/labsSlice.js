import { createSlice } from "@reduxjs/toolkit";
import { LABS_DATA } from "../data/labsData.js";

const initialState = {
    items: LABS_DATA,
};

const labsSlice = createSlice({
    name: "labs",
    initialState,
    reducers: {
        setLabs(state, action) {
            state.items = action.payload;
        },
        addLab(state, action) {
            state.items.unshift(action.payload);
        },
        updateLab(state, action) {
            const index = state.items.findIndex((item) => item.id === action.payload.id);
            if (index !== -1) {
                state.items[index] = { ...state.items[index], ...action.payload };
            }
        },
        removeLab(state, action) {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
    },
});

export const { setLabs, addLab, updateLab, removeLab } = labsSlice.actions;

export default labsSlice.reducer;
