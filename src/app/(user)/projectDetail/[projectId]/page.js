"use client";
import { projectsDataAction } from "@/redux/slice/projectSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import Image from "next/image";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import { descriptionCard, labelText, stackBox } from "../projectStyles";
import TotalProjectBanner from "@/components/TotalProjectBanner/TotalProjectBanner";
import ContactBanner from "@/components/ContactForm/ContactBanner";
import { base_url } from "@/constant/constant";
import { SwiperNavButtons } from "../SwiperNavButtons";
import { Rating } from "react-simple-star-rating";
import ImgsViewer from "react-images-viewer";
import { projects } from "@/components/Projects/projectData";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ReactShowMoreText from "react-show-more-text";
function ProjectDetail({ params }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [projectData, setProjectData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [currImg, setCurrImg] = useState(0);
  useEffect(() => {
    let temObj = projects?.filter((item) => item.id == params.projectId);
    setProjectData(temObj);
  }, [projects]);
  return (
    <Box
      sx={{
        padding: "10px 10px",
      }}
    >
      <Grid container spacing={4} sx={{ mt: 1 }}>
      <Grid item xs={12} sm={12} md={12} lg={12}>
      {projectData?.length > 0 && (
        <Typography variant="main_heading">
          {projectData[0]?.projectName}
        </Typography>
      )}
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Swiper
          slidesPerView={matches ? 1 : 2}
          spaceBetween={35}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={true}
          modules={[Autoplay, Navigation, Pagination]}
          className="mySwiper"
          style={{
            width: matches ? "90vw" : "70vw",
            height: "300px",
          }}
        >
          <Box>
            {projectData?.length > 0 &&
              projectData[0]?.Media?.projectImages?.map((img, index) => (
                <SwiperSlide key={img.src}>
                  <Image
                    layout="fill"
                    objectFit="cover"
                    src={img.src}
                    alt="helo"
                    style={{cursor:"pointer"}}
                    onClick={(e) => {
                      setIsOpen(true);
                      setCurrImg(index);
                    }}
                  />
                </SwiperSlide>
              ))}
          </Box>
          <SwiperNavButtons />
        </Swiper>
      </Box>
      </Grid>
      {/* <Box sx={{ mt: 8 }}>
        <Typography variant="main_heading">Project video</Typography>
      </Box> */}
      {/* {projectData?.length > 0 && (
        <Box
          sx={{
            backgroundColor:"#2B2B37",
            // width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 4,
            padding:"15px 6px"
          }}
        >
          <video
            src={`${base_url}${projectData[0]?.Video?.projectVideo}`}
            height="250"
            width="50%"
            title="Iframe Example"
            controls={true}
          ></video>
        </Box>
      )} */}
        <Grid item xs={12} sm={12} md={12} lg={12} sx={{ mt: 8, pl:4, pr:4 }}>
          <Typography variant="main_heading">Project detail</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={8}>
          <Box sx={descriptionCard}>
            <Typography variant="section_subheading">Description</Typography>
            <Typography variant="body_text">
              <ReactShowMoreText
                /* Default options */
                lines={4}
                more="Show more"
                less="...Show less"
                anchorClass="oooeeer"
                // onClick={this.executeOnClick}
                className="skillText"
                expanded={false}
                width={0}
              >
                {projectData?.length > 0 && projectData[0]?.projectDescription}
              </ReactShowMoreText>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Box sx={descriptionCard}>
            <Box sx={stackBox}>
              <Typography variant="page_title" sx={labelText}>
                Order Date:
              </Typography>
              <Typography variant="body_text">
                {projectData?.length > 0 && projectData[0]?.startDate}
              </Typography>
            </Box>
            <Box sx={stackBox}>
              <Typography variant="page_title" sx={labelText}>
                Final Date:
              </Typography>
              <Typography variant="body_text">
                {projectData?.length > 0 && projectData[0]?.endDate}
              </Typography>
            </Box>
            <Box sx={stackBox}>
              <Typography variant="page_title" sx={labelText}>
                Status:
              </Typography>
              <Typography variant="body_text">
                {projectData?.length > 0 && projectData[0]?.status}
              </Typography>
            </Box>
          </Box>
        </Grid>
      
      {/* <Typography
        variant="main_heading"
      >
        Client reviews
      </Typography>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Swiper
          slidesPerView={2}
          spaceBetween={35}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={true}
          modules={[Autoplay, Navigation, Pagination]}
          className="mySwiper"
          style={{
            width: "68vw",
            height: "250px",
          }}
        >
          <Box>
            {clientsReview?.clientsReview?.clients?.length > 0 &&
              clientsReview?.clientsReview?.clients?.map((review) => (
                <SwiperSlide key={review.id}>
                  <Box
                    sx={{
                      backgroundColor: "#2B2B37",
                      height: "100%",
                      padding: "15px 15px",
                      textAlign: "left",
                    }}
                  >
                    <Box sx={{ ...stackBox }}>
                      <Typography variant="section_subheading">
                        {review.clientName}
                      </Typography>
                      <Avatar
                        size="Large"
                        src={`${base_url}${review.clientImage}`}
                        sx={{
                          position: "absolute",
                          top: -10,
                          right: 10,
                        }}
                      ></Avatar>
                    </Box>
                    <Typography variant="body_text">
                      {review?.message}
                    </Typography>
                    <Box
                      sx={{
                        backgroundColor: "#202029",
                        padding: "0px 2px",
                        borderRadius: "30%",
                        width: "120px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Rating
                        initialValue={review?.ratting}
                        size={20}
                        style={{ marginTop: "5px" }}
                      />
                    </Box>
                  </Box>
                </SwiperSlide>
              ))}
          </Box>
          <SwiperNavButtons />
        </Swiper>
      </Box> */}
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <TotalProjectBanner />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
      <Box>
        <ContactBanner />
      </Box>
      </Grid>
      {isOpen && (
        <ImgsViewer
          imgs={projectData[0]?.Media?.projectImages}
          currImg={currImg}
          showThumbnails={true}
          isOpen={isOpen}
          onClickPrev={(e) => setCurrImg(currImg - 1)}
          onClickNext={(e) => setCurrImg(currImg + 1)}
          onClickThumbnail={(index) => setCurrImg(index)}
          onClose={(e) => setIsOpen(false)}
        />
      )}
    </Grid>
    </Box>
  );
}

export default ProjectDetail;
