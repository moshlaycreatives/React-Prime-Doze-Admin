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

const cardSx = {
    borderRadius: "12px",
    border: "1px solid #EFEFEF",
    backgroundColor: "#FFFFFF",
    p: 2,
};

const detailTextSx = {
    fontFamily,
    fontSize: "14px",
    whiteSpace: "nowrap",
    flexShrink: 0,
};

const TestListItem = ({ test }) => (
    <Box sx={cardSx}>
        <Typography
            sx={{
                fontFamily,
                fontSize: "16px",
                fontWeight: 600,
                color: "#2F2F2F",
                mb: 1.25,
                lineHeight: 1.3,
            }}
        >
            {test.name}
        </Typography>

        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.75,
                flexWrap: "nowrap",
                minWidth: 0,
                overflow: "hidden",
            }}
        >
            <Typography
                sx={{
                    ...detailTextSx,
                    fontWeight: 600,
                    color: "#2F2F2F",
                }}
            >
                Fee: {test.fee}
            </Typography>

            {test.discountedFee && (
                <Typography
                    sx={{
                        ...detailTextSx,
                        fontWeight: 400,
                        color: "#9CA3AF",
                    }}
                >
                    Fee: {test.discountedFee}
                </Typography>
            )}

            {test.discount && (
                <Typography
                    sx={{
                        ...detailTextSx,
                        fontWeight: 500,
                        color: "#EF4444",
                    }}
                >
                    {test.discount}
                </Typography>
            )}

            {test.freeHomeSample && (
                <Typography
                    sx={{
                        ...detailTextSx,
                        fontWeight: 500,
                        color: "#22C55E",
                        ml: "auto",
                    }}
                >
                    Free Home Sample
                </Typography>
            )}
        </Box>
    </Box>
);

TestListItem.propTypes = {
    test: PropTypes.shape({
        name: PropTypes.string.isRequired,
        fee: PropTypes.string.isRequired,
        discountedFee: PropTypes.string,
        discount: PropTypes.string,
        freeHomeSample: PropTypes.bool,
    }).isRequired,
};

const AllTests = ({ open, onClose, tests }) => (
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
                    maxWidth: "720px",
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
            <Typography sx={dialogTitleSx}>Test List</Typography>
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
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                gap: 1.5,
                pt: "24px",
                overflowY: "auto",
            }}
        >
            {tests.map((test) => (
                <TestListItem key={test.id} test={test} />
            ))}
        </Box>
    </Dialog>
);

AllTests.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    tests: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            fee: PropTypes.string.isRequired,
            discountedFee: PropTypes.string,
            discount: PropTypes.string,
            freeHomeSample: PropTypes.bool,
        })
    ).isRequired,
};

export default AllTests;
