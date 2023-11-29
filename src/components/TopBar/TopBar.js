import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { TfiMenu } from "react-icons/tfi";
import { BsThreeDotsVertical } from "react-icons/bs";
function TopBar({ OpenLeftDrawer, OpenRightDrawer }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  // const [openLeftDrawer, setOpenLeftDrawer]=useState(false)
  const handleOpenLeftDrawer = () => {
    OpenLeftDrawer(true);
  };
  const handleOpenRightDrawer = () => {
    OpenRightDrawer(true);
  };
  return (
    <AppBar
      position="fixed"
      open={true}
      sx={{
        backgroundColor: matches ? "#20202A" : "#191923",
        boxShadow: !matches && "none",
      }}
    >
      <Toolbar
        sx={{
          "&.MuiToolbar-root": {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          },
        }}
      >
        {matches && (
          <BsThreeDotsVertical
            onClick={handleOpenLeftDrawer}
            style={{ color: "#8C8C8E", cursor: "pointer", fontSize: "24px" }}
          />
        )}
        {matches && (
          <TfiMenu
          onClick={handleOpenRightDrawer}
            style={{ color: "#8C8C8E", cursor: "pointer", fontSize: "24px" }}
          />
        )}
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
