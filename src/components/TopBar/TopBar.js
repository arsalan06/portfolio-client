import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";

function TopBar() {
  return (
    <AppBar position="fixed" open={true} sx={{backgroundColor:"#191923", boxShadow:"none" }}>
      <Toolbar/>
    </AppBar>
  );
}

export default TopBar;
