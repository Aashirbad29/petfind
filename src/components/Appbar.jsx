import React from "react";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import LocalLibraryRoundedIcon from "@mui/icons-material/LocalLibraryRounded";

const Appbar = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton></IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Appbar;
