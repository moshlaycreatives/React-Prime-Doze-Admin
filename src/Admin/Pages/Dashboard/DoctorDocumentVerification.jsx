import { Box, Typography } from "@mui/material";
import { chartFs, fontFamily } from "../../../theme/responsiveTypography";

const GREEN_COLOR = "#28B446";
const BLUE_COLOR = "#1472FF";
const RED_COLOR = "#EF4B4B";

const COMPLETE = 2480;
const PENDING = 320;
const REJECTED = 156;

const completePercent = 78;
const pendingPercent = 13;
const rejectedPercent = 9;

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

const getLabelPosition = (startPercent, sweepPercent, radiusFactor = 0.62) => {
    const midAngle = (startPercent + sweepPercent / 2) * 3.6;
    const angleDeg = midAngle - 90;
    const angleRad = (angleDeg * Math.PI) / 180;
    const labelRadius = RADIUS * radiusFactor;

    return {
        x: CENTER + labelRadius * Math.cos(angleRad),
        y: CENTER + labelRadius * Math.sin(angleRad),
        rotation: midAngle,
    };
};

const completeStart = 0;
const pendingStart = completePercent;
const rejectedStart = completePercent + pendingPercent;

const completeArcPath = describeArc(
    CENTER,
    CENTER,
    RADIUS,
    completeStart * 3.6,
    (completeStart + completePercent) * 3.6
);
const pendingArcPath = describeArc(
    CENTER,
    CENTER,
    RADIUS,
    pendingStart * 3.6,
    (pendingStart + pendingPercent) * 3.6
);
const rejectedArcPath = describeArc(
    CENTER,
    CENTER,
    RADIUS,
    rejectedStart * 3.6,
    360
);

const completeLabelPos = getLabelPosition(completeStart, completePercent);
const pendingLabelPos = getLabelPosition(pendingStart, pendingPercent);
const rejectedLabelPos = getLabelPosition(rejectedStart, rejectedPercent, 0.88);

const formatNumber = (value) =>
    value.toLocaleString("en-US", { maximumFractionDigits: 0 });

const legendItems = [
    { label: "Complete", value: COMPLETE, color: GREEN_COLOR },
    { label: "Pending", value: PENDING, color: BLUE_COLOR },
    { label: "Rejected", value: REJECTED, color: RED_COLOR },
];

const DoctorDocumentVerification = () => {
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
                Doctor Document Verification
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
                    <path d={completeArcPath} fill={GREEN_COLOR} />
                    <path d={pendingArcPath} fill={BLUE_COLOR} />
                    <path d={rejectedArcPath} fill={RED_COLOR} />

                    {completePercent >= 5 && (
                        <text
                            x={completeLabelPos.x}
                            y={completeLabelPos.y}
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fill="#FFFFFF"
                            fontSize="13"
                            fontWeight="600"
                            fontFamily={fontFamily}
                        >
                            {completePercent}%
                        </text>
                    )}
                    {pendingPercent >= 5 && (
                        <text
                            x={pendingLabelPos.x}
                            y={pendingLabelPos.y}
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fill="#FFFFFF"
                            fontSize="13"
                            fontWeight="600"
                            fontFamily={fontFamily}
                        >
                            {pendingPercent}%
                        </text>
                    )}
                    <text
                        x={rejectedLabelPos.x}
                        y={rejectedLabelPos.y}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill="#FFFFFF"
                        fontSize="13"
                        fontWeight="600"
                        fontFamily={fontFamily}
                        
                        // transform={`rotate(-90, ${rejectedLabelPos.x}, ${rejectedLabelPos.y})`}
                    >
                        {rejectedPercent}%
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
                                    fontSize: chartFs.legendLabel,
                                    fontWeight: 400,
                                    color: "#6B7280",
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
                                color: "#1F2937",
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

export default DoctorDocumentVerification;
