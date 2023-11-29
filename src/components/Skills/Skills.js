import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SkillCard from "./SkillCard";
import { mainContainer } from "./skillsStyles";
import { useSelector } from "react-redux";
import { skills } from "./skillData";

function Skills() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    isClient && (
      <Box sx={mainContainer}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography variant="section_heading">My Services</Typography>
          </Grid>
          {skills?.map((skill) => (
            <Grid item xs={12} sm={12} md={4} lg={4} key={skill.id}>
              <SkillCard skill={skill} />
            </Grid>
          ))}
        </Grid>
      </Box>
    )
  );
}

export default Skills;
