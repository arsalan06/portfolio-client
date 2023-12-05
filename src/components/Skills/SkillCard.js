"use client";
import { Box, Card, Typography } from "@mui/material";
import React, { useState } from "react";
import {
  marginTopClass,
  orderText,
  skillCardContainer,
  skillCardContainerTran,
} from "./skillsStyles";
import { BiChevronRight } from "react-icons/bi";
import { useRouter } from "next/navigation";
import ReactShowMoreText from "react-show-more-text";
function SkillCard({ skill }) {
  const router = useRouter();
  // const [skillId, setSkillId] = useState(null);
  return (
    <Card
      // sx={skill?.id === skillId ? skillCardContainerTran : skillCardContainer}
      sx={skillCardContainer}
    >
      <Typography variant="section_subheading">{skill?.title}</Typography>
      <br />
      {/* {skillId === skill?.id ? (
        <Typography variant="body_text" sx={marginTopClass}>
          {skill?.description}
          <span
            style={{
              textDecoration: "underline",
              cursor: "pointer",
              color: "#FFC107",
            }}
            onClick={() => setSkillId(null)}
          >
            show less
          </span>
        </Typography>
      ) : ( */}
        <Typography variant="body_text" sx={marginTopClass}>
          <ReactShowMoreText
             lines={4}
             more="Show more"
             less="...Show less"
             anchorClass="oooeeer"
             className="skillText"
             expanded={false}
             width={0}
           >
             {skill?.description}
           </ReactShowMoreText>
          {/* {skill?.description.substring(0, 150)}...
          <span
            style={{
              textDecoration: "underline",
              cursor: "pointer",
              color: "#FFC107",
            }}
            onClick={() => setSkillId(skill?.id)}
          >
            show more
          </span> */}
        </Typography>
      {/* )} */}

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
