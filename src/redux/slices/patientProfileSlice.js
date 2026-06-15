import { createSlice } from "@reduxjs/toolkit";
import {
    PATIENT_PROFILE_APPOINTMENTS,
    PATIENT_PROFILE_CARETAKERS,
    PATIENT_PROFILE_INFO,
    PATIENT_PROFILE_LAB_ORDERS,
    PATIENT_PROFILE_OPTICAL_ORDERS,
    PATIENT_PROFILE_PHARMACY_ORDERS,
    PATIENT_PROFILE_PRIME_STORE_ORDERS,
    PATIENT_PROFILE_STATS,
    PATIENT_PROFILE_TABS,
} from "../data/patientProfileData.js";

const initialState = {
    stats: PATIENT_PROFILE_STATS,
    info: PATIENT_PROFILE_INFO,
    appointments: PATIENT_PROFILE_APPOINTMENTS,
    pharmacyOrders: PATIENT_PROFILE_PHARMACY_ORDERS,
    labOrders: PATIENT_PROFILE_LAB_ORDERS,
    opticalOrders: PATIENT_PROFILE_OPTICAL_ORDERS,
    primeStoreOrders: PATIENT_PROFILE_PRIME_STORE_ORDERS,
    caretakers: PATIENT_PROFILE_CARETAKERS,
    tabs: PATIENT_PROFILE_TABS,
};

const patientProfileSlice = createSlice({
    name: "patientProfile",
    initialState,
    reducers: {
        setPatientProfileInfo(state, action) {
            state.info = action.payload;
        },
    },
});

export const { setPatientProfileInfo } = patientProfileSlice.actions;

export default patientProfileSlice.reducer;
