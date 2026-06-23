import PropTypes from "prop-types";
import * as MuiIcons from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { fontFamily, fs } from "../theme/responsiveTypography.js";
import {
  getSidebarMenuItemSx,
  sidebarIconSx,
} from "../theme/sidebarTheme.js";

const normalizePath = (path) => path.replace(/\/$/, "");

/** Detail/profile routes map back to their list menu path */
const CHILD_ROUTE_PARENTS = {
  "/admin/patient-profile": "/admin/patients",
  "/admin/doctors-profile": "/admin/doctors",
  "/admin/doctor-review": "/admin/doctors",
  "/admin/hospitals-profile": "/admin/hospitals",
  "/admin/labs-profile": "/admin/labs",
  "/admin/pharmacies-profile": "/admin/pharmacies",
  "/admin/optical-stores-profile": "/admin/optical-stores",
};

const isMenuItemActive = (item, currentPath, isSignOut, isDashboardHome) => {
  if (isSignOut) return false;

  const itemPath = normalizePath(item.path);
  const parentPath = CHILD_ROUTE_PARENTS[currentPath];
  const matchesActivePaths = (item.activePaths ?? []).some(
    (path) => normalizePath(path) === currentPath
  );
  const matchesChildPrefix =
    !isDashboardHome &&
    (currentPath.startsWith(`${itemPath}/`) ||
      currentPath.startsWith(`${itemPath}-`));

  if (isDashboardHome) {
    return currentPath === itemPath;
  }

  return (
    currentPath === itemPath ||
    parentPath === itemPath ||
    matchesActivePaths ||
    matchesChildPrefix
  );
};

const SidebarMenuList = ({ menuData, onSignOut, onMenuItemClick }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = normalizePath(location.pathname);

  const renderIcon = (iconName, isActive) => {
    if (iconName.includes("/image/")) {
      return (
        <img
          src={iconName}
          alt=""
          style={{
            width: 22,
            height: 22,
            objectFit: "contain",
            filter: isActive ? "brightness(0) invert(1)" : "none",
            opacity: isActive ? 1 : 0.55,
          }}
        />
      );
    }
    const Icon = MuiIcons[iconName];
    return Icon ? <Icon sx={sidebarIconSx(isActive)} /> : null;
  };

  return (
    <List
      sx={{
        py: 1,
        px: 0.5,
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      {menuData.map((item) => {
        const isSignOut = item.label === "Sign Out";
        const isDashboardHome =
          item.path === "/admin" || item.path === "/staff";
        const isActive = isMenuItemActive(
          item,
          currentPath,
          isSignOut,
          isDashboardHome
        );

        return (
          <ListItemButton
            key={item.id}
            component={isSignOut ? "button" : "div"}
            role={isSignOut ? undefined : "link"}
            selected={isActive}
            onClick={() => {
              onMenuItemClick?.();
              if (isSignOut) {
                onSignOut?.();
              } else {
                navigate(item.path);
              }
            }}
            sx={getSidebarMenuItemSx(isActive)}
          >
            <ListItemIcon>{renderIcon(item.icon, isActive)}</ListItemIcon>
            <ListItemText
              primary={item.label}
              primaryTypographyProps={{
                fontFamily,
                fontSize: fs.nav,
                lineHeight: 1.4,
              }}
            />
          </ListItemButton>
        );
      })}
    </List>
  );
};

SidebarMenuList.propTypes = {
  menuData: PropTypes.array.isRequired,
  onSignOut: PropTypes.func,
  onMenuItemClick: PropTypes.func,
};

export default SidebarMenuList;
