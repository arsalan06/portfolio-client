"use client";
import MainBanner from "@/components/MainBanner/MainBanner";
import Skills from "@/components/Skills/Skills";
import TotalProjectBanner from "@/components/TotalProjectBanner/TotalProjectBanner";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
function Home({ params }) {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    if (params.name !== undefined) {
      localStorage.setItem("userName", params.name);
    } else {
      setUserName(localStorage.getItem("userName"));
    }
  }, [params.name]);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <MainBanner userName={userName} />
      <TotalProjectBanner />
      <Skills userName={userName} />
    </Box>
  );
}

export default Home;
