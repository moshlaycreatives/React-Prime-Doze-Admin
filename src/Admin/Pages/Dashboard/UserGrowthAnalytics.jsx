import { Box, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { chartFs, fontFamily } from "../../../theme/responsiveTypography";
import { headerPillSx } from "../../../theme/headerTheme";


const MAX_VALUE = 100;

const categories = [
    { key: "patients", label: "Patients", color: "#1472FF" },
    { key: "doctors", label: "Doctors", color: "#28B446" },
    { key: "labs", label: "Labs", color: "#EF4B4B" },
    { key: "pharmacies", label: "Pharmacies", color: "#D735FF" },
    { key: "opticalStores", label: "Optical Stores", color: "#02B2D2" },
];

const growthData = [
    {
        month: "Jan 2026",
        patients: 55,
        doctors: 82,
        labs: 52,
        pharmacies: 68,
        opticalStores: 42,
    },
    {
        month: "Feb 2026",
        patients: 70,
        doctors: 40,
        labs: 20,
        pharmacies: 58,
        opticalStores: 25,
    },
    {
        month: "Mar 2026",
        patients: 92,
        doctors: 22,
        labs: 35,
        pharmacies: 48,
        opticalStores: 10,
    },
    {
        month: "Apr 2026",
        patients: 75,
        doctors: 32,
        labs: 48,
        pharmacies: 45,
        opticalStores: 48,
    },
    {
        month: "May 2026",
        patients: 58,
        doctors: 82,
        labs: 55,
        pharmacies: 68,
        opticalStores: 45,
    },
    {
        month: "Jun 2026",
        patients: 75,
        doctors: 40,
        labs: 55,
        pharmacies: 50,
        opticalStores: 25,
    },
];

const yAxisLabels = ["100k", "75k", "50k", "25k", "0k"];

const filterPillSx = {
    ...headerPillSx,
    display: "flex",
    alignItems: "center",
    gap: 0.5,
    px: 1.75,
    py: 0.75,
    cursor: "pointer",
    userSelect: "none",
};

const UserGrowthAnalytics = () => {
    return (
        <Box
            sx={{
                containerType: "inline-size",
                width: "100%",
                height: "100%",
                backgroundColor: "#FFFFFF",
                borderRadius: "12px",
                p: { xs: 2, md: 2.5 },
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 2,
                    mb: { xs: 1.5, md: 2 },
                }}
            >
                <Typography
                    sx={{
                        fontFamily,
                        fontSize: chartFs.title,
                        fontWeight: 600,
                        color: "#2F2F2F",
                        lineHeight: 1.3,
                        minWidth: 0,
                        flex: 1,
                    }}
                >
                    User Growth Analytics
                </Typography>

                <Box sx={{ ...filterPillSx, flexShrink: 0 }}>
                    <Typography
                        sx={{
                            fontFamily,
                            fontSize: chartFs.filter,
                            fontWeight: 400,
                            color: "#6B7280",
                            lineHeight: 1.3,
                        }}
                    >
                        last 6 months
                    </Typography>
                    <KeyboardArrowDownIcon
                        sx={{ fontSize: 18, color: "#9CA3AF" }}
                    />
                </Box>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    gap: { xs: 1, md: 1.5 },
                    mb: { xs: 2, md: 2.5 },
                }}
            >
                {categories.map((category) => (
                    <Box
                        key={category.key}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 0.75,
                        }}
                    >
                        <Box
                            sx={{
                                width: 10,
                                height: 10,
                                borderRadius: "50%",
                                backgroundColor: category.color,
                                flexShrink: 0,
                            }}
                        />
                        <Typography
                            sx={{
                                fontFamily,
                                fontSize: chartFs.categoryLabel,
                                fontWeight: 400,
                                color: "#7C7C7C",
                                lineHeight: 1.3,
                                whiteSpace: "nowrap",
                            }}
                        >
                            {category.label}
                        </Typography>
                    </Box>
                ))}
            </Box>

            <Box
                sx={{
                    display: "flex",
                    gap: { xs: 1, md: 1.5 },
                    height: chartFs.chartHeight,
                    flex: 1,
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        flexShrink: 0,
                        pb: 3.5,
                        pt: 0.5,
                    }}
                >
                    {yAxisLabels.map((label) => (
                        <Typography
                            key={label}
                            sx={{
                                fontFamily,
                                fontSize: chartFs.labelLg,
                                fontWeight: 400,
                                color: "#2F2F2F",
                                lineHeight: 1,
                            }}
                        >
                            {label}
                        </Typography>
                    ))}
                </Box>

                <Box sx={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column" }}>
                    <Box
                        sx={{
                            position: "relative",
                            flex: 1,
                            borderBottom: "1px solid #D1D5DB",
                        }}
                    >
                        {yAxisLabels.map((label, index) => (
                            <Box
                                key={label}
                                sx={{
                                    position: "absolute",
                                    left: 0,
                                    right: 0,
                                    top: `${(index / (yAxisLabels.length - 1)) * 100}%`,
                                    borderTop:
                                        index === yAxisLabels.length - 1
                                            ? "none"
                                            : "1px dashed #E5E7EB",
                                    pointerEvents: "none",
                                }}
                            />
                        ))}

                        <Box
                            sx={{
                                position: "relative",
                                zIndex: 1,
                                display: "flex",
                                alignItems: "flex-end",
                                width: "100%",
                                height: "100%",
                                gap: 0,
                            }}
                        >
                            {growthData.map((item) => (
                                <Box
                                    key={item.month}
                                    sx={{
                                        flex: 1,
                                        height: "100%",
                                        display: "flex",
                                        alignItems: "flex-end",
                                        justifyContent: "center",
                                        px: { xs: 0.25, md: 0.5 },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "flex-end",
                                            justifyContent: "center",
                                            // gap: { xs: "2px", md: "4px" },
                                            width: "100%",
                                            height: "100%",
                                        }}
                                    >
                                        {categories.map((category) => (
                                            <Box
                                                key={category.key}
                                                sx={{
                                                    flex: 1,
                                                    maxWidth: chartFs.barMaxWidth,
                                                    height: `${(item[category.key] / MAX_VALUE) * 100}%`,
                                                    backgroundColor: category.color,
                                                    borderRadius: "6px 6px 0 0",
                                                    minHeight: 2,
                                                    transition: "height 0.2s ease",
                                                }}
                                            />
                                        ))}
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Box>

                    <Box sx={{ display: "flex", mt: 1 }}>
                        {growthData.map((item) => (
                            <Typography
                                key={item.month}
                                sx={{
                                    flex: 1,
                                    fontFamily,
                                    fontSize: chartFs.labelLg,
                                    fontWeight: 400,
                                    color: "#2F2F2F",
                                    textAlign: "center",
                                    lineHeight: 1.3,
                                }}
                            >
                                {item.month}
                            </Typography>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default UserGrowthAnalytics;
