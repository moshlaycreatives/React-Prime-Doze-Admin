import PropTypes from "prop-types";
import { Box, Dialog, Divider, IconButton, Typography } from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import { fontFamily } from "../../../theme/responsiveTypography";
import {
    dialogBackdropSx,
    dialogDividerSx,
    dialogHeaderBoxSx,
    dialogTitleSx,
    formBodyBoxSx,
    mutedIconButtonSx,
} from "../../../theme/formTheme";
import { useNavigate } from "react-router-dom";




const doctorItemSx = {
    display: "flex",
    gap: 2,
    p: 2,
    borderRadius: "12px",
    border: "1px solid #EFEFEF",
    backgroundColor: "#FFFFFF",
};

const DoctorListItem = ({ doctor, onClick }) => (
    <Box
        onClick={onClick}
        sx={{
            ...doctorItemSx,
            cursor: onClick ? "pointer" : "default",
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

DoctorListItem.propTypes = {
    onClick: PropTypes.func,
    doctor: PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        verified: PropTypes.bool,
        specialty: PropTypes.string.isRequired,
        qualifications: PropTypes.string.isRequired,
        isPrime: PropTypes.bool,
    }).isRequired,
};

const AllDoctors = ({ open, onClose, doctors }) => {

    const navigate = useNavigate();

    const handleViewDoctor = () => {
        onClose();
        navigate("/admin/doctors-profile");
    };

    return (
        <Dialog
            open={open}
            onClose={onClose}
            slotProps={{
                backdrop: {
                    sx: dialogBackdropSx,
                },
                paper: {
                    elevation: 0,
                    sx: {
                        borderRadius: "15px",
                        width: "calc(100% - 32px)",
                        maxWidth: "455px",
                        maxHeight: "calc(80vh - 32px)",
                        m: 2,
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                        boxShadow: "none",
                    },
                },
            }}
        >
            <Box
                sx={{
                    ...dialogHeaderBoxSx,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    pb: "10px",
                }}
            >
                <Typography sx={dialogTitleSx}>All Doctors</Typography>
                <IconButton
                    aria-label="Close"
                    onClick={onClose}
                    sx={{
                        ...mutedIconButtonSx,
                        mr: 0,
                        border: "1px solid #2F2F2F",
                        width: 25,
                        height: 25,
                    }}
                >
                    <CloseOutlinedIcon sx={{ fontSize: 15, color: "#2F2F2F" }} />
                </IconButton>
            </Box>

            <Divider sx={dialogDividerSx} />

            <Box
                sx={{
                    ...formBodyBoxSx,
                    display: "flex",
                    flexDirection: "column",
                    gap: 1.5,
                    pt: "10px",
                }}
            >
                {doctors.map((doctor) => (
                    <DoctorListItem key={doctor.id} doctor={doctor}
                        onClick={handleViewDoctor}
                    />
                ))}
            </Box>
        </Dialog>
    );
};

AllDoctors.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    doctors: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            verified: PropTypes.bool,
            specialty: PropTypes.string.isRequired,
            qualifications: PropTypes.string.isRequired,
            isPrime: PropTypes.bool,
        })
    ).isRequired,
};

export default AllDoctors;
