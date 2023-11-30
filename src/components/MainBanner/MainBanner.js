"use client";
import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import {
  exploreButton,
  mainContainer,
  mainTitle,
  typewriterTage,
  typewriterText,
} from "./mainBannerStyles";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useRouter } from "next/navigation";
const MainBanner = ({ userName }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    isClient && (
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
            padding: "0px 30px",
            alignItems:"center"
          }}
        >
          <Box
            sx={{
              width: {xs:"100%", sm: "100%", md:"80%",lg:"55%"},
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              height:"100%"
            }}
          >
            <Typography sx={mainTitle}>
              Discover my Amazing Art Space!
            </Typography>
            <Typography sx={typewriterTage} suppressHydrationWarning>
              {`<code>`}
              <Typography sx={{ ...typewriterText }}>
                <Typewriter
                  suppressHydrationWarning
                  words={[
                    "Professional Coder",
                    "Reactjs Developer",
                    "Nextjs Developer",
                    "Nodejs Develope",
                  ]}
                  loop={true}
                  typeSpeed={70}
                />
              </Typography>
              {`</code>`}
            </Typography>
            <Button
              variant="contained"
              sx={exploreButton}
              onClick={() => router.push("/portfolio")}
            >
              Explore Now
            </Button>
          </Box>
          <Box
            sx={{
              width: "30%",
              display: matches && "none",
            }}
          >
            <Image
              src="/images/profile2.png"
              // src="/images/profile-img.png"
              
              width={270}
              height={350}
              alt="Picture of the author"
              // style={{
              //   position: "relative",
              //   top: -50,
              // }}
            />
          </Box>
        </Box>
      </Box>
    )
  );
};

export default MainBanner;
