"use client";
import React, { useEffect, useState } from "react";
import { Avatar, Box, Divider, Drawer, Typography } from "@mui/material";
import {
  DividerLine,
  StyledBadge,
  footer,
  header,
  innerContainer,
  labelText,
  languageBarBox,
  mainContainer,
  socialIcons,
  stackBox,
  BorderLinearProgress,
} from "./leftBarStyles";
import "react-circular-progressbar/dist/styles.css";
import { IoMdClose } from "react-icons/io";
import { TiTick } from "react-icons/ti";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineTwitter,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { CircularProgressbar } from "react-circular-progressbar";
import { skills } from "../Skills/skillData";
import { styled, useTheme } from "@mui/material/styles";
const drawerWidth = 280;

const DrawerHeader = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
  backgroundColor: "#20202A",
  flexDirection: "column",
}));

export default function LeftDrawer({ OpenLeftDrawer, open }) {
  const theme = useTheme();
  const [skillArray, setSkillArray] = useState();
  useEffect(() => {
    if (skills?.length > 0) {
      let tempArray = [];
      for (let i = 0; i < skills?.length; i++) {
        if (!skills[i]?.isCoreSkill) {
          tempArray.push(skills[i].title);
        }
      }
      let newTempArray = [];
      for (let i = 0; i < tempArray?.length; i += 2) {
        if (tempArray[i] && tempArray[i + 1]) {
          newTempArray.push(tempArray[i] + "," + " " + tempArray[i + 1]);
        } else {
          newTempArray.push(tempArray[i]);
        }
      }
      setSkillArray(newTempArray);
    }
  }, [skills]);

  const handleDrawerClose = () => {
    OpenLeftDrawer(false);
  };

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
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            width: "100%",
            mt:1
          }}
        >
          <IoMdClose
            onClick={handleDrawerClose}
            style={{ color: "#8C8C8E", cursor: "pointer", fontSize: "28px" }}
          />
        </Box>
        <Box sx={header}>
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Avatar
              src="/images/profile-img.jpg"
              sx={{ width: "70px", height: "70px" }}
            ></Avatar>
          </StyledBadge>
          <Typography variant="page_title">Muhammad Arsalan Qadir</Typography>
          <Typography variant="body_text">Mern Stack Developer</Typography>
        </Box>
      </DrawerHeader>
      <Box sx={{ ...innerContainer }}>
        <Box sx={stackBox}>
          <Typography variant="page_title" sx={labelText}>
            Residence:
          </Typography>
          <Typography variant="body_text">Pakistan</Typography>
        </Box>
        <Box sx={stackBox}>
          <Typography variant="page_title" sx={labelText}>
            City:
          </Typography>
          <Typography variant="body_text">Lahore</Typography>
        </Box>
        <Box sx={stackBox}>
          <Typography variant="page_title" sx={labelText}>
            Age:
          </Typography>
          <Typography variant="body_text">26</Typography>
        </Box>
        <Divider sx={{ ...DividerLine }} />
        <Box sx={stackBox}>
          <Box sx={{ ...languageBarBox }}>
            <CircularProgressbar value={90} text={`${90}%`} />
            <Typography variant="page_title" sx={labelText}>
              English
            </Typography>
          </Box>
          <Box sx={{ ...languageBarBox }}>
            <CircularProgressbar value={90} text={`${90}%`} />
            <Typography variant="page_title" sx={labelText}>
              Urdu
            </Typography>
          </Box>
        </Box>
        <Divider sx={{ ...DividerLine }} />
        {skills?.map(
          (skill) =>
            skill?.isCoreSkill && (
              <Box sx={{ marginTop: "10px" }} key={skill.id}>
                <Box sx={stackBox}>
                  <Typography variant="page_title" sx={labelText}>
                    {skill?.title}
                  </Typography>
                  <Typography variant="body_text">
                    {skill?.ratePercent}%
                  </Typography>
                </Box>
                <BorderLinearProgress
                  variant="determinate"
                  value={skill?.ratePercent}
                />
              </Box>
            )
        )}
        <Divider sx={{ ...DividerLine }} />
        {skillArray?.map((skill, index) => (
          <Box
            sx={{ ...stackBox, justifyContent: "flex-start", gap: 1 }}
            key={skill}
          >
            <TiTick style={{ color: "#ffc107" }} />
            <Typography variant="body_text">{skill}</Typography>
          </Box>
        ))}
      </Box>
      <Box sx={footer}>
        {/* <Link href={`${linkObj?.linkedIn}`} target="_blank"> */}
        <AiFillLinkedin style={{ ...socialIcons }} />
        {/* </Link> */}

        <AiFillGithub style={socialIcons} />
        <AiOutlineTwitter style={socialIcons} />
        <AiOutlineWhatsApp style={socialIcons} />
      </Box>
    </Drawer>
  );
}
