import { Box, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { chartFs, fontFamily } from "../../../theme/responsiveTypography";
import { headerPillSx } from "../../../theme/headerTheme";

const MAX_VALUE = 500;

const countryData = [
    { month: "Jan", orange: 0, green: 0 },
    { month: "Feb", orange: 80, green: 55 },
    { month: "Mar", orange: 350, green: 320 },
    { month: "Apr", orange: 430, green: 280 },
    { month: "May", orange: 300, green: 220 },
    { month: "Jun", orange: 330, green: 170 },
    { month: "Jul", orange: 250, green: 260 },
    { month: "Aug", orange: 130, green: 180 },
    { month: "Sep", orange: 200, green: 280 },
    { month: "Oct", orange: 270, green: 350 },
    { month: "Nov", orange: 250, green: 380 },
    { month: "Dec", orange: 230, green: 140 },
];

const yAxisLabels = ["500k", "400k", "300k", "200k", "100k", "0k"];

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

const getSmoothLinePath = (values, chartWidth, chartHeight) => {
    const points = values.map((value, index) => ({
        x: (index / (values.length - 1)) * chartWidth,
        y: chartHeight - (value / MAX_VALUE) * chartHeight,
    }));

    if (points.length < 2) return "";

    let path = `M ${points[0].x} ${points[0].y}`;

    for (let i = 0; i < points.length - 1; i++) {
        const current = points[i];
        const next = points[i + 1];
        const controlX = (current.x + next.x) / 2;
        path += ` C ${controlX} ${current.y}, ${controlX} ${next.y}, ${next.x} ${next.y}`;
    }

    return path;
};

const getAreaPath = (linePath, chartWidth, chartHeight) =>
    `${linePath} L ${chartWidth} ${chartHeight} L 0 ${chartHeight} Z`;

const CHART_WIDTH = 1000;
const CHART_HEIGHT = 240;

const orangeLinePath = getSmoothLinePath(
    countryData.map((d) => d.orange),
    CHART_WIDTH,
    CHART_HEIGHT
);
const greenLinePath = getSmoothLinePath(
    countryData.map((d) => d.green),
    CHART_WIDTH,
    CHART_HEIGHT
);

const CountryAnalytics = () => {
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
                    Country Analytics
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
                            <defs>
                                <linearGradient
                                    id="orangeAreaGradient"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="1"
                                >
                                    <stop offset="0%" stopColor={ORANGE_COLOR} stopOpacity="0.35" />
                                    <stop offset="100%" stopColor={ORANGE_COLOR} stopOpacity="0" />
                                </linearGradient>
                                <linearGradient
                                    id="greenAreaGradient"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="1"
                                >
                                    <stop offset="0%" stopColor={GREEN_COLOR} stopOpacity="0.35" />
                                    <stop offset="100%" stopColor={GREEN_COLOR} stopOpacity="0" />
                                </linearGradient>
                            </defs>

                            <path
                                d={getAreaPath(orangeLinePath, CHART_WIDTH, CHART_HEIGHT)}
                                fill="url(#orangeAreaGradient)"
                            />
                            <path
                                d={getAreaPath(greenLinePath, CHART_WIDTH, CHART_HEIGHT)}
                                fill="url(#greenAreaGradient)"
                            />

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
                        </Box>
                    </Box>

                    <Box sx={{ display: "flex", mt: 1 }}>
                        {countryData.map((item) => (
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

export default CountryAnalytics;
