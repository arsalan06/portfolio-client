"use client";
import React, { createContext, useState } from "react";
import Transition from "@/components/Transition";
import { usePathname } from "next/navigation";
import TopBar from "@/components/TopBar/TopBar";
import { Box, CssBaseline, Toolbar } from "@mui/material";
import LeftBar from "@/components/LeftBar/LeftBar";
import RightBar from "@/components/RightBar/RightBar";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import LeftDrawer from "@/components/LeftBar/LeftDrawer";
import RightDrawer from "@/components/RightBar/RightDrawer";
export const widthContext = createContext();
function UserLayout({ children }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [bodyRightMargin, setBodyRightMargin] = useState(80);
  const [openLeftDrawer, setOpenLeftDrawer] = useState(false);
  const [openRightDrawer, setOpenRightDrawer] = useState(false);
  const handleMarginSetting = (value) => {
    setBodyRightMargin(value);
  };
  const OpenLeftDrawer = (flag) => {
    setOpenLeftDrawer(flag);
  };
  const OpenRightDrawer = (flag) => {
    setOpenRightDrawer(flag);
  };
  const drawerWidth = 280;
  const pathname = usePathname();
  return (
    <widthContext.Provider value={{ bodyRightMargin, handleMarginSetting }}>
      <Box sx={{ display: "flex", height: "94vh" }}>
        <CssBaseline />
        <TopBar
          OpenLeftDrawer={OpenLeftDrawer}
          OpenRightDrawer={OpenRightDrawer}
        />
        {matches ? (
          <LeftDrawer open={openLeftDrawer} OpenLeftDrawer={OpenLeftDrawer} />
        ) : (
          <LeftBar drawerWidth={drawerWidth} OpenLeftDrawer={OpenLeftDrawer} />
        )}
        <Box
          sx={{
            flexGrow: 1,
            marginLeft: matches ? "0px" : ` ${drawerWidth}px`,
            marginRight:matches ? "0px" : ` ${bodyRightMargin}px`,
          }}
          className="container"
        >
          <Toolbar />
          <Transition location={pathname}>{children}</Transition>
        </Box>
        {matches ? (
          <RightDrawer
            OpenRightDrawer={OpenRightDrawer}
            open={openRightDrawer}
          />
        ) : (
          <RightBar />
        )}
      </Box>
    </widthContext.Provider>
  );
}

export default UserLayout;
