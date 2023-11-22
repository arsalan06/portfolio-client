"use client";
import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { mainContainer } from "./projectsStyles";
import { useDispatch, useSelector } from "react-redux";
import { projectsDataAction } from "@/redux/slice/projectSlice";

function Projects() {
  const dispatch = useDispatch();
  const projectData = useSelector((state) => state.projectReducer);
  useEffect(() => {
    const userName = localStorage.getItem("userName");
    dispatch(projectsDataAction(userName));
  }, []);
  return (
    <Box sx={mainContainer}>
      <Grid container spacing={4}>
        <Grid item md={12} lg={12}>
          <Typography variant="section_heading">My Portfolio</Typography>
        </Grid>
        {projectData?.projectData?.projects?.map((project) => (
          <Grid item xs={12} sm={12} md={6} lg={6} key={project.id}>
            <ProjectCard data={project}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Projects;
