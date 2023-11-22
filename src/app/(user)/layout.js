"use client";
import React, { createContext, useState } from "react";
import Transition from "@/components/Transition";
import { usePathname } from "next/navigation";
import TopBar from "@/components/TopBar/TopBar";
import { Box, CssBaseline, Toolbar } from "@mui/material";
import LeftBar from "@/components/LeftBar/LeftBar";
import RightBar from "@/components/RightBar/RightBar";
export const widthContext=createContext()
function UserLayout({ children }) {
  const [bodyRightMargin,setBodyRightMargin]=useState(80)
  const handleMarginSetting=(value)=>{
    setBodyRightMargin(value)
  }
  const drawerWidth = 280;
  const pathname = usePathname();
  return (
    <widthContext.Provider value={{bodyRightMargin, handleMarginSetting}}>
    <Box sx={{ display: "flex", height: "94vh" }}>
      <CssBaseline />
      <TopBar />
      <LeftBar drawerWidth={drawerWidth} />
      <Box
        sx={{
          flexGrow: 1,
          marginLeft: ` ${drawerWidth}px`,
          marginRight: ` ${bodyRightMargin}px`,
        }}
        className="container"
      >
        <Toolbar />
        <Transition location={pathname}>{children}</Transition>
      </Box>
      <RightBar />
    </Box>
    </widthContext.Provider>
  );
}

export default UserLayout;
