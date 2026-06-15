import { Box, Typography } from "@mui/material";
import { chartFs, fontFamily } from "../../../theme/responsiveTypography";

const BLUE_COLOR = "#1472FF";
const GREEN_COLOR = "#28B446";

const TOTAL_REVENUE = 780254;
const SUBSCRIPTIONS = 569585;
const PRIME_STORE = 210669;

const bluePercent = Math.round((SUBSCRIPTIONS / TOTAL_REVENUE) * 100);
const greenPercent = 100 - bluePercent;

const CHART_SIZE = 220;
const CENTER = CHART_SIZE / 2;
const RADIUS = 78;
const STROKE_WIDTH = 32;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const blueArcLength = (bluePercent / 100) * CIRCUMFERENCE;
const greenArcLength = (greenPercent / 100) * CIRCUMFERENCE;

const getLabelPosition = (startPercent, sweepPercent) => {
    const angleDeg = -90 + (startPercent + sweepPercent / 2) * 3.6;
    const angleRad = (angleDeg * Math.PI) / 180;
    const labelRadius = RADIUS;

    return {
        x: CENTER + labelRadius * Math.cos(angleRad),
        y: CENTER + labelRadius * Math.sin(angleRad),
    };
};

const blueLabelPos = getLabelPosition(0, bluePercent);
const greenLabelPos = getLabelPosition(bluePercent, greenPercent);

const formatCurrency = (value) =>
    `$${value.toLocaleString("en-US", { maximumFractionDigits: 0 })}`;

const legendItems = [
    { label: "Subscriptions", value: SUBSCRIPTIONS, color: BLUE_COLOR },
    { label: "Prime Store", value: PRIME_STORE, color: GREEN_COLOR },
];

const RevenueBreakdown = () => {
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
            <Typography
                sx={{
                    fontFamily,
                    fontSize: chartFs.title,
                    fontWeight: 600,
                    color: "#2F2F2F",
                    lineHeight: 1.3,
                    mb: { xs: 2, md: 2.5 },
                }}
            >
                Revenue Breakdown
            </Typography>

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: 1,
                    mb: { xs: 2, md: 2.5 },
                }}
            >
                <Box
                    sx={{
                        position: "relative",
                        width: chartFs.donutSize,
                        height: chartFs.donutSize,
                    }}
                >
                    <Box
                        component="svg"
                        width={CHART_SIZE}
                        height={CHART_SIZE}
                        viewBox={`0 0 ${CHART_SIZE} ${CHART_SIZE}`}
                        sx={{
                            display: "block",
                            width: "100%",
                            height: "100%",
                        }}
                    >
                        <circle
                            cx={CENTER}
                            cy={CENTER}
                            r={RADIUS}
                            fill="none"
                            stroke={BLUE_COLOR}
                            strokeWidth={STROKE_WIDTH}
                            strokeDasharray={`${blueArcLength} ${CIRCUMFERENCE}`}
                            strokeLinecap="butt"
                            transform={`rotate(-90 ${CENTER} ${CENTER})`}
                        />
                        <circle
                            cx={CENTER}
                            cy={CENTER}
                            r={RADIUS}
                            fill="none"
                            stroke={GREEN_COLOR}
                            strokeWidth={STROKE_WIDTH}
                            strokeDasharray={`${greenArcLength} ${CIRCUMFERENCE}`}
                            strokeDashoffset={-blueArcLength}
                            strokeLinecap="butt"
                            transform={`rotate(-90 ${CENTER} ${CENTER})`}
                        />

                        <text
                            x={blueLabelPos.x}
                            y={blueLabelPos.y}
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fill="#FFFFFF"
                            fontSize="13"
                            fontWeight="600"
                            fontFamily={fontFamily}
                        >
                            {bluePercent}%
                        </text>
                        <text
                            x={greenLabelPos.x}
                            y={greenLabelPos.y}
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fill="#FFFFFF"
                            fontSize="13"
                            fontWeight="600"
                            fontFamily={fontFamily}
                        >
                            {greenPercent}%
                        </text>
                    </Box>

                    <Box
                        sx={{
                            position: "absolute",
                            inset: 0,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            pointerEvents: "none",
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily,
                                fontSize: chartFs.centerLabel,
                                fontWeight: 400,
                                color: "#7C7C7C",
                                lineHeight: 1.3,
                                mb: 0.25,
                            }}
                        >
                            Total Revenue
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily,
                                fontSize: chartFs.centerValue,
                                fontWeight: 700,
                                color: "#2F2F2F",
                                lineHeight: 1.2,
                            }}
                        >
                            {formatCurrency(TOTAL_REVENUE)}
                        </Typography>
                    </Box>
                </Box>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                {legendItems.map((item) => (
                    <Box
                        key={item.label}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: 1,
                        }}
                    >
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                            <Box
                                sx={{
                                    width: 10,
                                    height: 10,
                                    borderRadius: "50%",
                                    backgroundColor: item.color,
                                    flexShrink: 0,
                                }}
                            />
                            <Typography
                                sx={{
                                    fontFamily,
                                    fontSize: chartFs.legendLabel,
                                    fontWeight: 400,
                                    color: "#7C7C7C",
                                    lineHeight: 1.3,
                                }}
                            >
                                {item.label}
                            </Typography>
                        </Box>
                        <Typography
                            sx={{
                                fontFamily,
                                fontSize: chartFs.legendValue,
                                fontWeight: 700,
                                color: "#2F2F2F",
                                lineHeight: 1.3,
                            }}
                        >
                            {formatCurrency(item.value)}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default RevenueBreakdown;
