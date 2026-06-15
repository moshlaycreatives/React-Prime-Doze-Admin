import { createSlice } from "@reduxjs/toolkit";
import { PHARMACIES_DATA } from "../data/pharmaciesData.js";

const initialState = {
    items: PHARMACIES_DATA,
};

const pharmaciesSlice = createSlice({
    name: "pharmacies",
    initialState,
    reducers: {
        setPharmacies(state, action) {
            state.items = action.payload;
        },
        addPharmacy(state, action) {
            state.items.unshift(action.payload);
        },
        updatePharmacy(state, action) {
            const index = state.items.findIndex((item) => item.id === action.payload.id);
            if (index !== -1) {
                state.items[index] = { ...state.items[index], ...action.payload };
            }
        },
        removePharmacy(state, action) {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
    },
});

export const { setPharmacies, addPharmacy, updatePharmacy, removePharmacy } =
    pharmaciesSlice.actions;

export default pharmaciesSlice.reducer;
