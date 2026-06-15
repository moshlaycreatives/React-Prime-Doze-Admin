import { useState } from "react";
import PropTypes from "prop-types";
import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate } from "react-router-dom";
import { fontFamily, fs } from "../theme/responsiveTypography.js";
import { headerColors, headerPillSx, searchBarSx } from "../theme/headerTheme.js";
import NotificationPopup from "./NotificationPopup";
import {
  clearAuthStorage,
  getAuthRole,
  ROLES,
} from "../utils/authStorage.js";

const DashboardHeader = ({ drawerWidth, onMenuClick }) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [profileAnchor, setProfileAnchor] = useState(null);
  const [notificationAnchor, setNotificationAnchor] = useState(null);

  const displayName = localStorage.getItem("UserName") || "User";
  const roleLabel = getAuthRole() === ROLES.STAFF ? "Staff" : "Admin";

  const handleLogout = () => {
    clearAuthStorage();
    navigate("/");
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        gap: 2,
        pl: { xs: 0, lg: `${drawerWidth + 16}px` },
        pr: { xs: 1, sm: 2 },
        py: 0.5,
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flex: 1,
          minWidth: 0,
          gap: 1.5,
        }}
      >
        <IconButton
          aria-label="open menu"
          onClick={onMenuClick}
          sx={{
            display: { lg: "none" },
            color: headerColors.iconMuted,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Box
          component="form"
          onSubmit={(e) => e.preventDefault()}
          sx={{
            ...searchBarSx,
            flex: 1,
            maxWidth: { xs: "100%", sm: 360, md: 420 },
            height: 48,
            display: "flex",
            alignItems: "center",
            gap: 1.25,
            pl: 1.25,
            pr: 2,
            py: 0.75,
            backgroundColor: headerColors.pillBg,
            minWidth: 0,
          }}
        >
          <Box
            sx={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              backgroundColor: headerColors.bellBg,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <SearchOutlinedIcon
              aria-hidden
              sx={{ fontSize: 20, color: headerColors.iconMuted }}
            />
          </Box>
          <Box
            component="input"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            aria-label="Search"
            sx={{
              border: "none",
              outline: "none",
              background: "transparent",
              backgroundColor: "transparent",
              WebkitAppearance: "none",
              appearance: "none",
              flex: 1,
              minWidth: 0,
              width: "100%",
              p: 0,
              m: 0,
              fontFamily,
              fontSize: "0.9375rem",
              fontWeight: 400,
              color: "#374151",
              lineHeight: 1.5,
              "&::placeholder": {
                color: headerColors.searchPlaceholder,
                opacity: 1,
              },
              "&::-webkit-search-cancel-button": {
                display: "none",
              },
            }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: { xs: 1, sm: 1.5 },
          flexShrink: 0,
        }}
      >
        <Box
          onClick={(e) => setNotificationAnchor(e.currentTarget)}
          sx={{
            ...headerPillSx,
            display: { xs: "none", sm: "flex" },
            alignItems: "center",
            gap: 1.25,
            px: 1.5,
            py: 0.75,
            cursor: "pointer",
            minHeight: 48,
          }}
        >
          <Box
            sx={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              backgroundColor: headerColors.bellBg,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <NotificationsNoneOutlinedIcon
              sx={{ fontSize: 20, color: headerColors.iconMuted }}
            />
          </Box>
          <Typography
            sx={{
              fontFamily,
              fontSize: fs.body,
              fontWeight: 500,
              color: "#374151",
              whiteSpace: "nowrap",
            }}
          >
            Notifications
          </Typography>
        </Box>

        <IconButton
          onClick={(e) => setNotificationAnchor(e.currentTarget)}
          sx={{
            display: { xs: "flex", sm: "none" },
            ...headerPillSx,
            width: 48,
            height: 48,
          }}
        >
          <NotificationsNoneOutlinedIcon sx={{ color: headerColors.iconMuted }} />
        </IconButton>

        <NotificationPopup
          anchorEl={notificationAnchor}
          open={Boolean(notificationAnchor)}
          handleClose={() => setNotificationAnchor(null)}
        />

        <Box
          onClick={(e) => setProfileAnchor(e.currentTarget)}
          sx={{
            ...headerPillSx,
            display: "flex",
            alignItems: "center",
            gap: 1.25,
            px: { xs: 1, sm: 1.5 },
            py: 0.75,
            cursor: "pointer",
            minHeight: 48,
            maxWidth: { xs: 200, sm: "none" },
          }}
        >
          <Avatar
            src="/image/profile.png"
            alt={displayName}
            sx={{ width: 40, height: 40, flexShrink: 0 }}
          />
          <Box sx={{ display: { xs: "none", md: "block" }, minWidth: 0 }}>
            <Typography
              sx={{
                fontFamily,
                fontWeight: 600,
                fontSize: fs.body,
                color: headerColors.nameBlue,
                lineHeight: 1.2,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {displayName}
            </Typography>
            <Typography
              sx={{
                fontFamily,
                fontSize: fs.sm,
                color: headerColors.roleGray,
                lineHeight: 1.2,
              }}
            >
              {roleLabel}
            </Typography>
          </Box>
          <KeyboardArrowDownIcon
            sx={{
              color: headerColors.iconMuted,
              fontSize: 22,
              display: { xs: "none", sm: "block" },
            }}
          />
        </Box>

        <Menu
          anchorEl={profileAnchor}
          open={Boolean(profileAnchor)}
          onClose={() => setProfileAnchor(null)}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          PaperProps={{ sx: { mt: 1, borderRadius: 2, minWidth: 160 } }}
        >
          <MenuItem
            onClick={() => {
              setProfileAnchor(null);
              handleLogout();
            }}
            sx={{ fontFamily }}
          >
            Logout
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

DashboardHeader.propTypes = {
  drawerWidth: PropTypes.number.isRequired,
  onMenuClick: PropTypes.func.isRequired,
};

export default DashboardHeader;
