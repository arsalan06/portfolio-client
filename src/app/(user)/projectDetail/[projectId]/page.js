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
import { ClientReviewAction } from "@/redux/slice/clientsSlice";
function ProjectDetail({ params }) {
  const projectData = useSelector((state) => state.projectReducer);
  const clientsReview = useSelector((state) => state.clientsReducer);
  const dispatch = useDispatch();
  const [project, setProject] = useState([]);
  useEffect(() => {
    const userName = localStorage.getItem("userName");
    dispatch(projectsDataAction(userName));
    dispatch(ClientReviewAction(userName));
  }, []);
  useEffect(() => {
    let temObj = projectData?.projectData?.projects?.filter(
      (item) => item.id == params.projectId
    );
    setProject(temObj);
  }, [projectData?.projectData]);
  return (
    <Box
      sx={{
        padding: "10px 40px",
      }}
    >
      {project?.length > 0 && (
        <Typography variant="main_heading">
          {project[0]?.projectName}
        </Typography>
      )}
      <Box
        sx={{
          width: "100%",
          display: "flex",
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
            width: "65vw",
            height: "300px",
          }}
        >
          <Box>
            {project?.length > 0 &&
              project[0]?.Media?.projectImages?.map((img) => (
                <SwiperSlide key={img}>
                  <Image
                    layout="fill"
                    objectFit="cover"
                    src={`${base_url}${img}`}
                    alt="helo"
                  />
                </SwiperSlide>
              ))}
          </Box>
          <SwiperNavButtons />
        </Swiper>
      </Box>
      {project?.length > 0 && (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 6,
          }}
        >
          <video
            src={`${base_url}${project[0]?.Video?.projectVideo}`}
            height="300"
            width="50%"
            title="Iframe Example"
            controls={true}
          ></video>
        </Box>
      )}
      <Typography variant="main_heading">Project detail</Typography>
      <Grid container spacing={4} sx={{mb:8}}>
        <Grid item xs={12} sm={12} md={8} lg={8}>
          <Box sx={descriptionCard}>
            <Typography variant="section_subheading">Description</Typography>
            <Typography variant="body_text">
              {project?.length > 0 && project[0]?.projectDescription}
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
                {project?.length > 0 && project[0]?.startDate}
              </Typography>
            </Box>
            <Box sx={stackBox}>
              <Typography variant="page_title" sx={labelText}>
                Final Date:
              </Typography>
              <Typography variant="body_text">
                {project?.length > 0 && project[0]?.endDate}
              </Typography>
            </Box>
            <Box sx={stackBox}>
              <Typography variant="page_title" sx={labelText}>
                Status:
              </Typography>
              <Typography variant="body_text">
                {project?.length > 0 && project[0]?.status}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Typography
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
      </Box>
      <Box>
        <TotalProjectBanner />
      </Box>
      <Box>
        <ContactBanner />
      </Box>
    </Box>
  );
}

export default ProjectDetail;
