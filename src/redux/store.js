import { configureStore } from "@reduxjs/toolkit";
import doctorProfileReducer from "./slices/doctorProfileSlice.js";
import doctorsReducer from "./slices/doctorsSlice.js";
import hospitalsReducer from "./slices/hospitalsSlice.js";
import labProfileReducer from "./slices/labProfileSlice.js";
import labsReducer from "./slices/labsSlice.js";
import opticalStoresReducer from "./slices/opticalStoresSlice.js";
import opticalStoreProfileReducer from "./slices/opticalStoreProfileSlice.js";
import pharmaciesReducer from "./slices/pharmaciesSlice.js";
import pharmacyProfileReducer from "./slices/pharmacyProfileSlice.js";
import patientsReducer from "./slices/patientsSlice.js";
import patientProfileReducer from "./slices/patientProfileSlice.js";
import staffReducer from "./slices/staffSlice.js";
import caretakersReducer from "./slices/caretakersSlice.js";

export const store = configureStore({
    reducer: {
        doctorProfile: doctorProfileReducer,
        doctors: doctorsReducer,
        hospitals: hospitalsReducer,
        labProfile: labProfileReducer,
        labs: labsReducer,
        opticalStores: opticalStoresReducer,
        opticalStoreProfile: opticalStoreProfileReducer,
        patients: patientsReducer,
        patientProfile: patientProfileReducer,
        pharmacies: pharmaciesReducer,
        pharmacyProfile: pharmacyProfileReducer,
        staff: staffReducer,
        caretakers: caretakersReducer,
    },
});
