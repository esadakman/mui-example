import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import Login from "../pages/Login";
import PrivateRouter from "./PrivateRouter";
import { createTheme, ThemeProvider } from "@mui/material";
const AppRouter = () => {
  const theme = createTheme({
    palette: {
      secondary: {
        main: "#eee",
      },
    },
    overrides: {
      MuiButton: {
        raisedPrimary: {
          color: "white",
        },
      },
    },
  });

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Login />} />
          <Route path="/main" element={<PrivateRouter />}>
            <Route path="/main" element={<Home />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default AppRouter;
