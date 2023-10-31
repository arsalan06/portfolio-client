"use client";
import { Box, Typography } from "@mui/material";
import React from "react";
import {
  flexDisplay,
  mainContainer,
  numberText,
  valueText,
} from "./totalProjectBannerStyles";
import CountUp from "react-countup";
import { useSelector } from "@/redux/store";
export default function TotalProjectBanner() {
  const userDetail = useSelector((state) => state.userDetailReducer);
  return (
    <Box sx={mainContainer}>
      <Box sx={flexDisplay}>
        <CountUp
          start={0}
          end={userDetail?.userDetail?.user?.totalExperience}
          delay={0}
          suffix=" +"
          duration={2.75}
        >
          {({ countUpRef }) => (
            <Typography sx={{ ...numberText }} ref={countUpRef}></Typography>
          )}
        </CountUp>
        <Typography sx={{ ...valueText }}>Years Experience</Typography>
      </Box>
      <Box sx={flexDisplay}>
        <CountUp
          start={0}
          end={userDetail?.userDetail?.user?.totalProject}
          delay={0}
          suffix=" +"
          duration={2.75}
        >
          {({ countUpRef }) => (
            <Typography sx={{ ...numberText }} ref={countUpRef}></Typography>
          )}
        </CountUp>
        <Typography sx={{ ...valueText }}>Completed Projects</Typography>
      </Box>
      <Box sx={flexDisplay}>
        <CountUp
          start={0}
          end={userDetail?.userDetail?.user?.numberAward}
          delay={0}
          suffix=" +"
          duration={2.75}
        >
          {({ countUpRef }) => (
            <Typography sx={{ ...numberText }} ref={countUpRef}></Typography>
          )}
        </CountUp>
        <Typography sx={{ ...valueText }}>Honors and Awards</Typography>
      </Box>
    </Box>
  );
}
