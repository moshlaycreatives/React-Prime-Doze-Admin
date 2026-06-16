import { useMemo, useState } from "react";
import dayjs from "dayjs";
import { Box, Grid, Typography } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ScheduleIcon from "@mui/icons-material/Schedule";
import CancelIcon from "@mui/icons-material/Cancel";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import { fontFamily } from "../../../theme/responsiveTypography";
import DataTable from "../../../SharedComponent/DataTable";
import DateRangePickerPill from "../../../SharedComponent/DateRangePickerPill";
import {
    APPOINTMENT_TABS,
    HOSPITAL_PROFILE_ALL_DOCTORS,
    HOSPITAL_PROFILE_APPOINTMENTS,
    HOSPITAL_PROFILE_DOCTORS,
    HOSPITAL_PROFILE_IMAGES,
    HOSPITAL_PROFILE_INFO,
    HOSPITAL_PROFILE_STATS,
} from "../../../redux/data/hospitalProfileData";
import AllDoctors from "./AllDoctors";
import HospitalDetails from "./HospitalDetails";
import { useNavigate } from "react-router-dom";



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

const STATUS_COLORS = {
    Today: "#1472FF",
    Upcoming: "#F59E0B",
    Completed: "#22C55E",
    Cancelled: "#EF4444",
};

const STAT_CARDS = [
    {
        title: "Appointment Earnings",
        value: HOSPITAL_PROFILE_STATS.appointmentEarnings,
        icon: AttachMoneyIcon,
        iconBg: "#E8F5E9",
        iconColor: "#22C55E",
    },
    {
        title: "Completed",
        value: HOSPITAL_PROFILE_STATS.completed,
        icon: CheckCircleIcon,
        iconBg: "#E8F5E9",
        iconColor: "#22C55E",
    },
    {
        title: "Today",
        value: HOSPITAL_PROFILE_STATS.today,
        icon: CalendarTodayIcon,
        iconBg: "#E3F2FD",
        iconColor: "#1472FF",
    },
    {
        title: "Upcoming",
        value: HOSPITAL_PROFILE_STATS.upcoming,
        icon: ScheduleIcon,
        iconBg: "#FFF3E0",
        iconColor: "#F59E0B",
    },
    {
        title: "Cancelled",
        value: HOSPITAL_PROFILE_STATS.cancelled,
        icon: CancelIcon,
        iconBg: "#FFEBEE",
        iconColor: "#EF4444",
    },
];

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

const DoctorCard = ({ doctor, onClick }) => (
    <Box
        onClick={onClick}
        sx={{
            ...cardSx,
            display: "flex",
            gap: 2,
            flex: "1 1 280px",
            minWidth: 0,
            cursor: "pointer",
        }}
    >
        <Box
            component="img"
            src={doctor.image}
            alt={doctor.name}
            sx={{
                width: 88,
                height: 88,
                borderRadius: "14px",
                objectFit: "cover",
                objectPosition: "center",
                flexShrink: 0,
                display: "block",
            }}
        />
        <Box sx={{ minWidth: 0, flex: 1 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.75, mb: 0.5 }}>
                <Typography
                    sx={{
                        fontFamily,
                        fontSize: "18px",
                        fontWeight: 600,
                        color: "#2F2F2F",
                    }}

                >
                    {doctor.name}
                </Typography>
                {doctor.isPrime && (
                    <WorkspacePremiumOutlinedIcon
                        sx={{ fontSize: 18, color: "#F59E0B" }}
                    />
                )}
            </Box>
            {doctor.verified && (
                <Box
                    sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 0.5,
                        backgroundColor: "#E8F5E9",
                        borderRadius: "6px",
                        px: 1,
                        py: 0.25,
                        mb: 1,
                    }}
                >
                    <VerifiedOutlinedIcon sx={{ fontSize: 14, color: "#22C55E" }} />
                    <Typography
                        sx={{
                            fontFamily,
                            fontSize: "12px",
                            fontWeight: 500,
                            color: "#22C55E",
                        }}
                    >
                        PMDC Verified
                    </Typography>
                </Box>
            )}
            <Typography
                sx={{
                    fontFamily,
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "#7C7C7C",
                    mb: 0.5,
                }}
            >
                {doctor.specialty}
            </Typography>
            <Typography
                sx={{
                    fontFamily,
                    fontSize: "13px",
                    fontWeight: 400,
                    color: "#9CA3AF",
                    lineHeight: 1.4,
                }}
            >
                {doctor.qualifications}
            </Typography>
        </Box>
    </Box>
);

const HospitalProfile = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("all");
    const [allDoctorsOpen, setAllDoctorsOpen] = useState(false);
    const [hospitalDetailsOpen, setHospitalDetailsOpen] = useState(false);
    const [startDate, setStartDate] = useState(dayjs("2026-05-15"));
    const [endDate, setEndDate] = useState(dayjs("2026-06-15"));
    const hospital = HOSPITAL_PROFILE_INFO;

    const filteredAppointments = useMemo(() => {
        if (activeTab === "all") return HOSPITAL_PROFILE_APPOINTMENTS;
        const statusMap = {
            completed: "Completed",
            today: "Today",
            upcoming: "Upcoming",
            cancelled: "Cancelled",
        };
        const status = statusMap[activeTab];
        return HOSPITAL_PROFILE_APPOINTMENTS.filter((row) => row.status === status);
    }, [activeTab]);

    const columns = [
        { id: "id", label: "Id" },
        { id: "patientName", label: "Patient Name" },
        { id: "reason", label: "Reason To Visit" },
        { id: "consultationType", label: "Consultation Type" },
        { id: "doctorName", label: "Doctor Name" },
        { id: "specialty", label: "Specialty" },
        { id: "fee", label: "Fee" },
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

    const viewDoctorProfile = () => {
        navigate("/admin/doctors-profile");
    };


    return (
        <Box>
            <AllDoctors
                open={allDoctorsOpen}
                onClose={() => setAllDoctorsOpen(false)}
                doctors={HOSPITAL_PROFILE_ALL_DOCTORS}
            />

            <HospitalDetails
                open={hospitalDetailsOpen}
                onClose={() => setHospitalDetailsOpen(false)}
                hospital={hospital}
            />

            <Grid
                container
                sx={{ alignItems: "center", justifyContent: "space-between", mb: 2.5 }}
            >
                <Grid size={{ xs: 12, md: "auto" }}>
                    <Typography sx={pageTitleSx}>
                        Dashboard /
                        <Box component="span" sx={pageSubtitleS}>
                            {" "}
                            Hospitals /
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
                {STAT_CARDS.map((stat) => (
                    <Grid key={stat.title} size={{ xs: 12, sm: 6, md: 4, lg: 2.4 }}>
                        <StatCard {...stat} />
                    </Grid>
                ))}
            </Grid>

            <Grid container spacing={1} sx={{ mb: 1 }}>
                <Grid size={{ xs: 12, lg: 6 }}>
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
                                src="/image/Hcity.png"
                                alt={hospital.name}
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
                                {hospital.name}
                            </Typography>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                <Box
                                    component="img"
                                    src={hospital.flag}
                                    alt={hospital.country}
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
                                    {hospital.country}
                                </Typography>
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
                                    { label: "Email", value: hospital.email },
                                    { label: "Phone", value: hospital.phone },
                                    { label: "Doctors", value: hospital.doctors },
                                    { label: "City", value: hospital.city },
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
                                    onClick={() => setHospitalDetailsOpen(true)}
                                >
                                    View all
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Grid>

                <Grid size={{ xs: 12, lg: 6 }}>
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
                            Hospital Images
                        </Typography>
                        <Box
                            sx={{
                                display: "grid",
                                gridTemplateColumns: "repeat(5, 1fr)",
                                gap: 1,
                            }}
                        >
                            {HOSPITAL_PROFILE_IMAGES.map((src, index) => (
                                <Box
                                    key={index}
                                    component="img"
                                    src={src}
                                    alt={`Hospital ${index + 1}`}
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

            <Box sx={{ mb: 2.5 }}>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        mb: 1,
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily,
                            fontSize: "22px",
                            fontWeight: 600,
                            color: "#2F2F2F",
                        }}
                    >
                        Doctors
                    </Typography>
                    <Typography
                        component="span"
                        sx={viewAllSx}
                        onClick={() => setAllDoctorsOpen(true)}
                    >
                        View all
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 1,
                    }}
                >
                    {HOSPITAL_PROFILE_DOCTORS.map((doctor) => (
                        <DoctorCard
                            key={doctor.id}
                            doctor={doctor}
                            onClick={viewDoctorProfile}
                        />
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
                    }}
                >
                    {APPOINTMENT_TABS.map((tab) => (
                        <Box
                            key={tab.value}
                            component="button"
                            onClick={() => setActiveTab(tab.value)}
                            sx={tabButtonSx(activeTab === tab.value)}
                        >
                            {tab.label}  <span style={{ fontSize: "18px", fontWeight: 600, color: "#2F2F2F", marginLeft: "10px" }}>{tab.count}</span>
                        </Box>
                    ))}
                </Box>

                <DataTable
                    columns={columns}
                    rows={filteredAppointments}
                    getRowId={(row) => row.id}
                    emptyMessage="No Appointments Available"
                    minWidth="90rem"
                    defaultRowsPerPage={5}
                    rowsPerPageOptions={[5, 10, 25]}
                />
            </Box>
        </Box>
    );
};

export default HospitalProfile;
