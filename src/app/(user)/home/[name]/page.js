"use client"
import MainBanner from "@/components/MainBanner/MainBanner";
import Skills from "@/components/Skills/Skills";
import TotalProjectBanner from "@/components/TotalProjectBanner/TotalProjectBanner";
import { Box } from "@mui/material";
import React from "react";
import { useRouter } from 'next/navigation'
function Home({params}) {
  const router = useRouter()
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* <p style={{color:"white"}}>Post: {params.name}</p> */}
      <MainBanner />
      <TotalProjectBanner />
      <Skills/>
    </Box>
  );
}

export default Home;
