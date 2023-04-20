import { RootState } from "@/store/store";

import { useState, useRef, useCallback } from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// mui imports
import { Box } from "@mui/material";

// css
import style from "./imageSwiper.module.css";
import classes from "./swiper.module.css";
import styles from "./imageDetail.module.css";

import { assets } from "@/assets";

function ProductImageSlider() {
  const [image, setImage] = useState<string | undefined>();
  const [imageValue, setImageValue] = useState<number>(0);
  const sliderRef = useRef<SwiperRef | null>(null);
  const slider = useRef<SwiperRef | null>(null);
  const { selectedProduct } = useSelector((state: RootState) => state.product);

  const handlePrev = useCallback((value: string) => {
    if (value === "slider" && slider.current) {
      slider.current.swiper.slidePrev();
    }
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback((value: string) => {
    if (value === "slider" && slider.current) {
      setImage("");
      slider.current.swiper.slideNext();
    }
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <Box
      sx={{
        maxWidth: {
          sm: "50%",
          xs: "100%",
        },
        mx: "auto",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "relative",
          top: { sm: "40px" },
        }}
      >
        <Swiper
          // navigation={true}
          ref={slider}
          modules={[Navigation]}
          className="mySwiper"
        >
          {selectedProduct?.productImages?.map((images) => (
            <SwiperSlide className={style.swiperImage} key={images.id}>
              {image ? (
                <Box sx={{ width: "280px", height: "436px" }}>
                  <img
                    src={image.src}
                    alt="women"
                    style={{
                      borderInlineColor: "black",
                      border: 2,
                      borderColor: "#E5E5EA",
                      borderStyle: "solid",
                      borderRadius: 10,
                      boxShadow: "0px 10px 10px",
                      marginBottom: "10px",
                      width: "100%",
                      height: "95%",
                    }}
                  />
                </Box>
              ) : (
                <Box sx={{ width: "280px", height: "436px" }}>
                  <img
                    src={images.productImage && images.productImage.src}
                    alt="women"
                    style={{
                      objectFit: "none",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </Box>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
        <Box
          sx={{
            position: "absolute",
            zIndex: 2,
            display: {
              sm: "block",
              xs: "none",
            },
            top: { sm: "45%" },
            left: { md: "3%", sm: "-9%" },
          }}
          // className={classes.prev_arrow}
          onClick={() => handlePrev("slider")}
        >
          <img
            src={assets.icons.Left_Arrow_Icon.src}
            alt="previous"
            width={20}
            height={30}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            zIndex: 2,
            display: {
              sm: "block",
              xs: "none",
            },

            top: { sm: "45%" },
            left: { md: "96%", sm: "103%" },
          }}
          // className={classes.next_arrow}
          onClick={() => handleNext("slider")}
        >
          <img
            src={assets.icons.Right_Arrow_Icon.src}
            alt="right"
            width={20}
            height={30}
          />
        </Box>
      </Box>

      <Box
        sx={{
          position: "relative",
          top: {
            xl: "120px",
            md: "50px",
            sm: "45px",
            // xs: "510px",
          },
        }}
      >
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          ref={sliderRef}
          // navigation={true}
          // modules={[Navigation]}
          className={`mySwiper ${classes.position}`}
        >
          {selectedProduct?.productImages?.map((images, index: number) => (
            <SwiperSlide className={classes.selectedImage} key={images.id}>
              {index === imageValue ? (
                <img
                  src={images.productImage && images.productImage.src}
                  alt="women"
                  style={{
                    borderInlineColor: "black",
                    border: 2,
                    borderColor: "#E5E5EA",
                    borderStyle: "solid",
                    borderRadius: 10,
                    boxShadow: "0px 10px 10px",
                    marginBottom: "10px",
                    objectFit: "contain",
                    cursor: "pointer",
                  }}
                />
              ) : (
                <img
                  src={images.productImage && images.productImage.src}
                  alt="women"
                  style={{
                    objectFit: "contain",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setImage(images.productImage);
                    setImageValue(index);
                  }}
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
        <Box
          sx={{
            position: "absolute",
            zIndex: 2,
            display: {
              md: "block",
              xs: "none",
            },

            top: "38%",
            left: { lg: "2%", md: "1%" },
          }}
          onClick={() => handlePrev("sliderRef")}
        >
          <img
            src={assets.icons.Left_Arrow_Icon.src}
            alt="previous"
            className={styles.icons}
            width={20}
            height={30}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            zIndex: 2,
            display: {
              md: "block",
              xs: "none",
            },

            top: "38%",
            left: { xl: "94%", lg: "96%", md: "97%" },
          }}
          onClick={() => handleNext("sliderRef")}
        >
          <img
            src={assets.icons.Right_Arrow_Icon.src}
            alt="right"
            className={styles.icons}
            width={20}
            height={30}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default ProductImageSlider;
