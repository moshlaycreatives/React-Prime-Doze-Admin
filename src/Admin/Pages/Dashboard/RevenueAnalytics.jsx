import { Box, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { chartFs, fontFamily } from "../../../theme/responsiveTypography";
import { headerPillSx } from "../../../theme/headerTheme";

const MAX_VALUE = 50;

const revenueData = [
    { month: "Jan", value: 8 },
    { month: "Feb", value: 18 },
    { month: "Mar", value: 14 },
    { month: "Apr", value: 23 },
    { month: "May", value: 28 },
    { month: "Jun", value: 25 },
    { month: "Jul", value: 36 },
    { month: "Aug", value: 32 },
    { month: "Sep", value: 44, highlighted: true },
    { month: "Oct", value: 28 },
    { month: "Nov", value: 34 },
    { month: "Dec", value: 25 },
];

const yAxisLabels = ["$50k", "$40k", "$30k", "$20k", "$10k", "$0k"];

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

const RevenueAnalytics = () => {
    return (
        <Box
            sx={{
                containerType: "inline-size",
                width: "100%",
                backgroundColor: "#FFFFFF",
                borderRadius: "12px",
                p: { xs: 2, md: 2.5 },
                boxSizing: "border-box",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 2,
                    mb: { xs: 2, md: 2.5 },
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
                    Revenue Analytics
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
                        last 12 months
                    </Typography>
                    <KeyboardArrowDownIcon
                        sx={{ fontSize: 18, color: "#9CA3AF" }}
                    />
                </Box>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    gap: { xs: 1, md: 1.5 },
                    height: chartFs.chartHeight,
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
                                fontSize: chartFs.label,
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
                            display: "flex",
                            alignItems: "flex-end",
                            borderBottom: "1px solid #3B82F6",
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
                            {revenueData.map((item) => (
                                <Box
                                    key={item.month}
                                    sx={{
                                        flex: 1,
                                        height: `${(item.value / MAX_VALUE) * 100}%`,
                                        backgroundColor: item.highlighted
                                            ? "#3B82F6"
                                            : "#CFE5FF",
                                        border: item.highlighted
                                            ? "none"
                                            : "1px solid #93C5FD",
                                        borderBottom: "none",
                                        boxSizing: "border-box",
                                        minHeight: 2,
                                        transition: "background-color 0.2s ease",
                                    }}
                                />
                            ))}
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            display: "flex",
                            gap: 0,
                            mt: 1,
                        }}
                    >
                        {revenueData.map((item) => (
                            <Typography
                                key={item.month}
                                sx={{
                                    flex: 1,
                                    fontFamily,
                                    fontSize: chartFs.label,
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

export default RevenueAnalytics;
