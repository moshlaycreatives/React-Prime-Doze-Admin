import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { authenticate } from "./authConfig.js";
import {
  getAuthRole,
  getHomePathForRole,
  setAuthSession,
} from "../utils/authStorage.js";
import { fontFamily, fs } from "../theme/responsiveTypography.js";
import { sidebarColors } from "../theme/sidebarTheme.js";



const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const role = getAuthRole();
    if (role) {
      navigate(getHomePathForRole(role), { replace: true });
    }
  }, [navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    if (!email.trim() || !password) {
      setError("Please enter your email and password.");
      return;
    }

    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 400));

    const account = authenticate(email, password);

    if (!account) {
      setError("Invalid email or password. Please try again.");
      setLoading(false);
      return;
    }

    setAuthSession({
      role: account.role,
      email: account.email,
      userName: account.userName,
    });

    navigate(account.homePath, { replace: true });
    setLoading(false);
  };

  const fieldSx = {
    "& .MuiOutlinedInput-root": {
      borderRadius: "33px",
      backgroundColor: "#FFFFFF",
      fontFamily,
      fontSize: fs.body,
      "& fieldset": {
        borderRadius: "33px",
        borderColor: "#D1D5DB",
      },
      "&:hover fieldset": {
        borderColor: "#9CA3AF",
      },
      "&.Mui-focused fieldset": {
        borderColor: sidebarColors.activeBg,
        borderWidth: 1,
      },
    },
    "& .MuiOutlinedInput-input": {
      px: 2.5,
      py: 1.5,
    },
    "& .MuiOutlinedInput-input::placeholder": {
      color: "#9CA3AF",
      opacity: 1,
    },
  };

  const labelSx = {
    fontFamily,
    fontSize: fs.sm,
    fontWeight: 500,
    color: "#374151",
    mb: 0.75,
    display: "block",
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: "url('/image/LoginPage.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        px: 2,
        py: 4,
        fontFamily,
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: "100%",
          maxWidth: 420,
          backgroundColor: "#FFFFFF",
          borderRadius: "20px",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
          p: { xs: 3, sm: 4 },
        }}
      >
        <Typography
          sx={{
            fontFamily,
            fontWeight: 700,
            fontSize: "clamp(1.5rem, 3vw, 1.75rem)",
            color: sidebarColors.activeBg,
            textAlign: "center",
            mb: 2,
            letterSpacing: "-0.02em",
          }}
        >
          Prime Doze
        </Typography>

        <Typography
          sx={{
            fontFamily,
            fontWeight: 600,
            fontSize: fs.welcome,
            color: "#111827",
            mb: 3,
          }}
        >
          Welcome Back👋
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 2, borderRadius: "12px", fontFamily }}>
            {error}
          </Alert>
        )}

        <Box sx={{ mb: 2 }}>
          <Typography component="label" htmlFor="email" sx={labelSx}>
            Email
          </Typography>
          <TextField
            id="email"
            fullWidth
            type="email"
            placeholder="Enter email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
            sx={fieldSx}
          />
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography component="label" htmlFor="password" sx={labelSx}>
            Password
          </Typography>
          <TextField
            id="password"
            fullWidth
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
            sx={fieldSx}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      type="button"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                      onClick={() => setShowPassword((prev) => !prev)}
                      edge="end"
                      disabled={loading}
                      sx={{ color: "#9CA3AF" }}
                    >
                      {showPassword ? (
                        <VisibilityOff sx={{ fontSize: 20 }} />
                      ) : (
                        <Visibility sx={{ fontSize: 20 }} />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
          />
        </Box>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          disabled={loading}
          sx={{
            py: 1.5,
            borderRadius: "999px",
            textTransform: "none",
            fontFamily,
            fontSize: fs.body,
            fontWeight: 600,
            backgroundColor: sidebarColors.activeBg,
            color: "#FFFFFF",
            boxShadow: "none",
            minHeight: 48,
            "&:hover": {
              backgroundColor: "#2563EB",
              boxShadow: "none",
            },
          }}
        >
          {loading ? (
            <CircularProgress size={26} sx={{ color: "#fff" }} />
          ) : (
            "Log In"
          )}
        </Button>
      </Box>
    </Box>
  );
};

export default LoginPage;
