import { useMemo, useState } from "react";
import {
    Box,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ScheduleIcon from "@mui/icons-material/Schedule";
import CancelIcon from "@mui/icons-material/Cancel";
import StarIcon from "@mui/icons-material/Star";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { fontFamily } from "../../../theme/responsiveTypography";
import DataTable from "../../../SharedComponent/DataTable";
import { useAppSelector } from "../../../redux/hooks.js";
import DoctorDetails from "./DoctorDetails";




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

const APPOINTMENT_STATUS_COLORS = {
    Today: "#1472FF",
    Upcoming: "#F59E0B",
    "In Progress": "#FF9E7A",
    Completed: "#22C55E",
    Cancelled: "#EF4444",
};

const DOCUMENT_STATUS_COLORS = {
    Pending: "#F59E0B",
    Approved: "#22C55E",
    Rejected: "#EF4444",
};

const tableHeaderSx = {
    fontFamily,
    fontSize: "15px",
    fontWeight: 400,
    color: "#7C7C7C",
    borderBottom: "1px solid #EFEFEF",
    px: 0,
    py: 1.25,
};

const tableCellSx = {
    fontFamily,
    fontSize: "15px",
    fontWeight: 400,
    color: "#7C7C7C",
    borderBottom: "1px solid #EFEFEF",
    px: 0,
    py: 1.75,
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
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
    flex: { xs: "1 1 calc(50% - 6px)", sm: "0 0 auto" },
    minWidth: { xs: 0, sm: "auto" },
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

const ClinicCard = ({ clinic }) => (
    <Box
        sx={{
            ...cardSx,
            flex: "1 1 300px",
            minWidth: 0,
        }}
    >
        <Typography
            sx={{
                fontFamily,
                fontSize: "18px",
                fontWeight: 600,
                color: "#2F2F2F",
                mb: 1,
            }}
        >
            {clinic.hospitalName}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "flex-start", gap: 0.75, mb: 1.25 }}>
            <Typography
                sx={{
                    fontFamily,
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "#7C7C7C",
                    lineHeight: 1.5,
                    flex: 1,
                }}
            >
                {clinic.address}
            </Typography>
            <OpenInNewIcon sx={{ fontSize: 16, color: "#1472FF", mt: 0.25, flexShrink: 0 }} />
        </Box>
        <Typography
            sx={{
                fontFamily,
                fontSize: "14px",
                fontWeight: 400,
                color: "#7C7C7C",
                mb: 1.25,
            }}
        >
            {clinic.days}
        </Typography>
        <Typography
            sx={{
                fontFamily,
                fontSize: "16px",
                fontWeight: 600,
                color: "#2F2F2F",
            }}
        >
            Fee: {clinic.fee}
        </Typography>
    </Box>
);

const DoctorProfile = () => {
    const { stats, info, documents, clinics, appointments, tabs } = useAppSelector(
        (state) => state.doctorProfile
    );
    const [activeTab, setActiveTab] = useState("all");
    const [doctorDetailsOpen, setDoctorDetailsOpen] = useState(false);

    const statCards = [
        {
            title: "Appointment Earnings",
            value: stats.appointmentEarnings,
            icon: AttachMoneyIcon,
            iconBg: "#E8F5E9",
            iconColor: "#22C55E",
        },
        {
            title: "Completed",
            value: stats.completed,
            icon: CheckCircleIcon,
            iconBg: "#E8F5E9",
            iconColor: "#22C55E",
        },
        {
            title: "Today",
            value: stats.today,
            icon: CalendarTodayIcon,
            iconBg: "#E3F2FD",
            iconColor: "#1472FF",
        },
        {
            title: "Upcoming",
            value: stats.upcoming,
            icon: ScheduleIcon,
            iconBg: "#FFF3E0",
            iconColor: "#F59E0B",
        },
        {
            title: "Cancelled",
            value: stats.cancelled,
            icon: CancelIcon,
            iconBg: "#FFEBEE",
            iconColor: "#EF4444",
        },
    ];

    const filteredAppointments = useMemo(() => {
        if (activeTab === "all") return appointments;

        const statusMap = {
            completed: "Completed",
            today: "Today",
            upcoming: "Upcoming",
            cancelled: "Cancelled",
        };

        const status = statusMap[activeTab];
        return appointments.filter((row) => row.status === status);
    }, [activeTab, appointments]);

    const columns = [
        { id: "id", label: "Id" },
        { id: "patientName", label: "Patient Name" },
        { id: "reason", label: "Reason To Visit" },
        { id: "consultationType", label: "Consultation Type" },
        { id: "city", label: "City" },
        { id: "fee", label: "Fee" },
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
    ];

    return (
        <Box>
            <DoctorDetails
                open={doctorDetailsOpen}
                onClose={() => setDoctorDetailsOpen(false)}
                doctor={info}
            />

            <Typography sx={pageTitleSx}>
                Dashboard /
                <Box component="span" sx={pageSubtitleS}>
                    {" "}
                    Doctors /
                </Box>
                <Box component="span" sx={pageSubtitleSx}>
                    {" "}
                    Profile
                </Box>
            </Typography>

            <Grid container spacing={1} sx={{ mb: 1 }}>
                {statCards.map((stat) => (
                    <Grid key={stat.title} size={{ xs: 6, sm: 6, md: 4, lg: 2.4 }}>
                        <StatCard {...stat} />
                    </Grid>
                ))}
            </Grid>

            <Grid container spacing={1} sx={{ mb: 1 }}>
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
                                src={info.image}
                                alt={info.name}
                                sx={{
                                    width: 130,
                                    height: 130,
                                    borderRadius: "50%",
                                    objectFit: "cover",
                                    border: "1px solid #EFEFEF",
                                    mt: "7px"
                                }}
                            />
                            <Typography
                                sx={{
                                    fontFamily,
                                    fontSize: "22px",
                                    fontWeight: 600,
                                    color: "#2F2F2F",
                                    mt: "3px"
                                }}
                            >
                                {info.name}
                            </Typography>
                            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", mt: "15px" }}>
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
                                    {
                                        label: "Primary Specialization",
                                        value: info.primarySpecialization,
                                    },
                                    {
                                        label: "Total Clinical Experience",
                                        value: info.clinicalExperience,
                                    },
                                    {
                                        label: "Medical Council",
                                        value: info.medicalCouncil,
                                        color: "#22C55E",
                                    },
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
                                                color: item.color || "#2F2F2F",
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
                                    onClick={() => setDoctorDetailsOpen(true)}
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

                            }}
                        >
                            Documents
                        </Typography>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={tableHeaderSx}>Document Name</TableCell>
                                    <TableCell sx={tableHeaderSx}>Status</TableCell>
                                    <TableCell sx={tableHeaderSx} align="right">
                                        Document
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {documents.map((doc) => (
                                    <TableRow key={doc.id}>
                                        <TableCell sx={tableCellSx}>{doc.name}</TableCell>
                                        <TableCell sx={tableCellSx}>
                                            <Typography
                                                sx={{
                                                    fontFamily,
                                                    fontSize: "15px",
                                                    fontWeight: 500,
                                                    color:
                                                        DOCUMENT_STATUS_COLORS[doc.status] ||
                                                        "#2F2F2F",
                                                }}
                                            >
                                                {doc.status}
                                            </Typography>
                                        </TableCell>
                                        <TableCell sx={tableCellSx} align="right">
                                            <Box
                                                sx={{
                                                    display: "inline-flex",
                                                    alignItems: "center",
                                                    gap: 0.5,
                                                    color: "#1472FF",
                                                    cursor: "pointer",
                                                }}
                                            >
                                                <VisibilityOutlinedIcon sx={{ fontSize: 18 }} />
                                                <Typography
                                                    sx={{
                                                        fontFamily,
                                                        fontSize: "15px",
                                                        fontWeight: 500,
                                                        color: "#7C7C7C",
                                                    }}
                                                >
                                                    View
                                                </Typography>
                                            </Box>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Box>
                </Grid>
            </Grid>

            <Box sx={{ mb: 2.5 }}>
                <Typography
                    sx={{
                        fontFamily,
                        fontSize: "22px",
                        fontWeight: 600,
                        color: "#2F2F2F",
                        mb: 1,
                    }}
                >
                    Clinic Locations
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 1,
                    }}
                >
                    {clinics.map((clinic) => (
                        <ClinicCard key={clinic.id} clinic={clinic} />
                    ))}
                </Box>
            </Box>

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
                    rows={filteredAppointments}
                    getRowId={(row) => row.id}
                    emptyMessage="No Appointments Available"
                    minWidth="95rem"
                    defaultRowsPerPage={5}
                    rowsPerPageOptions={[5, 10, 25]}
                />
            </Box>
        </Box>
    );
};

export default DoctorProfile;
