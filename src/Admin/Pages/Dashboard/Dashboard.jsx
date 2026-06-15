import { useState } from "react";
import dayjs from "dayjs";
import { Box, Grid, Typography } from "@mui/material";
import MonitorHeartOutlinedIcon from "@mui/icons-material/MonitorHeartOutlined";
import MedicalServicesOutlinedIcon from "@mui/icons-material/MedicalServicesOutlined";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import MedicationOutlinedIcon from "@mui/icons-material/MedicationOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { fontFamily } from "../../../theme/responsiveTypography";
import DateRangePickerPill from "../../../SharedComponent/DateRangePickerPill";
import CountryAnalytics from "./CountryAnalytics";
import RevenueAnalytics from "./RevenueAnalytics";
import CountryWiseUsers from "./CountryWiseUsers";
import RevenueBreakdown from "./RevenueBreakdown";
import UserGrowthAnalytics from "./UserGrowthAnalytics";
import PrimeStoreRevenueAnalytics from "./PrimeStoreRevenueAnalytics";
import DoctorDocumentVerification from "./DoctorDocumentVerification";
import PrimeStoreOrders from "./PrimeStoreOrders";
import ProviderOrdersAnalytics from "./ProviderOrdersAnalytics";
import SubscriptionByType from "./SubscriptionByType";



const cardHeightSx = {
    xs: 105,
    sm: 125,
    md: 120,
};

const statCards = [
    {
        title: "Total Patients",
        value: "874,478",
        trend: 12.5,
        icon: MonitorHeartOutlinedIcon,
        iconBg: "#EBF3FF",
        iconColor: "#3B82F6",
    },
    {
        title: "Total Doctors",
        value: "15,247",
        trend: 11.8,
        icon: MedicalServicesOutlinedIcon,
        iconBg: "#E8F8EF",
        iconColor: "#22C55E",
    },
    {
        title: "Total Hospitals",
        value: "1,254",
        trend: -2.5,
        icon: LocalHospitalOutlinedIcon,
        iconBg: "#FFF4E8",
        iconColor: "#F97316",
    },
    {
        title: "Total Labs",
        value: "658",
        trend: 6.3,
        icon: ScienceOutlinedIcon,
        iconBg: "#FEECEC",
        iconColor: "#EF4444",
    },
    {
        title: "Total Pharmacies",
        value: "2,156",
        trend: -7.5,
        icon: MedicationOutlinedIcon,
        iconBg: "#F3EEFF",
        iconColor: "#8B5CF6",
    },
    {
        title: "Total Optical Stores",
        value: "452",
        trend: 4.5,
        icon: RemoveRedEyeOutlinedIcon,
        iconBg: "#E8FAFD",
        iconColor: "#06B6D4",
    },
];

const StatCard = ({ title, value, trend, icon: Icon, iconBg, iconColor }) => {
    const isPositive = trend >= 0;
    const trendColor = isPositive ? "#22C55E" : "#EF4444";
    const arrow = isPositive ? "↑" : "↓";

    return (
        <Box
            sx={{
                width: "100%",
                height: cardHeightSx,
                backgroundColor: "#FFFFFF",
                borderRadius: "12px",
                p: { xs: 1, sm: 1.5, md: 2 },
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", sm: "stretch" },
                justifyContent: { xs: "center", sm: "space-between" },
                textAlign: { xs: "center", sm: "left" },
                boxSizing: "border-box",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    alignItems: { xs: "center", sm: "flex-start" },
                    gap: { xs: 0.5, sm: 1 },
                    width: "100%",
                }}
            >
                <Box
                    sx={{
                        width: { xs: 30, sm: 32, md: 40 },
                        height: { xs: 30, sm: 32, md: 40 },
                        borderRadius: "10px",
                        backgroundColor: iconBg,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                    }}
                >
                    <Icon sx={{ fontSize: { xs: 15, sm: 16, md: 20 }, color: iconColor }} />
                </Box>
                <Box sx={{ minWidth: 0, flex: { sm: 1 } }}>
                    <Typography
                        sx={{
                            fontFamily,
                            fontSize: { xs: "10px", sm: "11px", md: "14px" },
                            fontWeight: 500,
                            color: "#2F2F2F",
                            lineHeight: 1.3,
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            mt: "3px"
                        }}
                    >
                        {title}
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily,
                            fontSize: { xs: "15px", sm: "18px", md: "22px" },
                            fontWeight: 700,
                            color: "#2F2F2F",
                            lineHeight: 1.2,
                            mt: "6px",
                        }}
                    >
                        {value}
                    </Typography>
                </Box>
            </Box>

            <Typography
                sx={{
                    fontFamily,
                    fontSize: { xs: "9px", sm: "10px", md: "12px" },
                    fontWeight: 400,
                    lineHeight: 1.3,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    width: "100%",
                }}
            >
                <Box component="span" sx={{ color: trendColor, fontWeight: 500 }}>
                    {arrow} {Math.abs(trend)}%
                </Box>
                <Box component="span" sx={{ color: "#7C7C7C", ml: 0.5 }}>
                    from last 7 days
                </Box>
            </Typography>
        </Box>
    );
};

const Dashboard = () => {
    const displayName = localStorage.getItem("UserName") || "Shyamal";
    const [startDate, setStartDate] = useState(dayjs("2026-05-15"));
    const [endDate, setEndDate] = useState(dayjs("2026-06-15"));

    return (
        <>
            <Box>
                <Grid
                    container
                    spacing={{ xs: 2, md: 2.5 }}
                    sx={{ mb: { xs: 2, md: 3 }, alignItems: { md: "center" } }}
                >
                    <Grid size={{ xs: 12, md: "grow" }}>
                        <Typography
                            sx={{
                                fontFamily,
                                fontSize: { xs: "20px", sm: "22px", md: "24px" },
                                fontWeight: 600,
                                color: "#2F2F2F",
                                lineHeight: 1.3,
                            }}
                        >
                            Welcome back, {displayName} 👋
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily,
                                fontSize: { xs: "14px", md: "18px" },
                                fontWeight: 400,
                                color: "#7C7C7C",
                                mt: 0.5,
                                lineHeight: 1.4,
                            }}
                        >
                            Here&apos;s what&apos;s happening on your platform today.
                        </Typography>
                    </Grid>

                    <Grid
                        size={{ xs: 12, md: "auto" }}
                        sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                        }}
                    >
                        <DateRangePickerPill
                            startDate={startDate}
                            endDate={endDate}
                            onChange={({ start, end }) => {
                                setStartDate(start);
                                setEndDate(end);
                            }}
                            sx={{
                                gap: 1.25,
                                px: 1.5,
                                py: 0.75,
                                flexShrink: 0,
                            }}
                        />
                    </Grid>
                </Grid>

                <Grid container spacing={{ xs: 1, sm: 1.5, md: 1.5 }}>
                    {statCards.map((stat) => (
                        <Grid
                            key={stat.title}
                            size={{ xs: 6, sm: 6, md: 4, lg: 2 }}
                        >
                            <StatCard {...stat} />
                        </Grid>
                    ))}
                </Grid>
            </Box>


            <Box sx={{ mt: "12px" }}>
                <Grid container spacing={{ xs: 1, sm: 1.5, md: 1.5 }} >
                    <Grid item size={{ xs: 12, md: 6 }}>
                        <RevenueAnalytics />
                    </Grid>
                    <Grid item size={{ xs: 12, md: 6 }}>
                        <CountryAnalytics />
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ mt: "12px" }}>
                <Grid container spacing={{ xs: 1, sm: 1.5, md: 1.5 }}>
                    <Grid item size={{ xs: 12, md: 3 }}>
                        <RevenueBreakdown />
                    </Grid>
                    <Grid item size={{ xs: 12, md: 6 }}>
                        <UserGrowthAnalytics />
                    </Grid>
                    <Grid item size={{ xs: 12, md: 3 }}>
                        <CountryWiseUsers />
                    </Grid>

                </Grid>
            </Box>
            <Box sx={{ mt: "12px" }}>
                <Grid
                    container
                    spacing={{ xs: 1, sm: 1.5, md: 1.5 }}
                    sx={{ alignItems: "stretch" }}
                >
                    <Grid item size={{ xs: 12, md: 6 }} sx={{ display: "flex" }}>
                        <PrimeStoreRevenueAnalytics />
                    </Grid>
                    <Grid item size={{ xs: 12, md: 3 }} sx={{ display: "flex" }}>
                        <DoctorDocumentVerification />
                    </Grid>
                    <Grid item size={{ xs: 12, md: 3 }} sx={{ display: "flex" }}>
                        <PrimeStoreOrders />
                    </Grid>

                </Grid>
            </Box>
            <Box sx={{ mt: "12px" }}>
                <Grid container spacing={{ xs: 1, sm: 1.5, md: 1.5 }}>
                    <Grid item size={{ xs: 12, md: 3 }}>
                        <SubscriptionByType />
                    </Grid>
                    <Grid item size={{ xs: 12, md: 3 }}>
                        Recent Activity
                    </Grid>
                    <Grid item size={{ xs: 12, md: 6 }}>
                        <ProviderOrdersAnalytics />
                    </Grid>

                </Grid>
            </Box>

        </>
    );
};

export default Dashboard;
