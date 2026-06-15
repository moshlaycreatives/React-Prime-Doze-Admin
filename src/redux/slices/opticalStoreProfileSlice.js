import { createSlice } from "@reduxjs/toolkit";
import {
    OPTICAL_STORE_ORDER_TABS,
    OPTICAL_STORE_PROFILE_IMAGES,
    OPTICAL_STORE_PROFILE_INFO,
    OPTICAL_STORE_PROFILE_ORDERS,
    OPTICAL_STORE_PROFILE_STATS,
} from "../data/opticalStoreProfileData.js";

const initialState = {
    stats: OPTICAL_STORE_PROFILE_STATS,
    info: OPTICAL_STORE_PROFILE_INFO,
    images: OPTICAL_STORE_PROFILE_IMAGES,
    orders: OPTICAL_STORE_PROFILE_ORDERS,
    tabs: OPTICAL_STORE_ORDER_TABS,
};

const opticalStoreProfileSlice = createSlice({
    name: "opticalStoreProfile",
    initialState,
    reducers: {
        setOpticalStoreProfileInfo(state, action) {
            state.info = action.payload;
        },
        setOpticalStoreProfileOrders(state, action) {
            state.orders = action.payload;
        },
    },
});

export const { setOpticalStoreProfileInfo, setOpticalStoreProfileOrders } =
    opticalStoreProfileSlice.actions;

export default opticalStoreProfileSlice.reducer;
