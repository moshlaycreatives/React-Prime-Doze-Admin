import { Box, Typography } from "@mui/material";
import { chartFs, fontFamily } from "../../../theme/responsiveTypography";

const GREEN_COLOR = "#00B64F";
const MAGENTA_COLOR = "#E010E0";
const CYAN_COLOR = "#00B7D1";
const RED_COLOR = "#FF4136";

const DOCTORS = 2680;
const PHARMACIES = 1240;
const OPTICAL_STORES = 980;
const LABS = 760;
const TOTAL = DOCTORS + PHARMACIES + OPTICAL_STORES + LABS;

const CHART_SIZE = 220;
const CENTER = CHART_SIZE / 2;
const RADIUS = 78;
const STROKE_WIDTH = 32;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const segments = [
    { label: "Doctors", value: DOCTORS, color: GREEN_COLOR },
    { label: "Pharmacies", value: PHARMACIES, color: MAGENTA_COLOR },
    { label: "Optical Stores", value: OPTICAL_STORES, color: CYAN_COLOR },
    { label: "Labs", value: LABS, color: RED_COLOR },
];

const arcLengths = segments.map(
    (segment) => (segment.value / TOTAL) * CIRCUMFERENCE
);

const formatNumber = (value) =>
    value.toLocaleString("en-US", { maximumFractionDigits: 0 });

const SubscriptionByType = () => {
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
                Subscription by Type
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
                        {segments.map((segment, index) => {
                            const offset = arcLengths
                                .slice(0, index)
                                .reduce((sum, length) => sum + length, 0);

                            return (
                                <circle
                                    key={segment.label}
                                    cx={CENTER}
                                    cy={CENTER}
                                    r={RADIUS}
                                    fill="none"
                                    stroke={segment.color}
                                    strokeWidth={STROKE_WIDTH}
                                    strokeDasharray={`${arcLengths[index]} ${CIRCUMFERENCE}`}
                                    strokeDashoffset={-offset}
                                    strokeLinecap="butt"
                                    transform={`rotate(-90 ${CENTER} ${CENTER})`}
                                />
                            );
                        })}
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
                                color: "#9CA3AF",
                                lineHeight: 1.3,
                                mb: 0.25,
                            }}
                        >
                            Total
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily,
                                fontSize: chartFs.centerValue,
                                fontWeight: 700,
                                color: "#1F2937",
                                lineHeight: 1.2,
                            }}
                        >
                            {formatNumber(TOTAL)}
                        </Typography>
                    </Box>
                </Box>
            </Box>

            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: { xs: 1.5, md: 2 },
                }}
            >
                {segments.map((item) => (
                    <Box
                        key={item.label}
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
                                backgroundColor: item.color,
                                flexShrink: 0,
                            }}
                        />
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                flex: 1,
                                minWidth: 0,
                                gap: 0.5,
                            }}
                        >
                            <Typography
                                sx={{
                                    fontFamily,
                                    fontSize: chartFs.legendLabel,
                                    fontWeight: 400,
                                    color: "#2F2F2F",
                                    lineHeight: 1.3,
                                    whiteSpace: "nowrap",
                                }}
                            >
                                {item.label}
                            </Typography>
                            <Typography
                                sx={{
                                    fontFamily,
                                    fontSize: chartFs.legendValue,
                                    fontWeight: 700,
                                    color: "#1F2937",
                                    lineHeight: 1.3,
                                    whiteSpace: "nowrap",
                                }}
                            >
                                {formatNumber(item.value)}
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default SubscriptionByType;
