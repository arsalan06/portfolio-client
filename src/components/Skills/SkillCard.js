"use client";
import { Box, Card, Typography } from "@mui/material";
import React from "react";
import { marginTopClass, orderText, skillCardContainer } from "./skillsStyles";
import { BiChevronRight } from "react-icons/bi";
import { useRouter } from "next/navigation";
import ReactShowMoreText from "react-show-more-text";
function SkillCard({ skill }) {
  const router = useRouter();
  return (
    <Card sx={skillCardContainer}>
      <Typography variant="section_subheading">{skill?.title}</Typography>
      <br />
      <Typography variant="body_text" sx={marginTopClass}>
        <ReactShowMoreText
          /* Default options */
          lines={4}
          more="Show more"
          less="...Show less"
          anchorClass="oooeeer"
          // onClick={this.executeOnClick}
          className="skillText"
          expanded={false}
          width={0}
        >
          {skill?.description}
        </ReactShowMoreText>
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
