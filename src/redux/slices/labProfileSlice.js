import { createSlice } from "@reduxjs/toolkit";
import {
    LAB_PROFILE_ALL_TESTS,
    LAB_PROFILE_IMAGES,
    LAB_PROFILE_INFO,
    LAB_PROFILE_REQUESTS,
    LAB_PROFILE_STATS,
    LAB_PROFILE_TESTS,
    LAB_REQUEST_TABS,
} from "../data/labProfileData.js";

const initialState = {
    stats: LAB_PROFILE_STATS,
    info: LAB_PROFILE_INFO,
    images: LAB_PROFILE_IMAGES,
    tests: LAB_PROFILE_TESTS,
    allTests: LAB_PROFILE_ALL_TESTS,
    requests: LAB_PROFILE_REQUESTS,
    tabs: LAB_REQUEST_TABS,
};

const labProfileSlice = createSlice({
    name: "labProfile",
    initialState,
    reducers: {
        setLabProfileInfo(state, action) {
            state.info = action.payload;
        },
        setLabProfileRequests(state, action) {
            state.requests = action.payload;
        },
    },
});

export const { setLabProfileInfo, setLabProfileRequests } = labProfileSlice.actions;

export default labProfileSlice.reducer;
