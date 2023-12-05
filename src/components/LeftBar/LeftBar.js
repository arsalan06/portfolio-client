"use client";
import React, { useEffect, useState } from "react";
import { Avatar, Box, Divider, Typography } from "@mui/material";
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
import { TiTick } from "react-icons/ti";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineTwitter,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { useSelector } from "@/redux/store";
import { CircularProgressbar } from "react-circular-progressbar";
import Link from "next/link";
import { base_url } from "@/constant/constant";
import { skills } from "../Skills/skillData";
const LeftBar = ({ drawerWidth }) => {
  const userDetail = useSelector((state) => state.userDetailReducer);
  const skillsData = useSelector((state) => state.skillsReducer);
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
  }, [skillsData?.skillsData]);
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
            sizes="small"
            src="/images/profile-three.png"
            sx={{ width: "70px", height: "70px", objectFit: "cover" }}
          ></Avatar>
        </StyledBadge>
        <Typography variant="page_title">Muhammad Arsalan Qadir</Typography>
        <Typography variant="body_text">Mern Stack Developer</Typography>
      </Box>
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
        <Link
          href="https://www.linkedin.com/in/muhammad-arsalan-qadir-928182160"
          target="_blank"
        >
          <AiFillLinkedin style={{ ...socialIcons }} />
        </Link>
        <Link href="https://github.com/arsalan06" target="_blank">
          <AiFillGithub style={socialIcons} />
        </Link>
        <Link
          href="https://x.com/7103M?t=jeiU5CDwCOe001lJxiW45A&s=09"
          target="_blank"
        >
          <AiOutlineTwitter style={socialIcons} />
        </Link>
        <Link href="https://wa.me/+923168086871" target="_blank">
          <AiOutlineWhatsApp style={socialIcons} />
        </Link>
      </Box>
    </Box>
  );
};

export default LeftBar;
