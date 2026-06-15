import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Nav from "./Nav";
import menuData from "./menuData";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Staff from "../Pages/Staff/Staff";
import Patients from "../Pages/Patients/Patients";
import Doctors from "../Pages/Doctors/Doctors";
import Hospital from "../Pages/Hospitals/Hospitals";
import Labs from "../Pages/Labs/Labs";
import Pharmacies from "../Pages/Pharmacies/Pharmacies";
import OpticalStores from "../Pages/OpticalStores/OpticalStores";
import Caretakers from "../Pages/Caretakers/Caretakers";
import Earnings from "../Pages/Earnings/Earnings";
import PrimeStore from "../Pages/PrimeStore/PrimeStore";
import OrderHistory from "../Pages/OrderHistory/OrderHistory";
import Specialties from "../Pages/Specialties/Specialties";
import Subscriptions from "../Pages/Subscriptions/Subscriptions";
import SubscriptionHistory from "../Pages/SubscriptionHistory/SubscriptionHistory";
import HealthLibrary from "../Pages/HealthLibrary/HealthLibrary";
import HospitalProfile from "../Pages/Hospitals/HospitalProfile";
import PharmacieProfile from "../Pages/Pharmacies/PharmacieProfile";
import OpticalStoreProfile from "../Pages/OpticalStores/OpticalStoreProfile";
import LabProfile from "../Pages/Labs/LabProfile";
import DoctorProfile from "../Pages/Doctors/DoctorProfile";
import PatientProfile from "../Pages/Patients/PatientProfile";
import DoctorReview from "../Pages/Doctors/DoctorReview";





const Root = styled(Box)(() => ({
    backgroundColor: "#F5F5F5",
    flexGrow: 1,
    height: "100vh",
    overflowY: "auto",
    boxSizing: "border-box",
    // Keep top spacing smooth across screen sizes instead of abrupt breakpoint jumps.
    paddingTop: "clamp(95px, 11vh, 120px)",
    paddingRight: "clamp(15px, 2.5vw, 30px)",
    paddingBottom: "clamp(15px, 2.5vw, 30px)",
    paddingLeft: "clamp(15px, 2.5vw, 25px)",
}));



const AdminPortal = () => {
    return (
        <Box sx={{ display: "flex" }}>
            <Nav menuData={menuData} />
            <Root component="main">
                <Routes>
                    <Route path="" element={<Dashboard />} />
                    <Route path="staff" element={<Staff />} />
                    <Route path="patients" element={<Patients />} />
                    <Route path="doctors" element={<Doctors />} />
                    <Route path="hospitals" element={<Hospital />} />
                    <Route path="labs" element={<Labs />} />
                    <Route path="pharmacies" element={<Pharmacies />} />
                    <Route path="optical-stores" element={<OpticalStores />} />
                    <Route path="caretakers" element={<Caretakers />} />
                    <Route path="earnings" element={<Earnings />} />
                    <Route path="prime-store" element={<PrimeStore />} />
                    <Route path="order-history" element={<OrderHistory />} />
                    <Route path="specialties" element={<Specialties />} />
                    <Route path="subscriptions" element={<Subscriptions />} />
                    <Route path="subscription-history" element={<SubscriptionHistory />} />
                    <Route path="health-library" element={<HealthLibrary />} />
                    <Route path="hospitals-profile" element={<HospitalProfile />} />
                    <Route path="pharmacies-profile" element={<PharmacieProfile />} />
                    <Route path="optical-stores-profile" element={<OpticalStoreProfile />} />
                    <Route path="labs-profile" element={<LabProfile />} />
                    <Route path="doctors-profile" element={<DoctorProfile />} />
                    <Route path="patient-profile" element={<PatientProfile />} />
                    <Route path="doctor-review" element={<DoctorReview />} />
                </Routes>
            </Root>
        </Box>
    );
};

export default AdminPortal;