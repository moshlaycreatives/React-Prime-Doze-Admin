import { useState } from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import { Box, Popover, Typography } from "@mui/material";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { fontFamily } from "../../theme/responsiveTypography";
import { headerColors, headerPillSx } from "../../theme/headerTheme";

const pillSx = {
    ...headerPillSx,
    display: "flex",
    alignItems: "center",
    gap: 1,
    px: 2,
    py: 1,
    height: 48,
    border: `1px solid ${headerColors.searchBorder}`,
    backgroundColor: "#FFFFFF",
    cursor: "pointer",
    whiteSpace: "nowrap",
    fontFamily,
    fontSize: "15px",
    fontWeight: 400,
    color: "#374151",
    minWidth: 0,
    "&:hover": {
        backgroundColor: headerColors.white,
        borderColor: headerColors.nameBlue,
    },
};

const formatDateLabel = (date) =>
    date && dayjs(date).isValid() ? dayjs(date).format("MMM D, YYYY") : null;

const DateRangePickerPill = ({ startDate, endDate, onChange, sx }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const startLabel = formatDateLabel(startDate);
    const endLabel = formatDateLabel(endDate);
    const displayLabel =
        startLabel && endLabel
            ? `${startLabel} - ${endLabel}`
            : startLabel
              ? `${startLabel} - End date`
              : "Select date range";

    const handleStartDateChange = (newStart) => {
        onChange?.({
            start: newStart,
            end:
                endDate && newStart && dayjs(endDate).isBefore(newStart, "day")
                    ? newStart
                    : endDate,
        });
    };

    const handleEndDateChange = (newEnd) => {
        onChange?.({ start: startDate, end: newEnd });
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box
                sx={{ ...pillSx, ...sx }}
                onClick={(e) => setAnchorEl(e.currentTarget)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setAnchorEl(e.currentTarget);
                    }
                }}
            >
                <CalendarTodayOutlinedIcon
                    sx={{ fontSize: 18, color: headerColors.iconMuted }}
                />
                <Typography
                    component="span"
                    sx={{
                        fontFamily,
                        fontSize: "15px",
                        color: "#7C7C7C",
                    }}
                >
                    {displayLabel}
                </Typography>
            </Box>
            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={() => setAnchorEl(null)}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                transformOrigin={{ vertical: "top", horizontal: "left" }}
                slotProps={{
                    paper: {
                        sx: {
                            mt: 1,
                            p: 2,
                            borderRadius: "16px",
                            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                        },
                    },
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        minWidth: 280,
                    }}
                >
                    <DatePicker
                        label="Start date"
                        value={startDate}
                        onChange={handleStartDateChange}
                        maxDate={endDate || undefined}
                        slotProps={{
                            textField: {
                                size: "small",
                                fullWidth: true,
                                sx: { fontFamily },
                            },
                        }}
                    />
                    <DatePicker
                        label="End date"
                        value={endDate}
                        onChange={handleEndDateChange}
                        minDate={startDate || undefined}
                        slotProps={{
                            textField: {
                                size: "small",
                                fullWidth: true,
                                sx: { fontFamily },
                            },
                        }}
                    />
                </Box>
            </Popover>
        </LocalizationProvider>
    );
};

DateRangePickerPill.propTypes = {
    startDate: PropTypes.object,
    endDate: PropTypes.object,
    onChange: PropTypes.func,
    sx: PropTypes.object,
};

export default DateRangePickerPill;
