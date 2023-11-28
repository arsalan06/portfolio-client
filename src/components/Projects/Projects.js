"use client";
import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { mainContainer } from "./projectsStyles";
import { projects } from "./projectData";

function Projects() {
  return (
    <Box sx={mainContainer}>
      <Grid container spacing={4}>
        <Grid item md={12} lg={12}>
          <Typography variant="section_heading">My Portfolio</Typography>
        </Grid>
        {projects?.map((project) => (
          <Grid item xs={12} sm={12} md={6} lg={6} key={project.id}>
            <ProjectCard data={project}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Projects;
