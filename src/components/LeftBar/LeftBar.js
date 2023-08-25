"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import { Avatar, Box, Divider, Typography } from "@mui/material";
import {
  DividerLine,
  footer,
  header,
  innerContainer,
  labelText,
  languageBarBox,
  mainContainer,
  socialIcons,
  stackBox,
} from "./leftBarStyles";
import Badge from "@mui/material/Badge";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { TiTick } from "react-icons/ti";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineTwitter,
  AiOutlineWhatsApp,
} from "react-icons/ai";
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 5,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#191923",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#ffc107" : "#191923",
  },
}));
const value = 0.66;
function LeftBar({ drawerWidth }) {
  return (
    <Box
      sx={{
        width: drawerWidth,
        ...mainContainer,
      }}
    >
      <Box sx={header}>
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
        >
          <Avatar
            src="/images/avatar.jpg"
            sx={{ width: "70px", height: "70px" }}
          ></Avatar>
        </StyledBadge>
        <Typography variant="page_title">Muhammad Arsalan</Typography>
        <Typography variant="body_text">Front-end Developer</Typography>
      </Box>
      <Box sx={{ ...innerContainer }}>
        <Box sx={stackBox}>
          <Typography variant="page_title" sx={labelText}>
            Residence:
          </Typography>
          <Typography variant="body_text">Canada</Typography>
        </Box>
        <Box sx={stackBox}>
          <Typography variant="page_title" sx={labelText}>
            City:
          </Typography>
          <Typography variant="body_text">Toronto</Typography>
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
            <CircularProgressbar value={66} text={`${value * 100}%`} />
            <Typography variant="page_title" sx={labelText}>
              English
            </Typography>
          </Box>
          <Box sx={{ ...languageBarBox }}>
            <CircularProgressbar value={66} text={`${value * 100}%`} />
            <Typography variant="page_title" sx={labelText}>
              Urdu
            </Typography>
          </Box>
        </Box>
        <Divider sx={{ ...DividerLine }} />
        <Box sx={{ marginTop: "10px" }}>
          <Box sx={stackBox}>
            <Typography variant="page_title" sx={labelText}>
              HTML
            </Typography>
            <Typography variant="body_text">50%</Typography>
          </Box>
          <BorderLinearProgress variant="determinate" value={50} />
        </Box>
        <Box sx={{ marginTop: "10px" }}>
          <Box sx={stackBox}>
            <Typography variant="page_title" sx={labelText}>
              CSS
            </Typography>
            <Typography variant="body_text">50%</Typography>
          </Box>
          <BorderLinearProgress variant="determinate" value={50} />
        </Box>
        <Box sx={{ marginTop: "10px" }}>
          <Box sx={stackBox}>
            <Typography variant="page_title" sx={labelText}>
              REACT JS
            </Typography>
            <Typography variant="body_text">50%</Typography>
          </Box>
          <BorderLinearProgress variant="determinate" value={50} />
        </Box>
        <Box sx={{ marginTop: "10px" }}>
          <Box sx={stackBox}>
            <Typography variant="page_title" sx={labelText}>
              NEXT JS
            </Typography>
            <Typography variant="body_text">50%</Typography>
          </Box>
          <BorderLinearProgress variant="determinate" value={50} />
        </Box>
        <Box sx={{ marginTop: "10px" }}>
          <Box sx={stackBox}>
            <Typography variant="page_title" sx={labelText}>
              NODE JS
            </Typography>
            <Typography variant="body_text">50%</Typography>
          </Box>
          <BorderLinearProgress variant="determinate" value={50} />
        </Box>
        <Divider sx={{ ...DividerLine }} />
        <Box sx={{ ...stackBox, justifyContent: "flex-start", gap: 1 }}>
          <TiTick style={{ color: "#ffc107" }} />
          <Typography variant="body_text">Material UI, And Design</Typography>
        </Box>
        <Box sx={{ ...stackBox, justifyContent: "flex-start", gap: 1 }}>
          <TiTick style={{ color: "#ffc107" }} />
          <Typography variant="body_text">Bootstrap, Tailwind CSS</Typography>
        </Box>
        <Box sx={{ ...stackBox, justifyContent: "flex-start", gap: 1 }}>
          <TiTick style={{ color: "#ffc107" }} />
          <Typography variant="body_text">GIT knowledge</Typography>
        </Box>
      </Box>
      <Box sx={footer}>
        <AiFillLinkedin style={{...socialIcons}}/>
        <AiFillGithub style={socialIcons} />
        <AiOutlineTwitter style={socialIcons} />
        <AiOutlineWhatsApp style={socialIcons} />
      </Box>
    </Box>
  );
}

export default LeftBar;
