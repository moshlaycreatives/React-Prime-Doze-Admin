import { createSlice } from "@reduxjs/toolkit";
import {
    DOCTOR_APPOINTMENT_TABS,
    DOCTOR_PROFILE_APPOINTMENTS,
    DOCTOR_PROFILE_CLINICS,
    DOCTOR_PROFILE_DOCUMENTS,
    DOCTOR_PROFILE_INFO,
    DOCTOR_PROFILE_STATS,
} from "../data/doctorProfileData.js";

const initialState = {
    stats: DOCTOR_PROFILE_STATS,
    info: DOCTOR_PROFILE_INFO,
    documents: DOCTOR_PROFILE_DOCUMENTS,
    clinics: DOCTOR_PROFILE_CLINICS,
    appointments: DOCTOR_PROFILE_APPOINTMENTS,
    tabs: DOCTOR_APPOINTMENT_TABS,
};

const doctorProfileSlice = createSlice({
    name: "doctorProfile",
    initialState,
    reducers: {
        setDoctorProfileInfo(state, action) {
            state.info = action.payload;
        },
        setDoctorProfileAppointments(state, action) {
            state.appointments = action.payload;
        },
    },
});

export const { setDoctorProfileInfo, setDoctorProfileAppointments } =
    doctorProfileSlice.actions;

export default doctorProfileSlice.reducer;
