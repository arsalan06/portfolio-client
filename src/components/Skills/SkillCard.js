import { Box, Card, Typography } from "@mui/material";
import React from "react";
import { marginTopClass, orderText, skillCardContainer } from "./skillsStyles";
import { BiChevronRight } from "react-icons/bi";

function SkillCard() {
  return (
    <Card sx={skillCardContainer}>
      <Typography variant="section_subheading">Web Development</Typography>
      <br />
      <Typography variant="body_text" sx={marginTopClass}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse
        commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur
        doloribus.
      </Typography>
      <br />
      <Typography variant="order_text" sx={orderText}>
        order now{" "}
        <Box
          sx={{
            marginTop: "7px",
          }}
        >
          <BiChevronRight style={{fontSize:"22px"}}/>
        </Box>
      </Typography>
    </Card>
  );
}

export default SkillCard;
