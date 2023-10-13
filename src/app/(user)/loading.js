import { Box } from "@mui/material";
import React from "react";

function loading() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontSize: "18px",
        fontWeight: "bold",
      }}
    >
      loading.......
    </Box>
  );
}

export default loading;
