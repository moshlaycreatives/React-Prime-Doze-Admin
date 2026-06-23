import { useMemo, useState } from "react";
import dayjs from "dayjs";
import { Box, Grid, Menu, MenuItem, Typography } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import ScheduleIcon from "@mui/icons-material/Schedule";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { fontFamily } from "../../../theme/responsiveTypography";
import DataTable from "../../../SharedComponent/DataTable";
import TableFilterBar from "../../../SharedComponent/TableFilterBar";
import {
    PENDING_DOCUMENTS_DATA,
    PENDING_DOCUMENTS_STATS,
} from "../../../redux/data/pendingDocumentsData";
import { useNavigate } from "react-router-dom";


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

const cardSx = {
    backgroundColor: "#FFFFFF",
    borderRadius: "12px",
    border: "1px solid #EFEFEF",
};

const actionIconSx = {
    color: "#2F2F2F",
    border: "1px solid #7C7C7C",
    borderRadius: "20px",
    p: "4px",
    cursor: "pointer",
};

const CHIP_STYLES = {
    verified: {
        color: "#22C55E",
        border: "#22C55E",
        bg: "#ECFDF5",
    },
    pending: {
        color: "#F59E0B",
        border: "#F59E0B",
        bg: "#FFF7ED",
    },
    rejected: {
        color: "#EF4444",
        border: "#EF4444",
        bg: "#FEF2F2",
    },
};

const STATUS_TO_CHIP = {
    Verified: "verified",
    Pending: "pending",
    Rejected: "rejected",
};

const COUNTRY_OPTIONS = [
    { value: "all", label: "Country" },
    { value: "India", label: "India" },
    { value: "Pakistan", label: "Pakistan" },
];

const SORT_OPTIONS = [
    { value: "all", label: "All" },
    { value: "pending", label: "Pending" },
    { value: "verified", label: "Verified" },
    { value: "rejected", label: "Rejected" },
];

const formatNumber = (value) =>
    value.toLocaleString("en-US", { maximumFractionDigits: 0 });

const StatCard = ({ title, value, icon: Icon, iconBg, iconColor }) => (
    <Box
        sx={{
            ...cardSx,
            p: 2,
            minHeight: 110,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
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
                    borderRadius: "50%",
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

const DocumentBadge = ({ label, status }) => {
    const styles = CHIP_STYLES[status];

    return (
        <Box
            component="span"
            sx={{
                fontFamily,
                fontSize: "12px",
                fontWeight: 500,
                color: styles.color,
                backgroundColor: styles.bg,
                border: `1px solid ${styles.border}`,
                borderRadius: "999px",
                px: 1.25,
                py: 0.35,
                minHeight: 24,
                lineHeight: 1.2,
                whiteSpace: "nowrap",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            {label}
        </Box>
    );
};

const StatusBadge = ({ status }) => {
    const chipKey = STATUS_TO_CHIP[status] || "pending";
    const styles = CHIP_STYLES[chipKey];

    return (
        <Box
            component="span"
            sx={{
                fontFamily,
                fontSize: "14px",
                fontWeight: 500,
                color: styles.color,
                backgroundColor: styles.bg,
                border: `1px solid ${styles.border}`,
                borderRadius: "999px",
                px: 1.75,
                py: 0.5,
                minWidth: 88,
                lineHeight: 1.2,
                whiteSpace: "nowrap",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            {status}
        </Box>
    );
};

const PendingDocuments = () => {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const [country, setCountry] = useState("all");
    const [sortBy, setSortBy] = useState("all");
    const [startDate, setStartDate] = useState(dayjs("2026-05-15"));
    const [endDate, setEndDate] = useState(dayjs("2026-06-15"));
    const [menuAnchorEl, setMenuAnchorEl] = useState(null);

    const statCards = [
        {
            title: "Total Doctors",
            value: formatNumber(PENDING_DOCUMENTS_STATS.totalDoctors),
            icon: AttachMoneyIcon,
            iconBg: "#E8F5E9",
            iconColor: "#22C55E",
        },
        {
            title: "Verified",
            value: formatNumber(PENDING_DOCUMENTS_STATS.verified),
            icon: CheckCircleOutlinedIcon,
            iconBg: "#E8F5E9",
            iconColor: "#22C55E",
        },
        {
            title: "Pending Review",
            value: formatNumber(PENDING_DOCUMENTS_STATS.pendingReview),
            icon: ScheduleIcon,
            iconBg: "#FFF7ED",
            iconColor: "#F59E0B",
        },
        {
            title: "Rejected",
            value: formatNumber(PENDING_DOCUMENTS_STATS.rejected),
            icon: CancelOutlinedIcon,
            iconBg: "#FEF2F2",
            iconColor: "#EF4444",
        },
    ];

    const filteredRows = useMemo(() => {
        let rows = [...PENDING_DOCUMENTS_DATA];

        if (search.trim()) {
            const query = search.trim().toLowerCase();
            rows = rows.filter(
                (row) =>
                    row.id.includes(query) ||
                    row.doctor.toLowerCase().includes(query) ||
                    row.specialization.toLowerCase().includes(query) ||
                    row.city.toLowerCase().includes(query) ||
                    row.country.toLowerCase().includes(query) ||
                    row.status.toLowerCase().includes(query) ||
                    row.date.toLowerCase().includes(query)
            );
        }

        if (country !== "all") {
            rows = rows.filter((row) => row.country === country);
        }

        if (sortBy === "pending") {
            rows = rows.filter((row) => row.status === "Pending");
        } else if (sortBy === "verified") {
            rows = rows.filter((row) => row.status === "Verified");
        } else if (sortBy === "rejected") {
            rows = rows.filter((row) => row.status === "Rejected");
        }

        return rows;
    }, [search, country, sortBy]);

    const handleMenuOpen = (event) => {
        setMenuAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setMenuAnchorEl(null);
    };


    const handleNavigate = () => {
        handleMenuClose();
        navigate("/admin/doctor-documents")
    }


    const columns = [
        { id: "id", label: "Id", width: "6%" },
        { id: "doctor", label: "Doctor", width: "14%" },
        { id: "specialization", label: "Specialization", width: "13%" },
        { id: "city", label: "City", width: "10%" },
        {
            id: "country",
            label: "Country",
            width: "12%",
            render: (row) => (
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Box
                        component="img"
                        src={row.flag}
                        alt={row.country}
                        sx={{
                            width: 24,
                            height: 24,
                            borderRadius: "50%",
                            objectFit: "cover",
                        }}
                    />
                    {row.country}
                </Box>
            ),
        },
        {
            id: "documents",
            label: "Documents",
            width: "18%",
            render: (row) => (
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, flexWrap: "wrap" }}>
                    <DocumentBadge label="PMDC" status={row.documents.pmdc} />
                    <DocumentBadge label="Degree" status={row.documents.degree} />
                    <DocumentBadge label="CNIC" status={row.documents.cnic} />
                </Box>
            ),
        },
        { id: "date", label: "Date", width: "10%" },
        {
            id: "status",
            label: "Status",
            width: "10%",
            render: (row) => <StatusBadge status={row.status} />,
        },
        {
            id: "actions",
            label: "Actions",
            width: "7%",
            render: () => (
                <MoreHorizOutlinedIcon sx={actionIconSx} onClick={handleMenuOpen} />
            ),
        },
    ];

    return (
        <Box>
            <Typography sx={pageTitleSx}>
                Dashboard /
                <Box component="span" sx={pageSubtitleSx}>
                    {" "}
                    Doctor Documents
                </Box>
            </Typography>

            <Grid container spacing={1.5} sx={{ mb: 2.5 }}>
                {statCards.map((stat) => (
                    <Grid key={stat.title} size={{ xs: 6, sm: 6, lg: 3 }}>
                        <StatCard {...stat} />
                    </Grid>
                ))}
            </Grid>

            <TableFilterBar
                search={search}
                onSearchChange={setSearch}
                searchAriaLabel="Search doctor documents"
                country={country}
                onCountryChange={setCountry}
                countryOptions={COUNTRY_OPTIONS}
                startDate={startDate}
                endDate={endDate}
                onDateRangeChange={({ start, end }) => {
                    setStartDate(start);
                    setEndDate(end);
                }}
                sortBy={sortBy}
                onSortChange={setSortBy}
                sortOptions={SORT_OPTIONS}
            />

            <Menu
                anchorEl={menuAnchorEl}
                open={Boolean(menuAnchorEl)}
                onClose={handleMenuClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                slotProps={{
                    paper: {
                        sx: {
                            mt: 1,
                            minWidth: 120,
                            borderRadius: "10px",
                            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                        },
                    },
                }}
            >
                <MenuItem
                    onClick={handleNavigate}
                    sx={{ fontFamily, fontSize: "16px", color: "#2F2F2F" }}
                >
                    View
                </MenuItem>
            </Menu>

            <DataTable
                columns={columns}
                rows={filteredRows}
                getRowId={(row) => row.rowId}
                emptyMessage="No Doctor Documents Available"
                minWidth="75rem"
                tableLayout="fixed"
                defaultRowsPerPage={10}
            />
        </Box>
    );
};

export default PendingDocuments;
