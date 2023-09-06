import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import SkillCard from "./SkillCard";
import { mainContainer } from "./skillsStyles";

function Skills() {
  return (
    <Box sx={mainContainer}>
      <Grid container spacing={3}>
        <Grid item md={12} lg={12}>
          <Typography variant="section_heading">My Services</Typography>
        </Grid>
        <Grid item sx={12} sm={12} md={4} lg={4}>
          <SkillCard />
        </Grid>
        <Grid item sx={12} sm={12} md={4} lg={4}>
          <SkillCard />
        </Grid>
        <Grid item sx={12} sm={12} md={4} lg={4}>
          <SkillCard />
        </Grid> <Grid item sx={12} sm={12} md={4} lg={4}>
          <SkillCard />
        </Grid>
        <Grid item sx={12} sm={12} md={4} lg={4}>
          <SkillCard />
        </Grid>
        <Grid item sx={12} sm={12} md={4} lg={4}>
          <SkillCard />
        </Grid>
        <Grid item sx={12} sm={12} md={4} lg={4}>
          <SkillCard />
        </Grid>
        <Grid item sx={12} sm={12} md={4} lg={4}>
          <SkillCard />
        </Grid>
        <Grid item sx={12} sm={12} md={4} lg={4}>
          <SkillCard />
        </Grid>

      </Grid>
    </Box>
  );
}

export default Skills;
