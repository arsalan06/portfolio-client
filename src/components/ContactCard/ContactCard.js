import { Box, Card, Typography } from "@mui/material";
import React from "react";
import { contactCardContainer, labelText, stackBox } from "./contactCardStyles";

function ContactCard() {
  return (
    <Card sx={contactCardContainer}>
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
    </Card>
  );
}

export default ContactCard;
