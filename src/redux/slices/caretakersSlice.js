import { createSlice } from "@reduxjs/toolkit";
import { CARETAKERS_DATA, CARETAKERS_TOTAL_COUNT } from "../data/caretakersData.js";

const initialState = {
    items: CARETAKERS_DATA,
    totalCount: CARETAKERS_TOTAL_COUNT,
};

const caretakersSlice = createSlice({
    name: "caretakers",
    initialState,
    reducers: {
        setCaretakers(state, action) {
            state.items = action.payload;
        },
        setCaretakersTotalCount(state, action) {
            state.totalCount = action.payload;
        },
        addCaretaker(state, action) {
            state.items.unshift(action.payload);
        },
        updateCaretaker(state, action) {
            const index = state.items.findIndex((item) => item.id === action.payload.id);
            if (index !== -1) {
                state.items[index] = { ...state.items[index], ...action.payload };
            }
        },
        removeCaretaker(state, action) {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
    },
});

export const {
    setCaretakers,
    setCaretakersTotalCount,
    addCaretaker,
    updateCaretaker,
    removeCaretaker,
} = caretakersSlice.actions;

export default caretakersSlice.reducer;
