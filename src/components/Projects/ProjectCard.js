import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { BiChevronRight, BiFullscreen } from "react-icons/bi";
import { orderText, marginTopClass } from "./projectsStyles";
import styles from "./style.module.css";
import Image from "next/image";
import ImgsViewer from "react-images-viewer";
import Link from "next/link";
function ProjectCard({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currImg, setCurrImg] = useState(0);
  return (
    <div className={styles.mainBox}>
      <Box className="pswp-gallery" id="my-gallery">
        {data?.Media?.projectImages.length > 0 && (
          <Image
            layout="fill"
            objectFit="cover"
            src={data?.Media?.projectImages[0]?.src}
            alt="helo"
            style={{
              borderRadius: "8px",
            }}
            onClick={(e) => {
              setIsOpen(true);
              setCurrImg(0);
            }}
          />
        )}
      </Box>
      <Box className={styles.secondaryBox}>
        <Typography variant="section_subheading">
          {data?.projectName}
        </Typography>
        <br />
        <Typography variant="body_text" sx={marginTopClass}>
          {data?.projectDescription?.substring(0, 135)}...
        </Typography>
        <Link href={`/projectdetail/${data.id}`}>
          <Typography variant="order_text" sx={orderText}>
            show detail
            <Box
              sx={{
                marginTop: "7px",
              }}
            >
              <BiChevronRight style={{ fontSize: "22px" }} />
            </Box>
          </Typography>
        </Link>
      </Box>
      <Box className={styles.screenIcon}>
        <BiFullscreen style={{ color: "white", fontSize: "22px" }} />
      </Box>
      <ImgsViewer
        imgs={data?.Media?.projectImages}
        currImg={currImg}
        showThumbnails={true}
        isOpen={isOpen}
        onClickPrev={(e) => setCurrImg(currImg - 1)}
        onClickNext={(e) => setCurrImg(currImg + 1)}
        onClickThumbnail={(index) => setCurrImg(index)}
        onClose={(e) => setIsOpen(false)}
      />
    </div>
    // </Box>
  );
}

export default ProjectCard;
