import { Box, LinearProgress, Typography } from "@mui/material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import { chartFs, fontFamily } from "../../../theme/responsiveTypography";

const TOTAL_ORDERS = 7550;
const COMPLETE_ORDERS = 6550;
const PENDING_ORDERS = 820;
const CANCELLED_ORDERS = 180;

const COMPLETION_RATE = Math.round((COMPLETE_ORDERS / TOTAL_ORDERS) * 100);

const formatNumber = (value) =>
    value.toLocaleString("en-US", { maximumFractionDigits: 0 });

const orderRows = [
    {
        label: "Total Orders",
        value: TOTAL_ORDERS,
        icon: ShoppingBagOutlinedIcon,
        variant: "primary",
        bg: "#3B82F6",
        iconBg: "rgba(255, 255, 255, 0.2)",
        textColor: "#FFFFFF",
        iconColor: "#FFFFFF",
    },
    {
        label: "Complete Orders",
        value: COMPLETE_ORDERS,
        icon: CheckCircleOutlinedIcon,
        variant: "success",
        bg: "#E8F8EF",
        iconBg: "#D1FAE5",
        textColor: "#16A34A",
        iconColor: "#16A34A",
    },
    {
        label: "Pending Orders",
        value: PENDING_ORDERS,
        icon: AccessTimeOutlinedIcon,
        variant: "warning",
        bg: "#FFF4E8",
        iconBg: "#FFEDD5",
        textColor: "#EA580C",
        iconColor: "#EA580C",
    },
    {
        label: "Cancelled Orders",
        value: CANCELLED_ORDERS,
        icon: HighlightOffOutlinedIcon,
        variant: "danger",
        bg: "#FEECEC",
        iconBg: "#FECACA",
        textColor: "#DC2626",
        iconColor: "#DC2626",
    },
];

const PrimeStoreOrders = () => {
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
                Prime Store Orders
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.25, flex: 1 }}>
                {orderRows.map((row) => {
                    const Icon = row.icon;

                    return (
                        <Box
                            key={row.label}
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                gap: 1.5,
                                px: 1.5,
                                py: 1.25,
                                borderRadius: "10px",
                                backgroundColor: row.bg,
                            }}
                        >
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1.25, minWidth: 0 }}>
                                <Box
                                    sx={{
                                        width: 36,
                                        height: 36,
                                        borderRadius: "8px",
                                        backgroundColor: row.iconBg,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        flexShrink: 0,
                                    }}
                                >
                                    <Icon sx={{ fontSize: 20, color: row.iconColor }} />
                                </Box>
                                <Typography
                                    sx={{
                                        fontFamily,
                                        fontSize: chartFs.rowLabel,
                                        fontWeight: row.variant === "primary" ? 500 : 400,
                                        color: row.textColor,
                                        lineHeight: 1.3,
                                        whiteSpace: "nowrap",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                    }}
                                >
                                    {row.label}
                                </Typography>
                            </Box>
                            <Typography
                                sx={{
                                    fontFamily,
                                    fontSize: chartFs.rowValue,
                                    fontWeight: 600,
                                    color: row.textColor,
                                    lineHeight: 1.3,
                                    flexShrink: 0,
                                }}
                            >
                                {formatNumber(row.value)}
                            </Typography>
                        </Box>
                    );
                })}
            </Box>

            <Box sx={{ mt: { xs: 2, md: 2.5 } }}>
                <LinearProgress
                    variant="determinate"
                    value={COMPLETION_RATE}
                    sx={{
                        height: 6,
                        borderRadius: "999px",
                        backgroundColor: "#E5E7EB",
                        "& .MuiLinearProgress-bar": {
                            borderRadius: "999px",
                            backgroundColor: "#22C55E",
                        },
                    }}
                />
                <Typography
                    sx={{
                        fontFamily,
                        fontSize: chartFs.caption,
                        fontWeight: 400,
                        color: "#9CA3AF",
                        lineHeight: 1.3,
                        mt: 1,
                        
                    }}
                >
                    {COMPLETION_RATE}% completion rate
                </Typography>
            </Box>
        </Box>
    );
};

export default PrimeStoreOrders;
