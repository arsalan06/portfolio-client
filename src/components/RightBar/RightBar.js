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
import { Typography } from "@mui/material";
import { activeLink, settingNavLink, urlText } from "./rightBarStyles";
import { usePathname } from "next/navigation";
import Link from "next/link";
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
  backgroundColor: "#24242E",
}));
function RightBar() {
  const pathname = usePathname();
  const [drawerWidth, setDrawerWidth] = useState(80);
  const [open, setOpen] = React.useState(false);
  const urlOne = pathname.split("/");
  const url = urlOne[1]?.split("-");
  const [userName, setUserName] = useState("");
  // let userName;
  useEffect(() => {
    setUserName(localStorage.getItem("userName"));
  }, []);
  const handleClick = () => {
    setOpen(!open);
  };
  const handCloseDrawer = () => {
    setDrawerWidth(80);
  };
  const handOpenDrawer = () => {
    setDrawerWidth(240);
  };
  const pagesArray = [
    {
      title: "Home",
      path: `/home/${userName}`,
    },
    {
      title: "Portfolio",
      path: "/portfolio",
    },
    {
      title: "Skill",
      path: "/skill",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];
  return (
    <Drawer
      // BackdropProps={{ invisible: true }}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        transition: "width 0.5s linear",
         position:"inherit",
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          height: "85vh",
          top: 63,
          right: 40,
          backgroundColor: "#20202A",
          transition: "width 0.5s linear",
        },
      }}
      variant="temporary"
      anchor="right"
      open={true}
      hideBackdrop={true}
      disableScrollLock
      disableEnforceFocus
    >
      <DrawerHeader>
        {drawerWidth === 240 ? (
          <AiOutlineClose
            onClick={handCloseDrawer}
            style={{ color: "#8C8C8E", cursor: "pointer", fontSize: "24px" }}
          />
        ) : (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <TfiMenu
              onClick={handOpenDrawer}
              style={{ color: "#8C8C8E", cursor: "pointer", fontSize: "24px" }}
            />
          </Box>
        )}
      </DrawerHeader>
      <Divider />
      {drawerWidth === 240 ? (
        <List>
          {pagesArray.map((page, index) => (
            <ListItem key={index} disablePadding>
              <Link
                href={page.path}
                style={pathname === page.path ? activeLink : settingNavLink}
                onClick={handleClick}
                passHref={true}
              >
                <ListItemText primary={page.title} />
              </Link>
            </ListItem>
          ))}
        </List>
      ) : (
        <Box>
          <Typography sx={urlText}>
            {pathname === "/"
              ? `Home`
              : `${url[0] ? url[0] : ""} ${url[1] ? url[1] : ""}`}
          </Typography>
        </Box>
      )}
    </Drawer>
  );
}

export default RightBar;
