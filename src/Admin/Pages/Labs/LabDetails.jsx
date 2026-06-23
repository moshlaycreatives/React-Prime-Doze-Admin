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

const DetailRow = ({ label, value, multiline = false }) => (
    <Box
        sx={{
            display: "flex",
            alignItems: multiline ? "flex-start" : "center",
            justifyContent: "space-between",
            gap: 2,
        }}
    >
        <Typography sx={labelSx}>{label}:</Typography>
        <Typography
            sx={{
                ...valueSx,
                maxWidth: multiline ? "58%" : undefined,
                wordBreak: multiline ? "break-word" : undefined,
            }}
        >
            {value}
        </Typography>
    </Box>
);

DetailRow.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    multiline: PropTypes.bool,
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

const LabDetails = ({ open, onClose, lab }) => {
    const detailRows = [
        { label: "Email", value: lab.email },
        { label: "Phone", value: lab.phone },
        { label: "Test Types", value: lab.testTypes },
        { label: "City", value: lab.city },
        { label: "Lab Address", value: lab.labAddress, multiline: true },
        { label: "Opening Time", value: lab.openingTime },
        { label: "Closing Time", value: lab.closingTime },
    ];

    return (
        <Dialog
            open={open}
            onClose={onClose}
            slotProps={{
                backdrop: { sx: dialogBackdropSx },
                paper: {
                    elevation: 0,
                    sx: {
                        borderRadius: "15px",
                        width: "calc(100% - 32px)",
                        maxWidth: "520px",
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
                <Typography sx={dialogTitleSx}>Lab Details</Typography>
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
                    overflowY: "auto",
                }}
            >
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    {detailRows.map((row) => (
                        <DetailRow
                            key={row.label}
                            label={row.label}
                            value={row.value}
                            multiline={row.multiline}
                        />
                    ))}
                </Box>

                <DetailSection title="About">{lab.about}</DetailSection>
            </Box>
        </Dialog>
    );
};

LabDetails.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    lab: PropTypes.shape({
        email: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        testTypes: PropTypes.number.isRequired,
        city: PropTypes.string.isRequired,
        labAddress: PropTypes.string.isRequired,
        openingTime: PropTypes.string.isRequired,
        closingTime: PropTypes.string.isRequired,
        about: PropTypes.string.isRequired,
    }).isRequired,
};

export default LabDetails;
