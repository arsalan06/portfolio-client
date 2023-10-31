"use client";
import { Box, Card, Typography } from "@mui/material";
import React from "react";
import { marginTopClass, orderText, skillCardContainer } from "./skillsStyles";
import { BiChevronRight } from "react-icons/bi";
import { useRouter } from "next/navigation";
function SkillCard({ skill }) {
  const router = useRouter();
  return (
    <Card sx={skillCardContainer}>
      <Typography variant="section_subheading">{skill?.title}</Typography>
      <br />
      <Typography variant="body_text" sx={marginTopClass}>
        {skill?.description}
      </Typography>
      <br />
      <Typography
        variant="order_text"
        sx={orderText}
        onClick={() => router.push("/contact")}
      >
        order now{" "}
        <Box
          sx={{
            marginTop: "7px",
          }}
        >
          <BiChevronRight style={{ fontSize: "22px" }} />
        </Box>
      </Typography>
    </Card>
  );
}

export default SkillCard;
