import { useMemo, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import MedicationOutlinedIcon from "@mui/icons-material/MedicationOutlined";
import BiotechIcon from "@mui/icons-material/Biotech";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import { fontFamily } from "../../../theme/responsiveTypography";
import DataTable from "../../../SharedComponent/DataTable";
import { useAppSelector } from "../../../redux/hooks.js";

const pageTitleSx = {
    fontFamily,
    fontWeight: 600,
    fontSize: "30px",
    lineHeight: "31px",
    color: "#2F2F2F",
    mb: 2.5,
};

const pageSubtitleSx = {
    color: "#7C7C7C",
    fontSize: "25px",
    fontWeight: 400,
};
const pageSubtitleS = {
    color: "#2F2F2F",
    fontSize: "25px",
    fontWeight: 500,
};

const cardSx = {
    backgroundColor: "#FFFFFF",
    borderRadius: "15px",
    border: "1px solid #EFEFEF",
    p: 2,
};

const APPOINTMENT_STATUS_COLORS = {
    Upcoming: "#F59E0B",
    Complete: "#22C55E",
    Cancelled: "#EF4444",
};

const ORDER_STATUS_COLORS = {
    Pending: "#F59E0B",
    "In Progress": "#FF9E7A",
    Complete: "#22C55E",
    Completed: "#22C55E",
    Cancelled: "#EF4444",
    Shipped: "#1472FF",
    Active: "#22C55E",
};

const tabButtonSx = (active) => ({
    fontFamily,
    fontSize: { xs: "13px", sm: "15px" },
    fontWeight: 400,
    color: "#7C7C7C",
    border: active ? "1px solid #1472FF" : "1px solid #D9D9D9",
    borderRadius: "999px",
    px: { xs: 1.5, sm: 2.5 },
    py: { xs: 1, sm: 0.75 },
    backgroundColor: "#FFFFFF",
    cursor: "pointer",
    whiteSpace: { xs: "normal", sm: "nowrap" },
    transition: "border-color 0.2s ease, color 0.2s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: { xs: "wrap", sm: "nowrap" },
    textAlign: "center",
    lineHeight: 1.3,
    gap: { xs: 0.25, sm: 0 },
    boxSizing: "border-box",
    flex: { xs: "1 1 calc(50% - 6px)", sm: "0 0 auto" },
    minWidth: { xs: 0, sm: "auto" },
    "&:hover": {
        borderColor: active ? "#1472FF" : "#BDBDBD",
    },
});

const spendStatCardSx = {
    backgroundColor: "#FFFFFF",
    borderRadius: "12px",
    border: "1px solid #EFEFEF",
    p: 1,
    minHeight: 90,
    height: "100%",
    display: "flex",
    alignItems: "center",
    gap: 1,
    overflow: "hidden",
    minWidth: 0,
};

const SpendStatCard = ({ title, value, icon: Icon, iconBg, iconColor }) => (
    <Box sx={spendStatCardSx}>
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
            <Icon sx={{ fontSize: 22, color: iconColor }} />
        </Box>
        <Box sx={{ flex: 1, minWidth: 0, overflow: "hidden" }}>
            <Typography
                sx={{
                    fontFamily,
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "#2F2F2F",
                    lineHeight: 1.3,
                    mb: 1,
                    wordBreak: "break-word",
                    overflowWrap: "break-word",
                }}
            >
                {title}
            </Typography>
            <Typography
                sx={{
                    fontFamily,
                    fontSize: "22px",
                    fontWeight: 700,
                    color: "#2F2F2F",
                    lineHeight: 1.1,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                }}
            >
                {value}
            </Typography>
        </Box>
    </Box>
);

const TAB_COLUMNS = {
    appointments: [
        { id: "id", label: "Id" },
        { id: "doctorName", label: "Doctor Name" },
        { id: "specialty", label: "Specialty" },
        { id: "fee", label: "Fee" },
        { id: "city", label: "City" },
        { id: "hospital", label: "Hospital" },
        {
            id: "status",
            label: "Status",
            render: (row) => (
                <Typography
                    sx={{
                        fontFamily,
                        fontSize: "16px",
                        fontWeight: 500,
                        color: APPOINTMENT_STATUS_COLORS[row.status] || "#2F2F2F",
                    }}
                >
                    {row.status}
                </Typography>
            ),
        },
        { id: "date", label: "Date" },
    ],
    pharmacy: [
        { id: "id", label: "Id" },
        { id: "pharmacyName", label: "Pharmacy Name" },
        { id: "amount", label: "Amount" },
        { id: "city", label: "City" },
        {
            id: "status",
            label: "Status",
            render: (row) => (
                <Typography
                    sx={{
                        fontFamily,
                        fontSize: "16px",
                        fontWeight: 500,
                        color: ORDER_STATUS_COLORS[row.status] || "#2F2F2F",
                    }}
                >
                    {row.status}
                </Typography>
            ),
        },
        { id: "date", label: "Date" },
    ],
    lab: [
        { id: "id", label: "Id" },
        { id: "labName", label: "Lab Name" },
        { id: "amount", label: "Amount" },
        { id: "city", label: "City" },
        {
            id: "status",
            label: "Status",
            render: (row) => (
                <Typography
                    sx={{
                        fontFamily,
                        fontSize: "16px",
                        fontWeight: 500,
                        color: ORDER_STATUS_COLORS[row.status] || "#2F2F2F",
                    }}
                >
                    {row.status}
                </Typography>
            ),
        },
        { id: "date", label: "Date" },
    ],
    optical: [
        { id: "id", label: "Id" },
        { id: "opticalStoreName", label: "Optical Store Name" },
        { id: "amount", label: "Amount" },
        { id: "city", label: "City" },
        {
            id: "status",
            label: "Status",
            render: (row) => (
                <Typography
                    sx={{
                        fontFamily,
                        fontSize: "16px",
                        fontWeight: 500,
                        color: ORDER_STATUS_COLORS[row.status] || "#2F2F2F",
                    }}
                >
                    {row.status}
                </Typography>
            ),
        },
        { id: "date", label: "Date" },
    ],
    primeStore: [
        { id: "id", label: "Id" },
        { id: "name", label: "Name" },
        { id: "productName", label: "Product Name" },
        { id: "phone", label: "Phone" },
        { id: "price", label: "Price" },
        { id: "city", label: "City" },
        { id: "address", label: "Address" },
        { id: "date", label: "Date" },
    ],
    caretakers: [
        { id: "id", label: "Id" },
        { id: "name", label: "Name" },
        { id: "email", label: "Email" },
        { id: "phone", label: "Phone" },
        { id: "city", label: "City" },
        { id: "date", label: "Date" },
    ],
};

const PatientProfile = () => {
    const {
        stats,
        info,
        appointments,
        pharmacyOrders,
        labOrders,
        opticalOrders,
        primeStoreOrders,
        caretakers,
        tabs,
    } = useAppSelector((state) => state.patientProfile);
    const [activeTab, setActiveTab] = useState("appointments");

    const statCards = [
        {
            title: "Appointment Spend",
            value: stats.appointmentSpend,
            icon: PersonOutlinedIcon,
            iconBg: "#E8F5E9",
            iconColor: "#22C55E",
        },
        {
            title: "Pharmacy Spend",
            value: stats.pharmacySpend,
            icon: MedicationOutlinedIcon,
            iconBg: "#FCE4EC",
            iconColor: "#D946A8",
        },
        {
            title: "Lab Spend",
            value: stats.labSpend,
            icon: BiotechIcon,
            iconBg: "#FFEBEE",
            iconColor: "#EF4444",
        },
        {
            title: "Optical Store Spend",
            value: stats.opticalStoreSpend,
            icon: VisibilityOutlinedIcon,
            iconBg: "#E0F7FA",
            iconColor: "#06B6D4",
        },
        {
            title: "Prime Store Spend",
            value: stats.primeStoreSpend,
            icon: StorefrontOutlinedIcon,
            iconBg: "#E3F2FD",
            iconColor: "#1472FF",
        },
    ];

    const tabRows = useMemo(() => {
        const rowsByTab = {
            appointments,
            pharmacy: pharmacyOrders,
            lab: labOrders,
            optical: opticalOrders,
            primeStore: primeStoreOrders,
            caretakers,
        };

        return rowsByTab[activeTab] || [];
    }, [activeTab, appointments, pharmacyOrders, labOrders, opticalOrders, primeStoreOrders, caretakers]);

    const profileDetails = [
        { label: "Email", value: info.email },
        { label: "Phone", value: info.phone },
        { label: "Age", value: info.age },
        { label: "Gender", value: info.gender },
        { label: "City", value: info.city },
        { label: "Notification language", value: info.notificationLanguage },
    ];

    return (
        <Box>
            <Typography sx={pageTitleSx}>
                Dashboard /
                <Box component="span" sx={pageSubtitleS}>
                    {" "}
                    Patients /
                </Box>
                <Box component="span" sx={pageSubtitleSx}>
                    {" "}
                    Profile
                </Box>
            </Typography>

            <Grid container spacing={1} sx={{ mb: 2.5 }}>
                <Grid size={{ xs: 12, lg: 6 }}>
                    <Box
                        sx={{
                            ...cardSx,
                            borderRadius: "12px",
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
                                alignItems: { xs: "center", sm: "flex-start" },
                                textAlign: { xs: "center", sm: "left" },
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
                                src="/image/Pprofile.png"
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
                                        color: "#2F2F2F",
                                    }}
                                >
                                    {info.country}
                                </Typography>
                            </Box>
                        </Box>

                        <Box
                            sx={{
                                flex: 1,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                pl: { sm: 3 },
                                minWidth: 0,
                            }}
                        >
                            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                                {profileDetails.map((item) => (
                                    <Box
                                        key={item.label}
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            gap: 3,
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontFamily,
                                                fontSize: "15px",
                                                fontWeight: 400,
                                                color: "#7C7C7C",
                                                flexShrink: 0,
                                            }}
                                        >
                                            {item.label}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontFamily,
                                                fontSize: "15px",
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
                        </Box>
                    </Box>
                </Grid>

                <Grid size={{ xs: 12, lg: 6 }}>
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: {
                                xs: "repeat(2, minmax(0, 1fr))",
                                sm: "repeat(3, minmax(0, 1fr))",
                            },
                            gap: 1,
                            height: "100%",
                            alignContent: "start",
                        }}
                    >
                        {statCards.map((stat) => (
                            <SpendStatCard key={stat.title} {...stat} />
                        ))}
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
                        width: "100%",
                    }}
                >
                    {tabs.map((tab) => (
                        <Box
                            key={tab.value}
                            component="button"
                            onClick={() => setActiveTab(tab.value)}
                            sx={tabButtonSx(activeTab === tab.value)}
                        >
                            <Box component="span" sx={{ wordBreak: "break-word" }}>
                                {tab.label}
                            </Box>
                            <Box
                                component="span"
                                sx={{
                                    fontSize: { xs: "16px", sm: "18px" },
                                    fontWeight: 600,
                                    color: "#2F2F2F",
                                    ml: { xs: 0.5, sm: 1.25 },
                                    flexShrink: 0,
                                }}
                            >
                                {String(tab.count).padStart(2, "0")}
                            </Box>
                        </Box>
                    ))}
                </Box>

                <DataTable
                    columns={TAB_COLUMNS[activeTab]}
                    rows={tabRows}
                    getRowId={(row) => row.id}
                    emptyMessage="No Records Available"
                    minWidth="95rem"
                    defaultRowsPerPage={5}
                    rowsPerPageOptions={[5, 10, 25]}
                />
            </Box>
        </Box>
    );
};

export default PatientProfile;
