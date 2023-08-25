"use client";
import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
// import Typography from '@mui/material/Typography';
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { AiOutlineClose } from "react-icons/ai";
import { TfiMenu } from "react-icons/tfi";
import Link from "next/link";
import { Collapse, Typography } from "@mui/material";
import { urlText } from "./rightBarStyles";
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
  const [drawerWidth, setDrawerWidth] = useState(80);
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const handCloseDrawer = () => {
    setDrawerWidth(80);
  };
  const handOpenDrawer = () => {
    setDrawerWidth(240);
  };
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        transition: "width 0.5s linear",
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          height: "85vh",
          top: 63,
          right: 40,
          backgroundColor: "#20202A",
          transition: "width 0.5s linear",
        },
      }}
      variant="permanent"
      anchor="right"
      open={true}
    >
      <DrawerHeader>
        {/* <IconButton> */}
        {drawerWidth === 240 ? (
          <AiOutlineClose onClick={handCloseDrawer} />
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
              style={{ color: "#8C8C8E", cursor: "pointer" }}
            />
          </Box>
        )}
        {/* </IconButton> */}
      </DrawerHeader>
      <Divider />
      {drawerWidth === 240 ? (
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                  {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                  <Link href="/about">link</Link>
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                {/* <ListItemIcon>
                  <StarBorder />
                </ListItemIcon> */}
                <ListItemText primary="Starred" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      ) : (
        <Box>
          <Typography sx={urlText}>Home</Typography>
        </Box>
      )}
    </Drawer>
  );
}

export default RightBar;
