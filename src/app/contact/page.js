import ContactForm from "@/components/ContactForm/ContactForm";
import { Box } from "@mui/material";
import React from "react";

function contact() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <ContactForm />
    </Box>
  );
}

export default contact;
