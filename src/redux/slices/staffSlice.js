import { createSlice } from "@reduxjs/toolkit";
import { COUNTRY_FLAG_MAP, STAFF_DATA } from "../data/staffData.js";

const initialState = {
    items: STAFF_DATA,
};

const staffSlice = createSlice({
    name: "staff",
    initialState,
    reducers: {
        setStaff(state, action) {
            state.items = action.payload;
        },
        addStaff(state, action) {
            const { Name, Mail, Country } = action.payload;
            const nextId = String(
                state.items.reduce((max, item) => Math.max(max, Number(item.id)), 0) + 1
            );

            state.items.push({
                id: nextId,
                Name,
                Mail,
                Country,
                Image: COUNTRY_FLAG_MAP[Country] || "",
            });
        },
        updateStaff(state, action) {
            const { id, Name, Mail, Country } = action.payload;
            const index = state.items.findIndex((item) => item.id === id);

            if (index !== -1) {
                state.items[index] = {
                    ...state.items[index],
                    Name,
                    Mail,
                    Country,
                    Image: COUNTRY_FLAG_MAP[Country] || state.items[index].Image,
                };
            }
        },
        removeStaff(state, action) {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
    },
});

export const { setStaff, addStaff, updateStaff, removeStaff } = staffSlice.actions;

export default staffSlice.reducer;
