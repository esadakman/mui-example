import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import logo from "../img/logo.png";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const logOutCleaner = () => {
    sessionStorage.clear();
    localStorage.clear();
  };

  return (
    <AppBar position="static" color="secondary">
      {/* <Container maxWidth="xl" sx={{ height: { xs: "8vh", sm: "10vh" } }}> */}
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="link"
            noWrap
            component={RouterLink}
            to="/main"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img src={logo} alt="logo" width="200px" />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem component={RouterLink} to="/main">
                Home
              </MenuItem>
              <MenuItem component={RouterLink} to="/">
                Login
              </MenuItem>
              <MenuItem component={RouterLink} to="/" onClick={logOutCleaner}>
                Logout
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="link"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              // justifyContent: "center",
            }}
          >
            <img
              src={logo}
              alt="logo"
              width="200px"
              // sx={{ width: { xs: "150px", sm: "200px" } }}
            />
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "right",
            }}
          >
            <Button
              sx={{ fontWeight: "bold" }}
              variant="link"
              component={RouterLink}
              to="/main"
            >
              Home
            </Button>

            <Button
              sx={{ fontWeight: "bold" }}
              variant="link"
              component={RouterLink}
              to="/"
            >
              Login
            </Button>
            <Button
              sx={{ fontWeight: "bold" }}
              variant="link"
              component={RouterLink}
              to="/"
              onClick={logOutCleaner}
            >
              Logout
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;

// <Typography
// textAlign="center"
// variant="link"
// component={RouterLink}
// // to="/"
// onClick={navigate(`/${page}`)}
//   ></Typography>;
