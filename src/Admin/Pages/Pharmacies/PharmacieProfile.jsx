import { useMemo, useState } from "react";
import dayjs from "dayjs";
import { Box, Grid, Typography } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import ScheduleIcon from "@mui/icons-material/Schedule";
import CancelIcon from "@mui/icons-material/Cancel";
import StarIcon from "@mui/icons-material/Star";
import { fontFamily } from "../../../theme/responsiveTypography";
import DataTable from "../../../SharedComponent/DataTable";
import DateRangePickerPill from "../../../SharedComponent/DateRangePickerPill";
import { useAppSelector } from "../../../redux/hooks.js";
import PharmacyDetails from "./PharmacyDetails";

const pageTitleSx = {
    fontFamily,
    fontWeight: 600,
    fontSize: "30px",
    lineHeight: "31px",
    color: "#2F2F2F",
};

const pageSubtitleSx = {
    color: "#7C7C7C",
    fontSize: "25px",
    fontWeight: 400,
};

const cardSx = {
    backgroundColor: "#FFFFFF",
    borderRadius: "15px",
    border: "1px solid #EFEFEF",
    p: 2,
};

const viewAllSx = {
    fontFamily,
    fontSize: "16px",
    fontWeight: 500,
    color: "#1472FF",
    cursor: "pointer",
    textDecoration: "none",
    "&:hover": {
        textDecoration: "underline",
    },
};

const STATUS_COLORS = {
    "In Progress": "#FF9E7A",
    Pending: "#F59E0B",
    Completed: "#22C55E",
    Cancelled: "#EF4444",
};

const tabButtonSx = (active) => ({
    fontFamily,
    fontSize: "15px",
    fontWeight: 400,
    color: "#7C7C7C",
    border: active ? "1px solid #1472FF" : "1px solid #D9D9D9",
    borderRadius: "999px",
    px: 2.5,
    py: 0.75,
    backgroundColor: "#FFFFFF",
    cursor: "pointer",
    whiteSpace: "nowrap",
    transition: "border-color 0.2s ease, color 0.2s ease",
    "&:hover": {
        borderColor: active ? "#1472FF" : "#BDBDBD",
    },
});

const StatCard = ({ title, value, icon: Icon, iconBg, iconColor }) => (
    <Box
        sx={{
            ...cardSx,
            p: 2,
            minHeight: 100,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
        }}
    >
        <Box
            sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                gap: 1,
            }}
        >
            <Typography
                sx={{
                    fontFamily,
                    fontSize: "17px",
                    fontWeight: 400,
                    color: "#2F2F2F",
                    lineHeight: 1.3,
                    flex: 1,
                    minWidth: 0,
                }}
            >
                {title}
            </Typography>
            <Box
                sx={{
                    width: 40,
                    height: 40,
                    borderRadius: "10px",
                    backgroundColor: iconBg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                }}
            >
                <Icon sx={{ fontSize: 20, color: iconColor }} />
            </Box>
        </Box>
        <Typography
            sx={{
                fontFamily,
                fontSize: "32px",
                fontWeight: 600,
                color: "#2F2F2F",
                lineHeight: 1.1,
                mt: 1.25,
            }}
        >
            {value}
        </Typography>
    </Box>
);

const PharmacieProfile = () => {
    const { stats, info, images, orders, tabs } = useAppSelector(
        (state) => state.pharmacyProfile
    );
    const [activeTab, setActiveTab] = useState("all");
    const [pharmacyDetailsOpen, setPharmacyDetailsOpen] = useState(false);
    const [startDate, setStartDate] = useState(dayjs("2026-05-15"));
    const [endDate, setEndDate] = useState(dayjs("2026-06-15"));

    const statCards = [
        {
            title: "Total Earnings",
            value: stats.totalEarnings,
            icon: AttachMoneyIcon,
            iconBg: "#E8F5E9",
            iconColor: "#22C55E",
        },
        {
            title: "Completed Orders",
            value: stats.completed,
            icon: CheckCircleIcon,
            iconBg: "#E8F5E9",
            iconColor: "#22C55E",
        },
        {
            title: "In Progress Orders",
            value: stats.inProgress,
            icon: HourglassTopIcon,
            iconBg: "#FFF3E0",
            iconColor: "#F59E0B",
        },
        {
            title: "Pending Orders",
            value: stats.pending,
            icon: ScheduleIcon,
            iconBg: "#FFF3E0",
            iconColor: "#F59E0B",
        },
        {
            title: "Cancelled Orders",
            value: stats.cancelled,
            icon: CancelIcon,
            iconBg: "#FFEBEE",
            iconColor: "#EF4444",
        },
    ];

    const filteredOrders = useMemo(() => {
        if (activeTab === "all") return orders;

        const statusMap = {
            completed: "Completed",
            inProgress: "In Progress",
            pending: "Pending",
            cancelled: "Cancelled",
        };

        const status = statusMap[activeTab];
        return orders.filter((row) => row.status === status);
    }, [activeTab, orders]);

    const columns = [
        { id: "id", label: "Id" },
        { id: "patientName", label: "Patient Name" },
        { id: "medicineName", label: "Medicine Name" },
        { id: "phone", label: "Phone" },
        { id: "city", label: "City" },
        { id: "price", label: "Price" },
        {
            id: "status",
            label: "Status",
            render: (row) => (
                <Typography
                    sx={{
                        fontFamily,
                        fontSize: "16px",
                        fontWeight: 500,
                        color: STATUS_COLORS[row.status] || "#2F2F2F",
                    }}
                >
                    {row.status}
                </Typography>
            ),
        },
        { id: "date", label: "Date" },
    ];

    return (
        <Box>
            <PharmacyDetails
                open={pharmacyDetailsOpen}
                onClose={() => setPharmacyDetailsOpen(false)}
                pharmacy={info}
            />

            <Grid
                container
                sx={{ alignItems: "center", justifyContent: "space-between", mb: 2.5 }}
            >
                <Grid size={{ xs: 12, md: "auto" }}>
                    <Typography sx={pageTitleSx}>
                        Dashboard /
                        <Box component="span" sx={pageSubtitleSx}>
                            {" "}
                            Pharmacies /
                        </Box>
                        <Box component="span" sx={pageSubtitleSx}>
                            {" "}
                            Profile
                        </Box>
                    </Typography>
                </Grid>
                <Grid
                    size={{ xs: 12, md: "auto" }}
                    sx={{ display: "flex", justifyContent: { xs: "flex-start", md: "flex-end" } }}
                >
                    <DateRangePickerPill
                        startDate={startDate}
                        endDate={endDate}
                        onChange={({ start, end }) => {
                            setStartDate(start);
                            setEndDate(end);
                        }}
                    />
                </Grid>
            </Grid>

            <Grid container spacing={1} sx={{ mb: 1 }}>
                {statCards.map((stat) => (
                    <Grid key={stat.title} size={{ xs: 12, sm: 6, md: 4, lg: 2.4 }}>
                        <StatCard {...stat} />
                    </Grid>
                ))}
            </Grid>

            <Grid container spacing={1} sx={{ mb: 2 }}>
                <Grid size={{ xs: 12, lg: 6.5 }}>
                    <Box
                        sx={{
                            ...cardSx,
                            height: "100%",
                            display: "flex",
                            flexDirection: { xs: "column", sm: "row" },
                        }}
                    >
                        <Box
                            sx={{
                                flex: { xs: "none", sm: "0 0 34%" },
                                display: "flex",
                                flexDirection: "column",
                                // alignItems: "center",
                                // textAlign: "center",
                                gap: 1.5,
                                pr: { sm: 3 },
                                pb: { xs: 2.5, sm: 0 },
                                mb: { xs: 2.5, sm: 0 },
                                borderRight: { sm: "1px solid #EFEFEF" },
                                borderBottom: { xs: "1px solid #EFEFEF", sm: "none" },
                            }}
                        >
                            <Box
                                component="img"
                                src="/image/medplus.png"
                                alt={info.name}
                                sx={{
                                    width: 130,
                                    height: 130,
                                    borderRadius: "50%",
                                    objectFit: "cover",
                                    border: "1px solid #EFEFEF",
                                }}
                            />
                            <Typography
                                sx={{
                                    fontFamily,
                                    fontSize: "22px",
                                    fontWeight: 600,
                                    color: "#2F2F2F",
                                }}
                            >
                                {info.name}
                            </Typography>
                            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" ,mt:"15px" }}>
                                <Box sx={{ display: "flex", alignItems: "center", gap: 0.75 }}>
                                    <Box
                                        component="img"
                                        src={info.flag}
                                        alt={info.country}
                                        sx={{
                                            width: 20,
                                            height: 20,
                                            borderRadius: "50%",
                                            objectFit: "cover",
                                        }}
                                    />
                                    <Typography
                                        sx={{
                                            fontFamily,
                                            fontSize: "16px",
                                            fontWeight: 400,
                                            color: "#7C7C7C",
                                        }}
                                    >
                                        {info.country}
                                    </Typography>
                                </Box>
                                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                                    <StarIcon sx={{ fontSize: 18, color: "#F5A623" }} />
                                    <Typography
                                        sx={{
                                            fontFamily,
                                            fontSize: "16px",
                                            fontWeight: 500,
                                            color: "#2F2F2F",
                                        }}
                                    >
                                        {info.rating}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>

                        <Box
                            sx={{
                                flex: 1,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                pl: { sm: 3 },
                                minWidth: 0,
                            }}
                        >
                            <Box sx={{ display: "flex", flexDirection: "column", gap: 2.25 }}>
                                {[
                                    { label: "Email", value: info.email },
                                    { label: "Phone", value: info.phone },
                                    { label: "Delivery Fee", value: info.deliveryFee },
                                    { label: "City", value: info.city },
                                ].map((item) => (
                                    <Box
                                        key={item.label}
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            gap: 2,
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontFamily,
                                                fontSize: "16px",
                                                fontWeight: 400,
                                                color: "#7C7C7C",
                                                flexShrink: 0,
                                            }}
                                        >
                                            {item.label}:
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontFamily,
                                                fontSize: "16px",
                                                fontWeight: 500,
                                                color: "#2F2F2F",
                                                textAlign: "right",
                                                minWidth: 0,
                                            }}
                                        >
                                            {item.value}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>

                            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2.5 }}>
                                <Typography
                                    component="span"
                                    sx={viewAllSx}
                                    onClick={() => setPharmacyDetailsOpen(true)}
                                >
                                    View all
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Grid>

                <Grid size={{ xs: 12, lg: 5.5 }}>
                    <Box sx={{ ...cardSx, height: "100%" }}>
                        <Typography
                            sx={{
                                fontFamily,
                                fontSize: "20px",
                                fontWeight: 600,
                                color: "#2F2F2F",
                                mb: 1,
                            }}
                        >
                            Store Images
                        </Typography>
                        <Box
                            sx={{
                                display: "grid",
                                gridTemplateColumns: "repeat(4, 1fr)",
                                gap: 1,
                            }}
                        >
                            {images.map((src, index) => (
                                <Box
                                    key={index}
                                    component="img"
                                    src={src}
                                    alt={`Store ${index + 1}`}
                                    sx={{
                                        width: "100%",
                                        aspectRatio: "4/3",
                                        borderRadius: "8px",
                                        objectFit: "cover",
                                    }}
                                />
                            ))}
                        </Box>
                    </Box>
                </Grid>
            </Grid>

            <Box>
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 1.5,
                        mb: 2,
                    }}
                >
                    {tabs.map((tab) => (
                        <Box
                            key={tab.value}
                            component="button"
                            onClick={() => setActiveTab(tab.value)}
                            sx={tabButtonSx(activeTab === tab.value)}
                        >
                            {tab.label}{" "}
                            <span
                                style={{
                                    fontSize: "18px",
                                    fontWeight: 600,
                                    color: "#2F2F2F",
                                    marginLeft: "10px",
                                }}
                            >
                                {tab.count}
                            </span>
                        </Box>
                    ))}
                </Box>

                <DataTable
                    columns={columns}
                    rows={filteredOrders}
                    getRowId={(row) => row.id}
                    emptyMessage="No Orders Available"
                    minWidth="85rem"
                    defaultRowsPerPage={5}
                    rowsPerPageOptions={[5, 10, 25]}
                />
            </Box>
        </Box>
    );
};

export default PharmacieProfile;
