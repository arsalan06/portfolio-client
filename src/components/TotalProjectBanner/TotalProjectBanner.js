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
export default function TotalProjectBanner() {
  return (
    <Box sx={mainContainer}>
      <Box sx={{...flexDisplay}}>
        <CountUp start={0} end={3} delay={0} suffix=" +" duration={2.75}>
          {({ countUpRef }) => (
            <Typography sx={{ ...numberText }} ref={countUpRef}></Typography>
          )}
        </CountUp>
        <Typography sx={{ ...valueText }}>Years Experience</Typography>
      </Box>
      <Box sx={flexDisplay}>
        <CountUp start={0} end={10} delay={0} suffix=" +" duration={2.75}>
          {({ countUpRef }) => (
            <Typography sx={{ ...numberText }} ref={countUpRef}></Typography>
          )}
        </CountUp>
        <Typography sx={{ ...valueText }}>Completed Projects</Typography>
      </Box>
      <Box sx={flexDisplay}>
        <CountUp start={0} end={10} delay={0} suffix=" +" duration={2.75}>
          {({ countUpRef }) => (
            <Typography sx={{ ...numberText }} ref={countUpRef}></Typography>
          )}
        </CountUp>
        <Typography sx={{ ...valueText }}>Happy Customers</Typography>
      </Box>
      <Box sx={{...flexDisplay}}>
        <CountUp start={0} end={10} delay={0} suffix=" +" duration={2.75}>
          {({ countUpRef }) => (
            <Typography sx={{ ...numberText }} ref={countUpRef}></Typography>
          )}
        </CountUp>
        <Typography sx={{ ...valueText }}>Honors and Awards</Typography>
      </Box>
    </Box>
  );
}
