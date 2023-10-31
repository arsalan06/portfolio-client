"use client";
import MainBanner from "@/components/MainBanner/MainBanner";
import Skills from "@/components/Skills/Skills";
import TotalProjectBanner from "@/components/TotalProjectBanner/TotalProjectBanner";
import { Box } from "@mui/material";
import React, { useEffect } from "react";
function Home({ params }) {
  useEffect(() => {
    if (params.name) localStorage.setItem("userName", params.name);
  }, [params?.name]);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <MainBanner userName={params?.name} />
      <TotalProjectBanner />
      <Skills userName={params?.name} />
    </Box>
  );
}

export default Home;
