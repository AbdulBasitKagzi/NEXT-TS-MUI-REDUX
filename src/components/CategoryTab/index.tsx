import { useRef, useCallback, useState, useEffect } from "react";
import Image from "next/image";

import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";

import { Navigation } from "swiper";

// mui imports
import { Box, Button, useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";

import { assets } from "../../assets";

interface categoryProps {
  bestDeals: {
    id: string;
    type: string;
    category: string;
    image: string | undefined;
    productName: string;
    price: string;
    cancelPrice: string;
  }[];
}

const CategorySlider: React.FC<categoryProps> = ({ bestDeals }) => {
  const theme = useTheme();
  const sliderRef = useRef<SwiperRef>(null);
  const [display, setDisplay] = useState("block");

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  useEffect(() => {
    if (bestDeals.length === 0) {
      setDisplay("none");
    } else {
      setDisplay("block");
    }
  }, [bestDeals.length]);

  return (
    <Box sx={{ maxWidth: "1600px", mx: "auto" }}>
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
              overflow: {
                xs: "hidden",
              },
              overflowX: {
                sm: "hidden",
                xs: "auto",
              },
              justifyContent: "center",
              maxWidth: "85%",
              mx: "auto",
            }}
          >
            <Box className="ul">
              {bestDeals.length === 0 ? (
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: { sm: "30px", xs: "18px" },
                    fontFamily: "Jost",
                    p: 2,
                    textAlign: "center",
                  }}
                >
                  No Products found
                </Typography>
              ) : (
                bestDeals?.map((deals) => (
                  <SwiperSlide>
                    <>
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
                            xs: "30px",
                          },
                        }}
                      >
                        <Box
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
                          <img
                            src={deals?.image as string}
                            alt="deals"
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "contain",
                            }}
                          />
                        </Box>

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
                                lg: "20px",
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
                        <Box>
                          <Typography
                            sx={{
                              mr: 1,
                              display: "inline-block",
                              fontSize: {
                                lg: 20,
                                md: 18,
                                sm: 12,
                                xs: 9,
                              },
                              fontWeight: 400,
                              fontFamily: "Jost",
                              textDecoration: "line-through",
                              color: theme.palette.secondary.main,
                            }}
                          >
                            {deals.cancelPrice}
                          </Typography>
                          <Typography
                            sx={{
                              display: "inline-block",
                              color: theme.palette.primary.main,
                              fontSize: {
                                lg: 20,
                                md: 18,
                                sm: 12,
                                xs: 9,
                              },
                              fontWeight: 400,
                              fontFamily: "Jost",
                            }}
                          >
                            {deals.price}
                          </Typography>
                        </Box>
                      </Box>
                    </>
                  </SwiperSlide>
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
              height: { xl: 61, md: 50, xs: 30 },
              mt: { sm: 8, xs: 3 },
              color: theme.palette.success.main,
              borderRadius: 0,
              textTransform: "capitalize",
              fontFamily: "Jost",
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
              xl: display,
              lg: display,
              md: display,
              xs: "none",
            },
            top: { md: "25%" },
            left: { lg: "2%" },
          }}
          onClick={handlePrev}
        >
          <Image
            src={assets.icons.Left_Arrow_Icon}
            alt="previous"
            style={{
              width: "20px",
              height: "30px",
            }}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            zIndex: 2,
            display: {
              xl: display,
              lg: display,
              md: display,
              xs: "none",
            },
            top: { md: "25%" },
            left: { lg: "98%", md: "100%" },
          }}
          onClick={handleNext}
        >
          <Image
            src={assets.icons.Right_Arrow_Icon}
            alt="right"
            style={{
              width: "20px",
              height: "30px",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default CategorySlider;
