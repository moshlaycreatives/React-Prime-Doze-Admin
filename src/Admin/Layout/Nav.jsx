import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";
import { clearAuthStorage } from "../../utils/authStorage.js";
import SidebarMenuList from "../../components/SidebarMenuList.jsx";
import DashboardHeader from "../../components/DashboardHeader.jsx";
import { sidebarColors } from "../../theme/sidebarTheme.js";

const drawerWidth = 280;

const Nav = ({ menuData }) => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [isOpen, setIsOpen] = useState(isLargeScreen);
  const navigate = useNavigate();

  const handleSignOut = () => {
    clearAuthStorage();
    navigate("/");
  };

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const drawer = (
    <Box
      sx={{
        backgroundColor: sidebarColors.drawerBg,
        height: "100vh",
        width: drawerWidth,
        maxWidth: "100%",
        boxSizing: "border-box",
        overflowX: "hidden",
        overflowY: "auto",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          py: 2.5,
          px: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: 88,
        }}
      >
        <Box
          component="img"
          src="/image/logo.png"
          alt="Prime Doze"
          sx={{ width: 160, maxWidth: "100%", cursor: "pointer" }}
        />
      </Box>

      <SidebarMenuList menuData={menuData} onSignOut={handleSignOut} />
    </Box>
  );

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        elevation={0}
        position="fixed"
        sx={{
          backgroundColor: "#FFFFFF",

          borderBottom: "1px solid #F0F0F0",
        }}
      >
        <Toolbar sx={{ minHeight: { xs: 64, sm: 72 }, px: { xs: 1, sm: 2 } }}>
          <DashboardHeader
            drawerWidth={drawerWidth}
            onMenuClick={toggleDrawer}
          />
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { lg: drawerWidth }, flexShrink: { lg: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          sx={{
            display: { xs: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              maxWidth: "100%",
              overflowX: "hidden",
            },
          }}
          variant="temporary"
          open={isOpen}
          onClose={toggleDrawer}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", lg: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              maxWidth: "100%",
              overflowX: "hidden",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </React.Fragment>
  );
};

Nav.propTypes = {
  menuData: PropTypes.array.isRequired,
};

export default Nav;