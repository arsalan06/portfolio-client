import MainBanner from "@/components/MainBanner/MainBanner";
import Skills from "@/components/Skills/Skills";
import TotalProjectBanner from "@/components/TotalProjectBanner/TotalProjectBanner";
import { Box } from "@mui/material";
import React from "react";

function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <MainBanner />
      <TotalProjectBanner />
      <Skills/>
    </Box>
  );
}

export default Home;
