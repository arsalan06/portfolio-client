"use client"
import MainBanner from "@/components/MainBanner/MainBanner";
import Skills from "@/components/Skills/Skills";
import TotalProjectBanner from "@/components/TotalProjectBanner/TotalProjectBanner";
import { Box } from "@mui/material";
import React from "react";
import { useRouter } from 'next/navigation'
// import { increment } from "@/redux/slice/counterSlice";
// import { useDispatch, useSelector } from "@/redux/store";
function Home({params}) {
  const router = useRouter()
  // const dispatch=useDispatch()
  // const {value}=useSelector((state)=>state.counterReducer)
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* <p style={{color:"white"}}>Post: {value}</p>
      <button onClick={()=>dispatch(increment())}>increment</button> */}
      <MainBanner />
      <TotalProjectBanner />
      <Skills/>
    </Box>
  );
}

export default Home;
