import React, { useState, MouseEvent } from "react";

import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Box,
  Button,
  Menu,
  MenuList,
  MenuItem,
} from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import MenuIcon from "@mui/icons-material/Menu";

const pages = ["Home", "About", "contact us", "login"];

const Appbar = () => {
  const [anchorNav, setAnchorNav] = (useState < HTMLElement) | (null > null);

  const openMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorNav(event.currentTarget);
  };
  const closeMenu = () => {
    setAnchorNav(null);
  };
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <PetsIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            Pet Finder
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {/*<Button color="inherit">Home</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Login</Button>
  <Button color="inherit">Contact us</Button>*/}
            {pages.map((page) => (
              <Button color="inherit">{Page}</Button>
            ))}
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              onClick={openMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu open={Boolean(anchorNav)}>
              onclose={"closeMenu"}
              sx={{ display: { xs: "flex", md: "none" } }}
              {/*<MenuList>
                <MenuItem>Home</MenuItem>
                <MenuItem>About</MenuItem>
                <MenuItem>Login</MenuItem>
                <MenuItem>Contact us</MenuItem>
  </MenuList>*/}
              {pages.map((page) => (
                <MenuItem>{page}</MenuItem>
              ))}
            </Menu>
          </Box>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <PetsIcon />
          </IconButton>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            Pet Finder
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Appbar;
