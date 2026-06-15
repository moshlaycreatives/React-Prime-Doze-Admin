import PropTypes from "prop-types";
import { Menu, MenuItem, Typography, Box } from "@mui/material";

const NotificationPopup = ({ anchorEl, open, handleClose }) => {
  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      PaperProps={{
        sx: {
          mt: 1,
          minWidth: 280,
          borderRadius: 2,
          boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
        },
      }}
    >
      <Box sx={{ px: 2, py: 1.5 }}>
        <Typography variant="subtitle2" fontWeight={600}>
          Notifications
        </Typography>
        <Typography variant="body2" color="text.secondary">
          No new notifications
        </Typography>
      </Box>
      <MenuItem onClick={handleClose}>Dismiss</MenuItem>
    </Menu>
  );
};

NotificationPopup.propTypes = {
  anchorEl: PropTypes.object,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default NotificationPopup;
