import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import LoginPage from "./Auth/LoginPage";
import ProtectedRoute from "./Auth/ProtectedRoute";
import AdminPortal from "./Admin/Layout/AdminPortal";
import StaffPortal from "./Staff/Layout/StaffPortal";
import { ROLES } from "./utils/authStorage.js";
import { fontFamily } from "./theme/responsiveTypography.js";

const theme = createTheme({
  palette: {
    primary: { main: "#3B82F6" },
    background: { default: "#FCF6F2" },
  },
  typography: {
    fontFamily,
    h1: { fontFamily, fontWeight: 700 },
    h2: { fontFamily, fontWeight: 700 },
    h3: { fontFamily, fontWeight: 600 },
    h4: { fontFamily, fontWeight: 600 },
    h5: { fontFamily, fontWeight: 600 },
    h6: { fontFamily, fontWeight: 600 },
    subtitle1: { fontFamily },
    subtitle2: { fontFamily },
    body1: { fontFamily },
    body2: { fontFamily },
    button: { fontFamily, textTransform: "none", fontWeight: 600 },
    caption: { fontFamily },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/admin/*"
            element={
              <ProtectedRoute allowedRole={ROLES.ADMIN}>
                <AdminPortal />
              </ProtectedRoute>
            }
          />
          <Route
            path="/staff/*"
            element={
              <ProtectedRoute allowedRole={ROLES.STAFF}>
                <StaffPortal />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
