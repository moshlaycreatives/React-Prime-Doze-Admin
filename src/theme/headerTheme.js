import { fontFamily } from "./responsiveTypography.js";

export const headerColors = {
  pillBg: "#F5F5F5",
  pillHover: "#ECEEF1",
  searchBorder: "#E8E8E8",
  searchIcon: "#9CA3AF",
  searchPlaceholder: "#9CA3AF",
  iconMuted: "#6B7280",
  nameBlue: "#3B82F6",
  roleGray: "#6B7280",
  bellBg: "#FFFFFF",
  white:"#FFFFFF",
};

export const headerPillSx = {
  backgroundColor: headerColors.pillBg,
  borderRadius: "999px",
  fontFamily,
  boxShadow: "none",
  transition: "background-color 0.2s ease, border-color 0.2s ease",
  "&:hover": {
    backgroundColor: headerColors.pillHover,
  },
};

/** Search bar pill — matches design reference (outline icon, soft border) */
export const searchBarSx = {
  ...headerPillSx,
  border: `1px solid ${headerColors.searchBorder}`,
  "&:hover": {
    backgroundColor: headerColors.white,
    borderColor: headerColors.nameBlue,
  },
};
