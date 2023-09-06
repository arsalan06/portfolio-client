import { Box, Typography } from "@mui/material";
import React from "react";
import {
  flexDisplay,
  mainContainer,
  numberText,
  valueText,
} from "./totalProjectBannerStyles";

export default function TotalProjectBanner() {
  return (
    <Box sx={mainContainer}>
      <Box sx={flexDisplay}>
        <Typography sx={{ ...numberText }}>2 +</Typography>
        <Typography sx={{ ...valueText }}>Years Experience</Typography>
      </Box>
      <Box sx={flexDisplay}>
        <Typography sx={{ ...numberText }}>10 +</Typography>
        <Typography sx={{ ...valueText }}>Completed Projects</Typography>
      </Box>
      <Box sx={flexDisplay}>
        <Typography sx={{ ...numberText }}>10 +</Typography>
        <Typography sx={{ ...valueText }}>Honors and Awards</Typography>
      </Box>
    </Box>
  );
}
