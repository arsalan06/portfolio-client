import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { BiChevronRight, BiFullscreen } from "react-icons/bi";
import { orderText, marginTopClass } from "./projectsStyles";
import styles from "./style.module.css";
import Image from "next/image";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { base_url } from "@/constant/constant";
function ProjectCard({ data }) {
  const router = useRouter();
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#my-gallery",
      children: "a",
      pswpModule: () => import("photoswipe"),
    });

    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);
  return (
    <div className={styles.mainBox}>
      <Box className="pswp-gallery" id="my-gallery">
        {data?.Media?.projectImages.length > 0 &&
          data?.Media?.projectImages?.map((img) => (
            <a
              href={`${base_url}${img}`}
              data-pswp-width="1875"
              data-pswp-height="2500"
              target="_blank"
              key={img}
            >
              <Image
                layout="fill"
                objectFit="cover"
                src={`${base_url}${img}`}
                alt="helo"
              />
            </a>
          ))}
      </Box>
      <Box className={styles.secondaryBox}>
        <Typography variant="section_subheading">Web Development</Typography>
        <br />
        <Typography variant="body_text" sx={marginTopClass}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
          esse commodi deserunt vitae.
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
    </div>
    // </Box>
  );
}

export default ProjectCard;
