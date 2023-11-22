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
import { Box, Grid, Typography } from "@mui/material";
import { descriptionCard, labelText, stackBox } from "../projectStyles";
import TotalProjectBanner from "@/components/TotalProjectBanner/TotalProjectBanner";
import ContactBanner from "@/components/ContactForm/ContactBanner";
import { base_url } from "@/constant/constant";
function projectDetail({ params }) {
  const dispatch = useDispatch();
  const projectData = useSelector((state) => state.projectReducer);
  const [project, setProject] = useState([]);
  useEffect(() => {
    const userName = localStorage.getItem("userName");
    dispatch(projectsDataAction(userName));
  }, []);
  useEffect(() => {
    let temObj = projectData?.projectData?.projects?.filter(
      (item) => item.id == params.projectId
    );
    setProject(temObj);
  }, [params.projectId, projectData?.projectData?.projects]);
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
      <Box>
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={true}
          modules={[Autoplay, Navigation, Pagination, A11y]}
          // slidesPerView="auto"
          className="mySwiper"
          style={{
            width: "950px",
            height: "300px",
            position: "revert",
          }}
        >
          <Box>
            {project?.length > 0 &&
              project[0]?.Media?.projectImages?.map((img) => (
                <SwiperSlide key={img.id}>
                  <Image
                    layout="fill"
                    objectFit="cover"
                    src={`${base_url}${img}`}
                    alt="helo"
                  />
                </SwiperSlide>
              ))}
          </Box>
        </Swiper>
      </Box>
      {project?.length > 0 && (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <video
            src={`${base_url}${project[0]?.Video?.projectVideo}`}
            height="300"
            width="400"
            title="Iframe Example"
            controls={true}
          ></video>
        </Box>
      )}
      <Grid container spacing={4}>
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
      <Box>
        <TotalProjectBanner />
      </Box>
      <Box>
        <ContactBanner />
      </Box>
    </Box>
  );
}

export default projectDetail;
