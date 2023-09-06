import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import ProjectCard from "./ProjectCard";
import { mainContainer } from "./projectsStyles";

function Projects() {
  return (
    <Box sx={mainContainer}>
      <Grid container spacing={4}>
        <Grid item md={12} lg={12}>
          <Typography variant="section_heading">My Portfolio</Typography>
        </Grid>
        <Grid item sx={12} sm={12} md={6} lg={6}>
          <ProjectCard />
        </Grid>
        <Grid item sx={12} sm={12} md={6} lg={6}>
          <ProjectCard />
        </Grid>
        <Grid item sx={12} sm={12} md={6} lg={6}>
          <ProjectCard />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Projects;
