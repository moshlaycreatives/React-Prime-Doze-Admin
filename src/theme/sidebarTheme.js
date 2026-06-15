import { fontFamily } from "./responsiveTypography.js";

/** Sidebar pill menu — matches design reference (blue active, gray inactive) */
export const sidebarColors = {
  activeBg: "#3B82F6",
  activeText: "#FFFFFF",
  inactiveBg: "#F3F4F6",
  inactiveText: "#6B7280",
  inactiveIcon: "#6B7280",
  drawerBg: "#FFFFFF",
};

export const getSidebarMenuItemSx = (isActive) => ({
  backgroundColor: isActive ? sidebarColors.activeBg : sidebarColors.inactiveBg,
  color: isActive ? sidebarColors.activeText : sidebarColors.inactiveText,
  borderRadius: "999px",
  mx: 1.5,
  mb: 1,
  py: 1.25,
  px: 2,
  fontFamily,
  fontWeight: isActive ? 500 : 400,
  minHeight: 48,
  alignItems: "center",
  boxSizing: "border-box",
  transition: "background-color 0.2s ease, color 0.2s ease",
  "&:hover": {
    backgroundColor: isActive ? sidebarColors.activeBg : "#E8EAED",
  },
  "&.Mui-selected": {
    backgroundColor: isActive ? sidebarColors.activeBg : sidebarColors.inactiveBg,
    color: isActive ? sidebarColors.activeText : sidebarColors.inactiveText,
    "&:hover": {
      backgroundColor: isActive ? sidebarColors.activeBg : "#E8EAED",
    },
  },
  "& .MuiListItemIcon-root": {
    minWidth: 36,
    color: "inherit",
  },
  "& .MuiListItemText-primary": {
    color: "inherit",
    fontWeight: isActive ? 500 : 400,
  },
});

export const sidebarIconSx = (isActive) => ({
  fontSize: 22,
  color: isActive ? sidebarColors.activeText : sidebarColors.inactiveIcon,
});
