import React from "react";
import Image from "next/image";
// mui imports
import { Box, Typography, useTheme } from "@mui/material";

import styles from "./reviewer.module.css";
import { assets } from "../../assets";

const ReviewCard: React.FC = () => {
  const theme = useTheme();
  let arr: {
    id: string;
    image: string | undefined;
    image_1: string | undefined;
    name: string;
    profession: string;
    title: string;
    height: string;
  }[];
  arr = [
    {
      id: "1",
      image: assets.images.leatherShoe.src,
      image_1: assets.images.women_1.src,
      name: "Kelly Hudson",
      profession: "Fashion Activist",
      title: "How important are shoes in your style?",
      height: "414px",
    },
    {
      id: "2",
      image: assets.images.makeUp.src,
      image_1: assets.images.women_2.src,
      name: "Judy Garland",
      profession: "Fashion Activist",
      title: "Fashion trend forecast for  Summer 2021",
      height: "414px",
    },
    {
      id: "3",
      image: assets.images.clothMaking.src,
      image_1: assets.images.women_3.src,
      name: "Rachel Green",
      profession: "Fashion Activist",
      title: "Spring exclusive collection for Men & Women",
      height: "414px",
    },
  ];
  return (
    <>
      <Box
        sx={{
          display: {
            sm: "flex",
            xs: "block",
          },
          justifyContent: "center",
          mx: "auto",
          mt: { sm: 8, xs: 1 },
        }}
      >
        {arr.map((arr) => (
          <Box key={arr.id}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
              }}
            >
              <img
                src={arr.image as string}
                alt="assets.images"
                style={{
                  width: "100%",
                  height: arr.height,
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: "370px",
                  background: "#FCFCFC",
                  width: { lg: 304 },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                  }}
                >
                  <img
                    className={styles.reviwer_image}
                    src={arr.image_1 as string}
                    alt="women_1"
                  />
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: { md: 3, sm: 1, xs: 2 },
                      justifyContent: "space-between",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                      }}
                    >
                      <Image
                        src={assets.icons.Eye}
                        alt="eye"
                        width={24}
                        height={22}
                      />
                      <Typography>35</Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                      }}
                    >
                      <Image
                        src={assets.icons.Heart}
                        alt="heart"
                        width={24}
                        height={22}
                      />
                      <Typography>35</Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                      }}
                    >
                      <Image
                        src={assets.icons.Share}
                        alt="share"
                        width={24}
                        height={22}
                      />
                      <Typography>35</Typography>
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    textAlign: "left",
                    mt: { md: "25px", sm: "10px" },
                  }}
                >
                  <Typography
                    sx={{
                      display: "inline-block",
                      fontFamily: "Jost",
                      fontSize: {
                        md: "16px",
                        sm: "12px",
                      },
                      fontWeight: 700,
                      color: theme.palette.primary.main,
                    }}
                  >
                    {arr.name}
                  </Typography>
                  <Typography
                    sx={{
                      display: "inline-block",
                      ml: "21px",
                      fontSize: {
                        md: "16px",
                        sm: "12px",
                      },
                      color: theme.palette.primary.main,
                    }}
                  >
                    {arr.profession}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                mt: { md: 15, xs: 12 },
                mx: { lg: 8, xs: 1 },
              }}
            >
              <Typography
                variant="h4"
                textAlign="left"
                sx={{
                  fontFamily: "Jost",
                  fontWeight: 700,
                  fontSize: { xl: 26, lg: 23, md: 21, sm: 16, xs: 20 },
                  wordBreak: "inherit",
                  msWordBreak: "break-all",
                  color: theme.palette.primary.dark,
                }}
              >
                {arr.title}
              </Typography>
              <Typography
                sx={{
                  wordBreak: "break-word",
                  fontSize: "16px",
                  fontFamily: "Lato",
                  textAlign: "left",
                  lineHeight: "22.4px",
                  mt: { sm: 4 },
                  color: theme.palette.primary.main,
                }}
              >
                Is it possible to assess a person just on the basis of their
                footwear? Obviously, nobody should criticize, but certainly,
                shoes say a lot about someone. It matters for the outsiders that
                we meet every day...
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                textAlign: "left",
                ml: { lg: 8, md: 1, xs: 1 },
                my: { sm: 8, xs: 2 },
              }}
            >
              <Typography
                sx={{
                  color: theme.palette.primary.main,
                }}
              >
                Read More
              </Typography>
              <Image
                src={assets.icons.blackArrowicon}
                alt="arrowicon"
                width={18}
                height={18}
                style={{ marginLeft: "16px", marginTop: "3px" }}
              />
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default ReviewCard;
