import { createSlice } from "@reduxjs/toolkit";
import {
    PHARMACY_ORDER_TABS,
    PHARMACY_PROFILE_IMAGES,
    PHARMACY_PROFILE_INFO,
    PHARMACY_PROFILE_ORDERS,
    PHARMACY_PROFILE_STATS,
} from "../data/pharmacyProfileData.js";

const initialState = {
    stats: PHARMACY_PROFILE_STATS,
    info: PHARMACY_PROFILE_INFO,
    images: PHARMACY_PROFILE_IMAGES,
    orders: PHARMACY_PROFILE_ORDERS,
    tabs: PHARMACY_ORDER_TABS,
};

const pharmacyProfileSlice = createSlice({
    name: "pharmacyProfile",
    initialState,
    reducers: {
        setPharmacyProfileInfo(state, action) {
            state.info = action.payload;
        },
        setPharmacyProfileOrders(state, action) {
            state.orders = action.payload;
        },
    },
});

export const { setPharmacyProfileInfo, setPharmacyProfileOrders } =
    pharmacyProfileSlice.actions;

export default pharmacyProfileSlice.reducer;
