import { useRef, useCallback } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import Image from "next/image";
import Link from "next/link";

import "swiper/css/navigation";

import styles from "./swiper.module.css";
import { Navigation } from "swiper";

// mui imports
import { Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";

import { assets } from "../../assets";
import { useTheme } from "@mui/material";
import { productProps } from "@/store/product/product.types";

interface dealsProps {
  bestDeals: productProps[];
  title: string;
}
const Slider: React.FC<dealsProps> = ({ bestDeals, title }) => {
  const sliderRef = useRef<SwiperRef>(null);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const theme = useTheme();

  return (
    <Box sx={{ maxWidth: "1600px", mx: "auto" }}>
      <Box>
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Jost",
            fontSize: "39px",
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          Best {title}
        </Typography>
      </Box>
      <Box sx={{ mx: 5, position: "relative" }}>
        <Swiper
          ref={sliderRef}
          slidesPerView={4}
          centeredSlides={false}
          spaceBetween={30}
          modules={[Navigation]}
          className="mySwiper"
        >
          <Box
            sx={{
              display: "flex",
              overflow: "hidden",
              overflowX: {
                sm: "hidden",
                xs: "auto",
              },
              justifyContent: "space-between",
              maxWidth: "85%",
              mx: "auto",
            }}
          >
            <Box
              className="ul"
              sx={{
                width: {
                  xl: "389px",
                  lg: "350px",
                  md: "250px",
                  sm: "189px",
                  xs: "89px",
                },
              }}
            >
              {bestDeals.length === 0 ? (
                <Typography>No Products found</Typography>
              ) : (
                bestDeals?.map((deals) => (
                  <>
                    <SwiperSlide key={deals.id}>
                      <Link
                        href={`/product/singleProduct/${deals.id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <Box
                          key={deals.id}
                          className="li"
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",

                            marginTop: {
                              xl: "50px",
                              lg: "40px",
                              md: "50px",
                              sm: "56px",
                              xs: "30px",
                            },
                            cursor: "pointer",
                          }}
                        >
                          {deals.productImages?.map((image, index: number) => {
                            if (index === 0) {
                              return (
                                <>
                                  <Box
                                    key={index}
                                    sx={{
                                      width: {
                                        lg: "200px",
                                        md: "180px",
                                        sm: "100px",
                                        xs: "50px",
                                      },
                                      height: {
                                        lg: "200px",
                                        md: "180px",
                                        sm: "150px",
                                        xs: "100px",
                                      },
                                    }}
                                  >
                                    <>
                                      {image?.productImage && (
                                        <img
                                          src={
                                            process.env.NEXT_PUBLIC_IMAGE_URL +
                                            image?.productImage
                                          }
                                          alt="deals"
                                          style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "contain",
                                          }}
                                        />
                                      )}
                                    </>
                                  </Box>
                                </>
                              );
                            }
                          })}

                          <Box
                            sx={{
                              textAlign: "left",
                              marginTop: {
                                md: "55px",
                                sm: "30px",
                                xs: "10px",
                              },
                            }}
                          >
                            <Typography
                              sx={{
                                fontSize: {
                                  lg: "25px",
                                  md: "18px",
                                  sm: "16px",
                                  xs: "8px",
                                },
                                fontWeight: 700,
                                fontFamily: "Jost",
                                wordBreak: "break-all",
                                padding: { xs: "1px" },
                                color: theme.palette.primary.dark,
                              }}
                            >
                              {deals.productName}
                            </Typography>
                          </Box>
                          <Box sx={{ textAlign: "left" }}>
                            <Typography
                              sx={{
                                mr: 1,
                                display: "inline-block",
                                color: theme.palette.secondary.light,
                                fontSize: {
                                  lg: 25,
                                  md: 18,
                                  sm: 12,
                                  xs: 9,
                                },
                                fontWeight: 400,
                                fontFamily: "Jost",
                                textDecoration: "line-through",
                              }}
                            >
                              $ {deals.productOriginalPrice}
                            </Typography>
                            <Typography
                              sx={{
                                display: "inline-block",
                                color: theme.palette.secondary.main,
                                fontSize: {
                                  lg: 25,
                                  md: 18,
                                  sm: 12,
                                  xs: 9,
                                },
                                fontWeight: 400,
                                fontFamily: "Jost",
                              }}
                            >
                              $ {deals.productCurrentPrice}
                            </Typography>
                          </Box>
                        </Box>
                      </Link>
                    </SwiperSlide>
                  </>
                ))
              )}
            </Box>
          </Box>
        </Swiper>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            sx={{
              background: theme.palette.primary.dark,
              width: {
                xl: 256,
                lg: 200,
                md: 150,
                xs: 100,
                sm: 110,
              },
              height: { xl: 61, lg: 50, xs: 30 },
              mt: { sm: 8, xs: 2 },
              color: theme.palette.success.main,
              borderRadius: 0,
              textTransform: "capitalize",
            }}
          >
            View All
          </Button>
        </Box>
        <Box
          sx={{
            position: "absolute",
            zIndex: 2,
            display: {
              xl: "block",
              lg: "block",
              md: "block",
              sm: "block",
              xs: "block",
            },
            top: { xl: "28%", lg: "26%", xs: "27%" },
            left: { lg: 0, md: "-2.4%", sm: "-4%", xs: "-7%" },
          }}
          onClick={handlePrev}
        >
          <Image
            className={styles.icon}
            src={assets.icons.Left_Arrow_Icon}
            alt="previous"
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            zIndex: 2,
            display: "block",
            top: { xl: "28%", lg: "26%", xs: "27%" },
            left: { lg: "98%", sm: "100%", xs: "103%" },
          }}
          onClick={handleNext}
        >
          <Image
            className={styles.icon}
            src={assets.icons.Right_Arrow_Icon}
            alt="right"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Slider;
