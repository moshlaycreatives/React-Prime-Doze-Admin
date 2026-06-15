import { useMemo, useState } from "react";
import dayjs from "dayjs";
import { Box, Menu, MenuItem, Typography } from "@mui/material";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import StarIcon from "@mui/icons-material/Star";
import { fontFamily } from "../../../theme/responsiveTypography";
import DataTable from "../../../SharedComponent/DataTable";
import TableFilterBar from "../../../SharedComponent/TableFilterBar";
import { useAppSelector } from "../../../redux/hooks.js";
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

const actionIconSx = {
    color: "#2F2F2F",
    border: "1px solid #7C7C7C",
    borderRadius: "20px",
    p: "4px",
    cursor: "pointer",
};

const COUNTRY_OPTIONS = [
    { value: "all", label: "Country" },
    { value: "India", label: "India" },
    { value: "Pakistan", label: "Pakistan" },
];

const SORT_OPTIONS = [
    { value: "recent", label: "Most Recent" },
    { value: "oldest", label: "Oldest" },
    { value: "name-asc", label: "Name A-Z" },
    { value: "name-desc", label: "Name Z-A" },
];

const OpticalStores = () => {
    const navigate = useNavigate();
    const opticalStores = useAppSelector((state) => state.opticalStores.items);
    const [search, setSearch] = useState("");
    const [country, setCountry] = useState("all");
    const [sortBy, setSortBy] = useState("recent");
    const [startDate, setStartDate] = useState(dayjs("2026-05-15"));
    const [endDate, setEndDate] = useState(dayjs("2026-06-15"));
    const [menuAnchorEl, setMenuAnchorEl] = useState(null);

    const filteredRows = useMemo(() => {
        let rows = [...opticalStores];

        if (search.trim()) {
            const query = search.trim().toLowerCase();
            rows = rows.filter(
                (row) =>
                    row.id.includes(query) ||
                    row.name.toLowerCase().includes(query) ||
                    row.email.toLowerCase().includes(query) ||
                    row.phone.toLowerCase().includes(query) ||
                    row.city.toLowerCase().includes(query) ||
                    row.country.toLowerCase().includes(query) ||
                    String(row.rating).includes(query)
            );
        }

        if (country !== "all") {
            rows = rows.filter((row) => row.country === country);
        }

        if (sortBy === "oldest") {
            rows.reverse();
        } else if (sortBy === "name-asc") {
            rows.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortBy === "name-desc") {
            rows.sort((a, b) => b.name.localeCompare(a.name));
        }

        return rows;
    }, [opticalStores, search, country, sortBy]);

    const handleMenuOpen = (event) => {
        setMenuAnchorEl(event.currentTarget);
    };


    const handleMenuClose = () => {
        setMenuAnchorEl(null);
    };

    const handleViewProfile = () => {
        handleMenuClose();
        navigate("/admin/optical-stores-profile");
    };

    const columns = [
        { id: "id", label: "Id" },
        { id: "name", label: "Name" },
        { id: "email", label: "Email" },
        { id: "phone", label: "Phone" },
        { id: "city", label: "City" },
        {
            id: "country",
            label: "Country",
            render: (row) => (
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Box
                        component="img"
                        src={row.flag}
                        alt={row.country}
                        sx={{ width: 24, height: 24, borderRadius: "50%", objectFit: "cover" }}
                    />
                    {row.country}
                </Box>
            ),
        },
        {
            id: "rating",
            label: "Rating",
            render: (row) => (
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                    <StarIcon sx={{ fontSize: 18, color: "#F5A623" }} />
                    {row.rating}
                </Box>
            ),
        },
        {
            id: "actions",
            label: "Actions",
            render: () => (
                <MoreHorizOutlinedIcon sx={actionIconSx} onClick={handleMenuOpen} />
            ),
        },
    ];

    return (
        <Box>
            <Typography sx={pageTitleSx}>
                Dashboard/
                <Box component="span" sx={pageSubtitleSx}>
                    {" "}
                    Optical Stores
                </Box>
            </Typography>

            <TableFilterBar
                search={search}
                onSearchChange={setSearch}
                searchAriaLabel="Search optical stores"
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
                    onClick={handleViewProfile}
                    sx={{ fontFamily, fontSize: "16px", color: "#2F2F2F" }}
                >
                    View
                </MenuItem>
            </Menu>

            <DataTable
                columns={columns}
                rows={filteredRows}
                getRowId={(row) => row.id}
                emptyMessage="No Optical Stores Available"
                minWidth="85rem"
                defaultRowsPerPage={10}
            />
        </Box>
    );
};

export default OpticalStores;
