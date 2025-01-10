import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import StoreIcon from "@mui/icons-material/Store";
import MoreIcon from "@mui/icons-material/MoreVert";
import { NavLink } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "50%", // Change this to take 50% width on larger screens
  [theme.breakpoints.down("sm")]: {
    width: "80%", // Take more space on small screens
  },
  [theme.breakpoints.up("md")]: {
    marginLeft: theme.spacing(3),
    width: "40%", // Centered search bar on larger screens
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "100%", // Ensure it stretches the width of the container
    },
  },
}));

export default function Header({ sx }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem component={NavLink} to="/profile" onClick={handleMenuClose}>Profile</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Box sx={{ paddingRight: 2 }}>
        <MenuItem component={NavLink} to="/">
          <IconButton size="large" color="inherit" >
            <HomeIcon />
          </IconButton>
          <p>Home</p>
        </MenuItem>
        <MenuItem component={NavLink} to="/marketplace">
          <IconButton size="large" color="inherit">
            <StoreIcon />
          </IconButton>
          <p>Store</p>
        </MenuItem>
        <MenuItem component={NavLink} to="/profile">
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Box>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "#BF5A36", ...sx }}>
        <Toolbar>
          <Typography
            sx={{
              display: { xs: "block", sm: "block" }, // Show on both mobile and desktop views
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: "0.2rem",
              marginRight: 2, // Add margin on the right for spacing
            }}
          >
            Booksite
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          <Search
            sx={{
              marginLeft: 1, // Add margin to the left for spacing from Booksite title
            }}
          >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton size="large" color="inherit" component={NavLink} to="/">
              <Typography
                sx={{
                  display: { xs: "none", sm: "block" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                }}
              >Home</Typography>
            </IconButton>
            <IconButton size="large" color="inherit" component={NavLink} to="/marketplace">
              <Typography
                sx={{
                  display: { xs: "none", sm: "block" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                }}>Shop</Typography>
            </IconButton>
            {/* Directly link to profile on desktop */}
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              color="inherit"
              component={NavLink} to="/profile" // Direct link
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
