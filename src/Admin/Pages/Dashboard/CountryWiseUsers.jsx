import { Box, Typography } from "@mui/material";
import { chartFs, fontFamily } from "../../../theme/responsiveTypography";

const ORANGE_COLOR = "#FF9800";
const GREEN_COLOR = "#00C853";

const INDIA_USERS = 101230;
const PAKISTAN_USERS = 48770;
const TOTAL_USERS = INDIA_USERS + PAKISTAN_USERS;

const indiaPercent = Math.round((INDIA_USERS / TOTAL_USERS) * 100);
const pakistanPercent = 100 - indiaPercent;

const CHART_SIZE = 170;
const CENTER = CHART_SIZE / 2;
const RADIUS = CHART_SIZE / 2;

const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180;
    return {
        x: centerX + radius * Math.cos(angleInRadians),
        y: centerY + radius * Math.sin(angleInRadians),
    };
};

const describeArc = (x, y, radius, startAngle, endAngle) => {
    const start = polarToCartesian(x, y, radius, endAngle);
    const end = polarToCartesian(x, y, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    return [
        "M",
        x,
        y,
        "L",
        start.x,
        start.y,
        "A",
        radius,
        radius,
        0,
        largeArcFlag,
        0,
        end.x,
        end.y,
        "Z",
    ].join(" ");
};

const getLabelPosition = (startPercent, sweepPercent) => {
    const angleDeg = (startPercent + sweepPercent / 2) * 3.6 - 90;
    const angleRad = (angleDeg * Math.PI) / 180;
    const labelRadius = RADIUS * 0.62;

    return {
        x: CENTER + labelRadius * Math.cos(angleRad),
        y: CENTER + labelRadius * Math.sin(angleRad),
    };
};

const indiaLabelPos = getLabelPosition(0, indiaPercent);
const pakistanLabelPos = getLabelPosition(indiaPercent, pakistanPercent);

const indiaArcPath = describeArc(CENTER, CENTER, RADIUS, 0, indiaPercent * 3.6);
const pakistanArcPath = describeArc(
    CENTER,
    CENTER,
    RADIUS,
    indiaPercent * 3.6,
    360
);

const formatNumber = (value) =>
    value.toLocaleString("en-US", { maximumFractionDigits: 0 });

const legendItems = [
    { label: "India", value: INDIA_USERS, color: ORANGE_COLOR },
    { label: "Pakistan", value: PAKISTAN_USERS, color: GREEN_COLOR },
];

const CountryWiseUsers = () => {
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
                Country-wise Users
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
                    component="svg"
                    width={CHART_SIZE}
                    height={CHART_SIZE}
                    viewBox={`0 0 ${CHART_SIZE} ${CHART_SIZE}`}
                    sx={{
                        display: "block",
                        width: chartFs.pieSize,
                        height: chartFs.pieSize,
                    }}
                >
                    <path d={indiaArcPath} fill={ORANGE_COLOR} />
                    <path d={pakistanArcPath} fill={GREEN_COLOR} />

                    <text
                        x={indiaLabelPos.x}
                        y={indiaLabelPos.y}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill="#FFFFFF"
                        fontSize="13"
                        fontWeight="600"
                        fontFamily={fontFamily}
                    >
                        {indiaPercent}%
                    </text>
                    <text
                        x={pakistanLabelPos.x}
                        y={pakistanLabelPos.y}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill="#FFFFFF"
                        fontSize="13"
                        fontWeight="600"
                        fontFamily={fontFamily}
                    >
                        {pakistanPercent}%
                    </text>
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
                                    fontSize: chartFs.legendLabelLg,
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
                                fontWeight: 600,
                                color: "#2F2F2F",
                                lineHeight: 1.3,
                            }}
                        >
                            {formatNumber(item.value)}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default CountryWiseUsers;
