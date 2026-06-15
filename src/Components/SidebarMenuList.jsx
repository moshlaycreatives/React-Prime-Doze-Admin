import PropTypes from "prop-types";
import * as MuiIcons from "@mui/icons-material";
import { NavLink, useLocation } from "react-router-dom";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { fontFamily, fs } from "../theme/responsiveTypography.js";
import {
  getSidebarMenuItemSx,
  sidebarIconSx,
} from "../theme/sidebarTheme.js";

const SidebarMenuList = ({ menuData, onSignOut }) => {
  const location = useLocation();

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
        const isActive =
          !isSignOut &&
          (isDashboardHome
            ? location.pathname === item.path ||
              location.pathname === `${item.path}/`
            : location.pathname === item.path);

        return (
          <ListItemButton
            key={item.id}
            component={isSignOut ? "button" : NavLink}
            to={isSignOut ? undefined : item.path}
            end={isSignOut ? undefined : isDashboardHome}
            onClick={isSignOut ? onSignOut : undefined}
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
};

export default SidebarMenuList;
