import PropTypes from "prop-types";
import { Box, MenuItem, Select, Typography } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { fontFamily } from "../../theme/responsiveTypography";
import { headerColors, searchBarSx } from "../../theme/headerTheme";
import DateRangePickerPill from "../DateRangePickerPill";

const sortLabelSx = {
    fontFamily,
    fontSize: "18px",
    fontWeight: 400,
    color: "#2F2F2F",
    whiteSpace: "nowrap",
};

const selectSx = {
    fontFamily,
    fontSize: "15px",
    color: "#7C7C7C",
    height: 48,
    minWidth: 140,
    borderRadius: "999px",
    backgroundColor: "#FFFFFF",
    "& .MuiOutlinedInput-notchedOutline": {
        borderColor: headerColors.searchBorder,
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: headerColors.nameBlue,
    },
    "& .MuiSelect-select": {
        py: 1.25,
        px: 2,
    },
    "& .MuiSvgIcon-root": {
        color: "#7C7C7C",
    },
};

const TableFilterBar = ({
    search = "",
    onSearchChange,
    searchPlaceholder = "Search...",
    searchAriaLabel = "Search",
    country,
    onCountryChange,
    countryOptions,
    gender,
    onGenderChange,
    genderOptions,
    startDate,
    endDate,
    onDateRangeChange,
    sortBy,
    onSortChange,
    sortOptions,
    totalBadge,
    sx,
}) => {
    const showCountry = Boolean(countryOptions?.length && onCountryChange);
    const showGender = Boolean(genderOptions?.length && onGenderChange);
    const showDateRange = Boolean(onDateRangeChange);
    const showSort = Boolean(sortOptions?.length && onSortChange);

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 2,
                mb: 1.5,
                ...sx,
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: 1.5,
                    flex: 1,
                    minWidth: 0,
                }}
            >
                <Box
                    component="form"
                    onSubmit={(e) => e.preventDefault()}
                    sx={{
                        ...searchBarSx,
                        flex: "1 1 220px",
                        maxWidth: 320,
                        height: 48,
                        display: "flex",
                        alignItems: "center",
                        gap: 1.25,
                        pl: 1.25,
                        pr: 2,
                        py: 0.75,
                        backgroundColor: "#FFFFFF",
                    }}
                >
                    <Box
                        sx={{
                            width: 36,
                            height: 36,
                            borderRadius: "50%",
                            backgroundColor: headerColors.bellBg,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                        }}
                    >
                        <SearchOutlinedIcon
                            aria-hidden
                            sx={{ fontSize: 20, color: headerColors.iconMuted }}
                        />
                    </Box>
                    <Box
                        component="input"
                        type="text"
                        value={search}
                        onChange={(e) => onSearchChange?.(e.target.value)}
                        placeholder={searchPlaceholder}
                        aria-label={searchAriaLabel}
                        sx={{
                            border: "none",
                            outline: "none",
                            background: "transparent",
                            flex: 1,
                            minWidth: 0,
                            p: 0,
                            fontFamily,
                            fontSize: "15px",
                            color: "#374151",
                            "&::placeholder": {
                                color: headerColors.searchPlaceholder,
                                opacity: 1,
                            },
                        }}
                    />
                </Box>

                {showCountry && (
                    <Select
                        value={country}
                        onChange={(e) => onCountryChange(e.target.value)}
                        displayEmpty
                        IconComponent={KeyboardArrowDownIcon}
                        sx={{
                            ...selectSx,
                            minWidth: 130,
                        }}
                        renderValue={(selected) =>
                            countryOptions.find((option) => option.value === selected)?.label
                        }
                    >
                        {countryOptions.map((option) => (
                            <MenuItem
                                key={option.value}
                                value={option.value}
                                sx={{ fontFamily, fontSize: "15px" }}
                            >
                                {option.label}
                            </MenuItem>
                        ))}
                    </Select>
                )}

                {showGender && (
                    <Select
                        value={gender}
                        onChange={(e) => onGenderChange(e.target.value)}
                        displayEmpty
                        IconComponent={KeyboardArrowDownIcon}
                        sx={{
                            ...selectSx,
                            minWidth: 120,
                        }}
                        renderValue={(selected) =>
                            genderOptions.find((option) => option.value === selected)?.label
                        }
                    >
                        {genderOptions.map((option) => (
                            <MenuItem
                                key={option.value}
                                value={option.value}
                                sx={{ fontFamily, fontSize: "15px" }}
                            >
                                {option.label}
                            </MenuItem>
                        ))}
                    </Select>
                )}

                {showDateRange && (
                    <DateRangePickerPill
                        startDate={startDate}
                        endDate={endDate}
                        onChange={onDateRangeChange}
                    />
                )}

                {totalBadge && (
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            height: 48,
                            px: 2,
                            borderRadius: "999px",
                            backgroundColor: "#FFFFFF",
                            border: `1px solid ${headerColors.searchBorder}`,
                            whiteSpace: "nowrap",
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily,
                                fontSize: "15px",
                                fontWeight: 400,
                                color: "#7C7C7C",
                            }}
                        >
                            {totalBadge.label}
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily,
                                fontSize: "18px",
                                fontWeight: 600,
                                color: "#2F2F2F",
                            }}
                        >
                            {totalBadge.count.toLocaleString()}
                        </Typography>
                    </Box>
                )}
            </Box>

            {showSort && (
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Typography sx={sortLabelSx}>Sort:</Typography>
                    <Select
                        value={sortBy}
                        onChange={(e) => onSortChange(e.target.value)}
                        IconComponent={KeyboardArrowDownIcon}
                        sx={{
                            ...selectSx,
                            minWidth: 160,
                        }}
                    >
                        {sortOptions.map((option) => (
                            <MenuItem
                                key={option.value}
                                value={option.value}
                                sx={{ fontFamily, fontSize: "15px" }}
                            >
                                {option.label}
                            </MenuItem>
                        ))}
                    </Select>
                </Box>
            )}
        </Box>
    );
};

const filterOptionShape = PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
});

TableFilterBar.propTypes = {
    search: PropTypes.string,
    onSearchChange: PropTypes.func,
    searchPlaceholder: PropTypes.string,
    searchAriaLabel: PropTypes.string,
    country: PropTypes.string,
    onCountryChange: PropTypes.func,
    countryOptions: PropTypes.arrayOf(filterOptionShape),
    gender: PropTypes.string,
    onGenderChange: PropTypes.func,
    genderOptions: PropTypes.arrayOf(filterOptionShape),
    startDate: PropTypes.object,
    endDate: PropTypes.object,
    onDateRangeChange: PropTypes.func,
    sortBy: PropTypes.string,
    onSortChange: PropTypes.func,
    sortOptions: PropTypes.arrayOf(filterOptionShape),
    totalBadge: PropTypes.shape({
        label: PropTypes.string.isRequired,
        count: PropTypes.number.isRequired,
    }),
    sx: PropTypes.object,
};

export default TableFilterBar;
