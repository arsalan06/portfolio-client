"use client";
import { Box, Button, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import {
  exploreButton,
  mainContainer,
  mainTitle,
  typewriterTage,
  typewriterText,
} from "./mainBannerStyles";
import Image from "next/image";
function MainBanner() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <Box
      sx={{
        ...mainContainer,
        backgroundImage: `url('/images/background2.jpg')`,
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          // alignItems:"center"
          padding: "20px 30px",
        }}
      >
        <Box
          sx={{
            width: "50%",
          }}
        >
          <Typography sx={mainTitle}>Discover my Amazing Art Space!</Typography>
          <Typography sx={typewriterTage} suppressHydrationWarning>
            {`<code>`}
            {isClient && (
              <Typography sx={{ ...typewriterText }}>
                <Typewriter
                  suppressHydrationWarning
                  words={[
                    "Reactjs Developer",
                    "Nextjs Developer",
                    "Professional Coder",
                  ]}
                  loop={true}
                  typeSpeed={70}
                />
              </Typography>
            )}

            {`</code>`}
          </Typography>
          <Button variant="contained" sx={exploreButton}>
            Explore Now
          </Button>
        </Box>
        <Box
          sx={{
            width: "28%",
          }}
        >
          <Image
            src="/images/profile2.png"
            width={270}
            height={330}
            alt="Picture of the author"
            style={{
              position: "relative",
              top: -50,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default MainBanner;
