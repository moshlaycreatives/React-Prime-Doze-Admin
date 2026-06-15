import PropTypes from "prop-types";
import { Box, Dialog, Divider, IconButton, Typography } from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { fontFamily } from "../../../theme/responsiveTypography";
import {
    dialogBackdropSx,
    dialogDividerSx,
    dialogHeaderBoxSx,
    dialogTitleSx,
    formBodyBoxSx,
    mutedIconButtonSx,
} from "../../../theme/formTheme";

const labelSx = {
    fontFamily,
    fontSize: "16px",
    fontWeight: 400,
    color: "#7C7C7C",
    flexShrink: 0,
};

const valueSx = {
    fontFamily,
    fontSize: "16px",
    fontWeight: 500,
    color: "#2F2F2F",
    textAlign: "right",
    minWidth: 0,
};

const sectionTitleSx = {
    fontFamily,
    fontSize: "18px",
    fontWeight: 600,
    color: "#2F2F2F",
    mb: 1,
};

const sectionBodySx = {
    fontFamily,
    fontSize: "15px",
    fontWeight: 400,
    color: "#7C7C7C",
    lineHeight: 1.6,
};

const DetailRow = ({ label, value }) => (
    <Box
        sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
        }}
    >
        <Typography sx={labelSx}>{label}:</Typography>
        <Typography sx={valueSx}>{value}</Typography>
    </Box>
);

DetailRow.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

const DetailSection = ({ title, children }) => (
    <Box>
        <Typography sx={sectionTitleSx}>{title}</Typography>
        <Typography sx={sectionBodySx}>{children}</Typography>
    </Box>
);

DetailSection.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

const HospitalDetails = ({ open, onClose, hospital }) => {
    const detailRows = [
        { label: "Email", value: hospital.email },
        { label: "Phone", value: hospital.phone },
        { label: "Doctors", value: hospital.doctors },
        { label: "City", value: hospital.city },
        { label: "Helpline", value: hospital.helpline },
    ];

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
                        maxWidth: "520px",
                        maxHeight: "calc(100vh - 32px)",
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
                <Typography sx={dialogTitleSx}>Hospital Details</Typography>
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
                    gap: 2.5,
                    pt: "24px",
                }}
            >
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    {detailRows.map((row) => (
                        <DetailRow key={row.label} label={row.label} value={row.value} />
                    ))}
                </Box>

                <DetailSection title="About">{hospital.about}</DetailSection>
                <DetailSection title="Services">{hospital.services}</DetailSection>
                <DetailSection title="Facilities">{hospital.facilities}</DetailSection>
            </Box>
        </Dialog>
    );
};

HospitalDetails.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    hospital: PropTypes.shape({
        email: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        doctors: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        city: PropTypes.string.isRequired,
        helpline: PropTypes.string.isRequired,
        about: PropTypes.string.isRequired,
        services: PropTypes.string.isRequired,
        facilities: PropTypes.string.isRequired,
    }).isRequired,
};

export default HospitalDetails;
