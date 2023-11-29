import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { mainContainer, mainTitle, sendButton } from "./contactFormStyles";
import { useRouter } from "next/navigation";
function ContactBanner() {
  const router = useRouter();
  return (
    <Box
      sx={{
        ...mainContainer,
        backgroundImage: `url('/images/background2.jpg')`,
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        textAlign:"center"
      }}
    >
      <Typography sx={mainTitle}>Ready to order your project?</Typography>
      <Typography variant="page_title">Lets work together!</Typography>
      <Button
        variant="contained"
        sx={sendButton}
        onClick={() => router.push("/contact")}
      >
        Contact Me
      </Button>
    </Box>
  );
}

export default ContactBanner;
