"use client";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import {
  exploreButton,
  mainContainer,
  mainTitle,
  typewriterTage,
  typewriterText,
} from "./mainBannerStyles";
import Image from "next/image";
import { useDispatch, useSelector } from "@/redux/store";
import { userDetailAction } from "@/redux/slice/userDetailSlice";
import { skillsDataAction } from "@/redux/slice/skillsSlice";
function MainBanner({ userName }) {
  const dispatch = useDispatch();
  const userDetail = useSelector((state) => state.userDetailReducer);
  React.useEffect(() => {
    if (userName) {
      dispatch(userDetailAction(userName));
      dispatch(skillsDataAction(userName));
    }
  }, [userName]);
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
            width: "55%",
          }}
        >
          <Typography sx={mainTitle}>Discover my Amazing Art Space!</Typography>
          <Typography sx={typewriterTage} suppressHydrationWarning>
            {`<code>`}
            {userDetail?.userDetail?.user && (
              <Typography sx={{ ...typewriterText }}>
                <Typewriter
                  suppressHydrationWarning
                  words={JSON.parse(
                    userDetail?.userDetail?.user?.tageLines
                  )?.map((item) => item)}
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
