import Projects from "@/components/Projects/Projects";
import { Box } from "@mui/material";
import React from "react";

function Page() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Projects />
    </Box>
  );
}

export default Page;
