import { Box, Card, Typography } from "@mui/material";
import React from "react";
import { BiChevronRight } from "react-icons/bi";
import {
  projectCardContainer,
  readMoreBox,
  orderText,
  marginTopClass,
} from "./projectsStyles";
import styles from "./style.module.css";
import Image from "next/image";

function ProjectCard() {
  return (
    // <Box sx={projectCardContainer}>
    <div className={styles.mainBox}>
      <Image layout="fill" objectFit="cover" src="/images/background2.jpg" />
      <Box className={styles.secondaryBox}>
        <Typography variant="section_subheading">Web Development</Typography>
        <br />
        <Typography variant="body_text" sx={marginTopClass}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
          esse commodi deserunt vitae.
        </Typography>
        <Typography variant="order_text" sx={orderText}>
          order now{" "}
          <Box
            sx={{
              marginTop: "7px",
            }}
          >
            <BiChevronRight style={{ fontSize: "22px" }} />
          </Box>
        </Typography>
      </Box>
    </div>
    // </Box>
  );
}

export default ProjectCard;
