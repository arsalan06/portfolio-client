"use client";
import React, { useEffect } from "react";
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
// const data="{whatapp:"whatsapp://send?text=WHATEVER_LINK_OR_TEXT_YOU_WANT_TO_SEND|| & phone=923168086871",
// linkedIn:"linkedin.com",
// twitter:"twitter.com",
// git:"github.com"}"
function LeftBar({ drawerWidth }) {
  const userDetail = useSelector((state) => state.userDetailReducer);
  const skillsData = useSelector((state) => state.skillsReducer);
  const [skillArray, setSkillArray] = React.useState();
  let linkObj;
  useEffect(() => {
    if (skillsData?.skillsData?.skills?.length > 0) {
      linkObj = JSON.parse(userDetail?.userDetail?.user?.socialLinks)[0];
      console.log("linkObj?.linkedIn");
      console.log("linkObj?.linkedIn");
      console.log(linkObj.linkedIn);
      let tempArray = [];
      for (let i = 0; i < skillsData?.skillsData?.skills?.length; i++) {
        if (!skillsData?.skillsData?.skills[i]?.isCoreSkill) {
          tempArray.push(skillsData?.skillsData?.skills[i].title);
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
            src="/images/avatar.jpg"
            sx={{ width: "70px", height: "70px" }}
          ></Avatar>
        </StyledBadge>
        <Typography variant="page_title">
          {userDetail?.userDetail?.user?.fullName}
        </Typography>
        <Typography variant="body_text">
          {userDetail?.userDetail?.user?.role}
        </Typography>
        <Typography variant="page_title">
          {userDetail?.userDetail?.user?.fullName}
        </Typography>
        <Typography variant="body_text">
          {userDetail?.userDetail?.user?.role}
        </Typography>
      </Box>
      <Box sx={{ ...innerContainer }}>
        <Box sx={stackBox}>
          <Typography variant="page_title" sx={labelText}>
            Residence:
          </Typography>
          <Typography variant="body_text">
            {userDetail?.userDetail?.user?.country}
          </Typography>
          <Typography variant="body_text">
            {userDetail?.userDetail?.user?.country}
          </Typography>
        </Box>
        <Box sx={stackBox}>
          <Typography variant="page_title" sx={labelText}>
            City:
          </Typography>
          <Typography variant="body_text">
            {userDetail?.userDetail?.user?.city}
          </Typography>
          <Typography variant="body_text">
            {userDetail?.userDetail?.user?.city}
          </Typography>
        </Box>
        <Box sx={stackBox}>
          <Typography variant="page_title" sx={labelText}>
            Age:
          </Typography>
          <Typography variant="body_text">
            {userDetail?.userDetail?.user?.age}
          </Typography>
        </Box>
        <Divider sx={{ ...DividerLine }} />
        <Box sx={stackBox}>
          {userDetail?.userDetail?.user?.languages &&
            JSON.parse(userDetail?.userDetail?.user?.languages)?.map((item) => (
              <Box sx={{ ...languageBarBox }} key={item?.title}>
                <CircularProgressbar
                  value={item?.proficiency}
                  text={`${item?.proficiency}%`}
                />
                <Typography variant="page_title" sx={labelText}>
                  {item?.title}
                </Typography>
              </Box>
            ))}
        </Box>
        <Divider sx={{ ...DividerLine }} />
        {skillsData?.skillsData?.skills?.map(
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
          <Box sx={{ ...stackBox, justifyContent: "flex-start", gap: 1 }}>
            <TiTick style={{ color: "#ffc107" }} />
            <Typography variant="body_text">{skill}</Typography>
          </Box>
        ))}
      </Box>
      <Box sx={footer}>
        {/* {linkObj?.linkedIn &&( */}
        <Link href={`${linkObj?.linkedIn}`} target="_blank">
          <AiFillLinkedin style={{ ...socialIcons }} />
        </Link>
        {/* )} */}

        <AiFillGithub style={socialIcons} />
        <AiOutlineTwitter style={socialIcons} />
        <AiOutlineWhatsApp style={socialIcons} />
      </Box>
    </Box>
  );
}

export default LeftBar;
