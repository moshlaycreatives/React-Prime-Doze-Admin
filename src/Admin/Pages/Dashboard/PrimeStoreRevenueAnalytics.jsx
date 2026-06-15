import { Box, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { chartFs, fontFamily } from "../../../theme/responsiveTypography";
import { headerPillSx } from "../../../theme/headerTheme";

const MAX_VALUE = 50;

const revenueData = [
    { month: "Jan", orange: 20, green: 10 },
    { month: "Feb", orange: 37, green: 20 },
    { month: "Mar", orange: 20, green: 15 },
    { month: "Apr", orange: 32, green: 25 },
    { month: "May", orange: 11, green: 20 },
    { month: "Jun", orange: 20, green: 10 },
    { month: "Jul", orange: 29, green: 33 },
    { month: "Aug", orange: 15, green: 22 },
    { month: "Sep", orange: 10, green: 30 },
    { month: "Oct", orange: 32, green: 10 },
    { month: "Nov", orange: 25, green: 20 },
    { month: "Dec", orange: 35, green: 17 },
];

const yAxisLabels = ["$50k", "$40k", "$30k", "$20k", "$10k", "$0k"];

const ORANGE_COLOR = "#F2994A";
const GREEN_COLOR = "#27AE60";

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

const getLinePath = (values, chartWidth, chartHeight) => {
    const points = values.map((value, index) => ({
        x: (index / (values.length - 1)) * chartWidth,
        y: chartHeight - (value / MAX_VALUE) * chartHeight,
    }));

    return points
        .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`)
        .join(" ");
};

const getDataPoints = (values, chartWidth, chartHeight) =>
    values.map((value, index) => ({
        x: (index / (values.length - 1)) * chartWidth,
        y: chartHeight - (value / MAX_VALUE) * chartHeight,
    }));

const CHART_WIDTH = 1000;
const CHART_HEIGHT = 240;

const orangeLinePath = getLinePath(
    revenueData.map((d) => d.orange),
    CHART_WIDTH,
    CHART_HEIGHT
);
const greenLinePath = getLinePath(
    revenueData.map((d) => d.green),
    CHART_WIDTH,
    CHART_HEIGHT
);

const orangePoints = getDataPoints(
    revenueData.map((d) => d.orange),
    CHART_WIDTH,
    CHART_HEIGHT
);
const greenPoints = getDataPoints(
    revenueData.map((d) => d.green),
    CHART_WIDTH,
    CHART_HEIGHT
);

const PrimeStoreRevenueAnalytics = () => {
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
                    Prime Store Revenue by Country
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
                            component="svg"
                            viewBox={`0 0 ${CHART_WIDTH} ${CHART_HEIGHT}`}
                            preserveAspectRatio="none"
                            sx={{
                                position: "absolute",
                                inset: 0,
                                width: "100%",
                                height: "100%",
                                overflow: "visible",
                            }}
                        >
                            <path
                                d={orangeLinePath}
                                fill="none"
                                stroke={ORANGE_COLOR}
                                strokeWidth="2.5"
                                vectorEffect="non-scaling-stroke"
                            />
                            <path
                                d={greenLinePath}
                                fill="none"
                                stroke={GREEN_COLOR}
                                strokeWidth="2.5"
                                vectorEffect="non-scaling-stroke"
                            />

                            {orangePoints.map((point, index) => (
                                <circle
                                    key={`orange-${index}`}
                                    cx={point.x}
                                    cy={point.y}
                                    r="5"
                                    fill="#FFFFFF"
                                    stroke={ORANGE_COLOR}
                                    strokeWidth="2"
                                    vectorEffect="non-scaling-stroke"
                                />
                            ))}

                            {greenPoints.map((point, index) => (
                                <circle
                                    key={`green-${index}`}
                                    cx={point.x}
                                    cy={point.y}
                                    r="5"
                                    fill="#FFFFFF"
                                    stroke={GREEN_COLOR}
                                    strokeWidth="2"
                                    vectorEffect="non-scaling-stroke"
                                />
                            ))}
                        </Box>
                    </Box>

                    <Box sx={{ display: "flex", mt: 1 }}>
                        {revenueData.map((item) => (
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

export default PrimeStoreRevenueAnalytics;
