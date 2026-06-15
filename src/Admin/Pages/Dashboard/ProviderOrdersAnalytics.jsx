import { Box, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { chartFs, fontFamily } from "../../../theme/responsiveTypography";
import { headerPillSx } from "../../../theme/headerTheme";

const MAX_VALUE = 30;

const segments = [
    { key: "red", color: "#EF4B4B" },
    { key: "teal", color: "#02B2D2" },
    { key: "pink", color: "#D735FF" },
];

const ordersData = [
    { month: "Jan", red: 10, teal: 4, pink: 1 },
    { month: "Feb", red: 4, teal: 5, pink: 4 },
    { month: "Mar", red: 11, teal: 1, pink: 5 },
    { month: "Apr", red: 5, teal: 9, pink: 5 },
    { month: "May", red: 9, teal: 8, pink: 2 },
    { month: "Jun", red: 7, teal: 3, pink: 1.5 },
    { month: "Jul", red: 8, teal: 1, pink: 5.5 },
    { month: "Aug", red: 11.5, teal: 3, pink: 2.5 },
    { month: "Sep", red: 5, teal: 1, pink: 2.5 },
    { month: "Oct", red: 11, teal: 1, pink: 5 },
    { month: "Nov", red: 9, teal: 8, pink: 2 },
    { month: "Dec", red: 4, teal: 5, pink: 4 },
];

const yAxisLabels = ["30k", "25k", "20k", "15k", "10k", "5k", "0k"];

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

const getTotal = (item) => item.red + item.teal + item.pink;

const ProviderOrdersAnalytics = () => {
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
                    Provider Orders Analytics
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
                            borderBottom: "1px solid #E5E7EB",
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
                            }}
                        >
                            {ordersData.map((item) => {
                                const total = getTotal(item);

                                return (
                                    <Box
                                        key={item.month}
                                        sx={{
                                            flex: 1,
                                            height: "100%",
                                            display: "flex",
                                            alignItems: "flex-end",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: chartFs.barWidth,
                                                height: `${(total / MAX_VALUE) * 100}%`,
                                                borderRadius: "999px",
                                                overflow: "hidden",
                                                display: "flex",
                                                flexDirection: "column-reverse",
                                                flexShrink: 0,
                                                minHeight: 4,
                                            }}
                                        >
                                            {segments.map((segment) => (
                                                <Box
                                                    key={segment.key}
                                                    sx={{
                                                        flex: item[segment.key],
                                                        backgroundColor: segment.color,
                                                        minHeight:
                                                            item[segment.key] > 0 ? 2 : 0,
                                                    }}
                                                />
                                            ))}
                                        </Box>
                                    </Box>
                                );
                            })}
                        </Box>
                    </Box>

                    <Box sx={{ display: "flex", mt: 1 }}>
                        {ordersData.map((item) => (
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

export default ProviderOrdersAnalytics;
