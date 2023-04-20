// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Image from "next/image";

import styles from "./swiperstyles.module.css";
import "swiper/css";
import "swiper/css/navigation";
import { Box, Typography, useTheme } from "@mui/material";
import { assets } from "../../assets";
const ImageSlider: React.FC = () => {
  const theme = useTheme();

  const imageTextStyle = {
    text: {
      fontSize: "95px",
      color: theme.palette.success.main,
    },
    "@media (max-width: 600px)": {
      text: {
        fontSize: "45px",
      },
    },
    // "@media (max-width: 600px)": {
    //   text: {
    //     fontSize: "45px",
    //   },
    // },
  };
  return (
    <Box
      sx={{
        position: "relative",
        width: { xs: "100%" },
        opacity: "70%",
        background: "#212121",
        mt: 3,
      }}
    >
      <Swiper
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        modules={[Navigation]}
        wrapperClass={styles["swiper-container"]}
      >
        <div className={`swiper-button-prev ${styles["swiper-button-prev"]}`} />
        <div className={`swiper-button-next ${styles["swiper-button-next"]}`} />
        <SwiperSlide>
          <Box
            sx={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              src={assets.images.outletBerlin}
              alt="india"
              style={{ zIndex: 3 }}
              layout="responsive"
            />
            <Box
              sx={{
                position: "absolute",
                height: "100%",
                width: "100%",
                zIndex: 3,
                opacity: 0.7,
                background: "rgba(0,0,0,0.8)",
              }}
            />
            <Box sx={{ position: "absolute", zIndex: 3 }}>
              <Typography
                sx={{
                  fontFamily: "Jost",
                  fontSize: {
                    lg: "39px",
                    sm: "29px",
                    xs: "15px",
                  },
                  fontWeight: 400,
                  color: theme.palette.success.dark,
                }}
              >
                Visit our outlets in{" "}
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: { lg: "95px", sm: "75px", xs: "45px" },
                  color: theme.palette.success.main,
                }}
              >
                Berlin
              </Typography>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              src={assets.images.outletBerlin}
              alt="india"
              style={{ zIndex: 3 }}
              layout="responsive"
            />
            <Box
              sx={{
                position: "absolute",
                height: "100%",
                width: "100%",
                zIndex: 3,
                opacity: 0.7,
                background: "rgba(0,0,0,0.8)",
              }}
            />
            <Box sx={{ position: "absolute", zIndex: 3 }}>
              <Typography
                sx={{
                  fontFamily: "Jost",
                  fontSize: {
                    lg: "39px",
                    sm: "29px",
                    xs: "15px",
                  },
                  fontWeight: 400,
                  color: theme.palette.success.dark,
                }}
              >
                Visit our outlets in{" "}
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: { lg: "95px", sm: "75px", xs: "45px" },
                  color: theme.palette.success.main,
                }}
              >
                India
              </Typography>
            </Box>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default ImageSlider;
