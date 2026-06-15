import { useState } from "react";
import {
    Box,
    Button,
    Grid,
    Menu,
    MenuItem,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { fontFamily } from "../../../theme/responsiveTypography";
import { useAppSelector } from "../../../redux/hooks.js";
import AddStaff from "./AddStaff";
import EditStaff from "./EditStaff";

const TABLE_HEADERS = ["Name", "Country", "Email", "Action"];

const headerCellSx = {
    fontFamily,
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "21px",
    color: "#7C7C7C",
};

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

const addButtonSx = {
    backgroundColor: "#1472FF",
    color: "#FFFFFF",
    fontFamily,
    fontSize: "18px",
    fontWeight: 400,
    borderRadius: "33px",
    textTransform: "none",
    width: 150,
    height: 50,
    mb: "20px",
    boxShadow: "none",
    "&:hover": {
        boxShadow: "none",
    },
};

const actionIconSx = {
    color: "#2F2F2F",
    border: "1px solid #7C7C7C",
    borderRadius: "20px",
    p: "4px",
    cursor: "pointer",
};

const Staff = () => {
    const staffList = useAppSelector((state) => state.staff.items);
    const [addStaffOpen, setAddStaffOpen] = useState(false);
    const [editStaffOpen, setEditStaffOpen] = useState(false);
    const [selectedStaff, setSelectedStaff] = useState(null);
    const [menuAnchorEl, setMenuAnchorEl] = useState(null);
    const menuOpen = Boolean(menuAnchorEl);

    const handleMenuOpen = (event, staff) => {
        setMenuAnchorEl(event.currentTarget);
        setSelectedStaff(staff);
    };

    const handleMenuClose = () => {
        setMenuAnchorEl(null);
    };

    const handleEditClick = () => {
        handleMenuClose();
        setEditStaffOpen(true);
    };

    return (
        <Box>
            <Grid container>
                <Grid item size={{ xs: 12, md: 6 }}>
                    <Typography sx={pageTitleSx}>
                        Dashboard/
                        <Box component="span" sx={pageSubtitleSx}>
                            Staff
                        </Box>
                    </Typography>
                </Grid>
                <Grid
                    item
                    size={{ xs: 12, md: 6 }}
                    sx={{ display: "flex", justifyContent: "flex-end" }}
                >
                    <Button
                        variant="contained"
                        startIcon={<ControlPointIcon />}
                        sx={addButtonSx}
                        onClick={() => setAddStaffOpen(true)}
                    >
                        Add Staff
                    </Button>
                </Grid>
            </Grid>

            <AddStaff open={addStaffOpen} onClose={() => setAddStaffOpen(false)} />

            <EditStaff
                open={editStaffOpen}
                staff={selectedStaff}
                onClose={() => {
                    setEditStaffOpen(false);
                    setSelectedStaff(null);
                }}
            />

            <Menu
                anchorEl={menuAnchorEl}
                open={menuOpen}
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
                    onClick={handleEditClick}
                    sx={{ fontFamily, fontSize: "16px", color: "#2F2F2F" }}
                >
                    Edit
                </MenuItem>
            </Menu>

            <Box sx={{ borderRadius: "15px", backgroundColor: "white", boxShadow: "none" }}>
                <Box sx={{ overflowX: "auto" }}>
                    <Table sx={{ border: "1px solid #EFEFEF", minWidth: "70rem" }}>
                        <TableHead>
                            <TableRow>
                                {TABLE_HEADERS.map((header) => (
                                    <TableCell key={header} sx={headerCellSx}>
                                        {header}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {staffList.length > 0 ? (
                                staffList.map((row) => (
                                    <TableRow key={row.id}>
                                        <TableCell>{row.Name}</TableCell>
                                        <TableCell>
                                            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                                <Box
                                                    component="img"
                                                    src={row.Image}
                                                    alt={row.Country}
                                                    sx={{ width: 24, height: 24 }}
                                                />
                                                {row.Country}
                                            </Box>
                                        </TableCell>
                                        <TableCell>{row.Mail}</TableCell>
                                        <TableCell>
                                            <MoreHorizOutlinedIcon
                                                sx={actionIconSx}
                                                onClick={(event) => handleMenuOpen(event, row)}
                                            />
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={TABLE_HEADERS.length} align="center">
                                        No Staff Available
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </Box>
            </Box>
        </Box>
    );
};

export default Staff;
