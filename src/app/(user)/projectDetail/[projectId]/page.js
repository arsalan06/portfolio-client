"use client";
import { projectsDataAction } from "@/redux/slice/projectSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import Image from "next/image";
import { Box, Grid, Typography } from "@mui/material";
import { SwiperNavButtons } from "../SwiperNavButtons";
import { descriptionCard, labelText, stackBox } from "../projectStyles";
function projectDetail({ params }) {
  const dispatch = useDispatch();
  const projectData = useSelector((state) => state.projectReducer);
  const [project, setProject] = useState([]);
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  useEffect(() => {
    const userName = localStorage.getItem("userName");
    dispatch(projectsDataAction(userName));
  }, []);
  useEffect(() => {
    // if (params.projectId) {
    let temObj = projectData?.projectData?.projects?.filter(
      (item) => item.id == params.projectId
    );
    setProject(temObj);
    // }
  }, [params.projectId, projectData?.projectData?.projects]);
  console.log(" state");
  console.log(project);
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
        sx={
          {
            // paddingBottom: "10px",
          }
        }
      >
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
            width: "900px",
            height: "300px",
            position: "revert",
          }}
        >
          {project?.length > 0 &&
            project[0]?.Media?.projectImages?.map((img) => (
              <SwiperSlide key={img.id}>
                <Image
                  layout="fill"
                  objectFit="fill"
                  src={`http://localhost:7700/${img}`}
                  alt="helo"
                />
              </SwiperSlide>
            ))}
          {/* <SwiperNavButtons /> */}
        </Swiper>
      </Box>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Box sx={descriptionCard}>
            <Typography variant="section_subheading">Description</Typography>
            <br />
            <Typography variant="body_text">
              {project?.length > 0 && project[0]?.projectDescription}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
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
    </Box>
  );
}

export default projectDetail;
