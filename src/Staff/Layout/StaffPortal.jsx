import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Nav from "./Nav";
import menuData from "./menuData";
import StaffDashboard from "../Pages/StaffDashboard/StaffDashboard";
import  Doctors from "../Pages/Doctors/Doctors";




const Root = styled(Box)(() => ({
    backgroundColor: "#F5F5F5",
    flexGrow: 1,
    height: "100vh",
    overflowY: "auto",
    boxSizing: "border-box",
    // Keep top spacing smooth across screen sizes instead of abrupt breakpoint jumps.
    paddingTop: "clamp(100px, 11vh, 120px)",
    paddingRight: "clamp(15px, 2.5vw, 30px)",
    paddingBottom: "clamp(15px, 2.5vw, 30px)",
    paddingLeft: "clamp(15px, 2.5vw, 25px)",
}));



const StaffPortal = () => {
    return (
        <Box sx={{ display: "flex" }}>
            <Nav menuData={menuData} />
            <Root component="main">
                <Routes>
                    <Route path="" element={<StaffDashboard />} />
                    <Route path="doctors" element={<Doctors />} />

                </Routes>
            </Root>
        </Box>
    );
};

export default StaffPortal;