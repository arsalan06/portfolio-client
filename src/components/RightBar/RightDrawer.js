"use client";
import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { AiOutlineClose } from "react-icons/ai";
import { TfiMenu } from "react-icons/tfi";
import { ClickAwayListener, Typography } from "@mui/material";
import { activeLink, settingNavLink, urlText } from "./rightBarStyles";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
const DrawerHeader = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
  backgroundColor: "#24242E",
}));
const drawerWidth = 240;
const pagesArray = [
  {
    title: "Home",
    path: `/home/arslan_qadir`,
  },
  {
    title: "Portfolio",
    path: "/portfolio",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];
export default function RightDrawer({ OpenRightDrawer, open }) {
  const pathname = usePathname();
  const urlOne = pathname.split("/");
  const url = urlOne[1]?.split("-");
  const handleDrawerClose = () => {
    OpenRightDrawer(false);
  };
  let drawerWidth = 240;
  return (
    <Drawer
      sx={{
        width: open && drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#20202A",
        },
      }}
      variant="temporary"
      anchor="right"
      open={open}
    >
      <DrawerHeader>
        <IoMdClose
          onClick={handleDrawerClose}
          style={{ color: "#8C8C8E", cursor: "pointer", fontSize: "24px" }}
        />
      </DrawerHeader>
      {
        drawerWidth === 240 && (
          <List sx={{ width: "100%" }}>
            {pagesArray.map((page, index) => (
              <ListItem key={index} disablePadding>
                <Link
                  href={page.path}
                  style={pathname === page.path ? activeLink : settingNavLink}
                  // onClick={handleClick}
                  passHref={true}
                >
                  <ListItemText primary={page.title} />
                </Link>
              </ListItem>
            ))}
          </List>
        )
        //  : (
        //   <Box>
        //     <Typography sx={urlText}>
        //       {pathname === "/"
        //         ? `Home`
        //         : `${url[0] ? url[0] : ""} ${url[1] ? url[1] : ""}`}
        //     </Typography>
        //   </Box>
        // )
      }
    </Drawer>
  );
}
