"use client";
import React from "react";
import Transition from "@/components/Transition";
import { usePathname } from "next/navigation";
import TopBar from "@/components/TopBar/TopBar";
import { Box, CssBaseline, Toolbar } from "@mui/material";
import LeftBar from "@/components/LeftBar/LeftBar";
import RightBar from "@/components/RightBar/RightBar";
function UserLayout({ children }) {
  const drawerWidth = 280;
  const pathname = usePathname();
  return (
    <Box sx={{ display: "flex", height: "94vh" }}>
      <CssBaseline />
      <TopBar />
      <LeftBar drawerWidth={drawerWidth} />
      <Box
        sx={{
          flexGrow: 1,
          marginLeft: ` ${drawerWidth}px`,
        }}
        className="container"
      >
        <Toolbar />
        <Transition location={pathname}>{children}</Transition>
      </Box>
      <RightBar />
    </Box>
  );
}

export default UserLayout;
