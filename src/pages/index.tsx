import Head from "next/head";
import Image from "next/image";
import Slider from "../components/DealsSlider/index";
import Layout from "../layout/index";
import CategoryTab from "../components/Tab/index";
import Arrival from "../sections/Arrival/index";
import { person_tabs, product_tabs } from "../data/Constants";
import { useSelector } from "react-redux";
import ReviewCard from "../sections/ReviewCard/index";
import ImageSlider from "../components/ImageSlider";
import CategorySlider from "../components/CategoryTab";
import ImageListComponent from "../sections/ImageListComponent";
import { RootState } from "../store/store";
import { assets } from "../assets";
import { getAllProduct } from "@/store/product/product.thunk";
import { useDispatch } from "react-redux";
import { resetPage } from "@/store/cart/cart.slice";

// mui imports
import { useTheme } from "@mui/material";
import { Box, Button, Typography } from "@mui/material";
import Advertise from "../sections/Advertise/index";
import ImageGrid from "../sections/ImageGrid/index";
import CategoryGrid from "../sections/Categorygrid/index";
import { useEffect } from "react";
import { getUserCart } from "@/store/cart/cart.thunk";

export default function Home() {
  const { ProductsList, Products } = useSelector(
    (state: RootState) => state.product
  );
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(getAllProduct());
    dispatch(getUserCart());
    dispatch(resetPage());
  }, []);

  const theme = useTheme();

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: {
              xl: "745px",
              lg: "600px",
              md: "475px",
              sm: "395px",
              xs: "230px",
            },
            zIndex: 2,
          }}
        >
          <Image
            src={assets.images.background}
            alt="Background img"
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              opacity: 0.85,
            }}
          />

          <Box
            sx={{
              position: "absolute",
              height: "100%",
              width: "100%",
              zIndex: 3,
              opacity: 0.85,
              background: "#FFFFFF",
            }}
          />

          <Box sx={{ position: "absolute", zIndex: 4, width: "100%" }}>
            <Layout>
              <Box
                maxWidth="1600px"
                sx={{
                  mx: "auto",
                }}
              >
                <Box
                  sx={{
                    mt: { md: 7, sm: 1 },
                    zIndex: -1,
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Jost",
                      fontSize: {
                        xl: "39px",
                        lg: "35px",
                        md: "32px",
                        sm: "30px",
                      },
                      fontWeight: 400,
                      color: theme.palette.primary.main,
                      textAlign: "center",
                    }}
                  >
                    With an outstanding style, only for you
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "Jost",
                      fontSize: {
                        xl: "95px",
                        lg: "80px",
                        md: "65px",
                        sm: "50px",
                        xs: "22px",
                      },
                      fontWeight: 700,
                      color: theme.palette.primary.dark,
                      textAlign: "center",
                    }}
                  >
                    {" "}
                    Exclusively designed for you
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    maxWidth: "90%",
                    mx: "auto",
                    mt: { xl: 7, xs: 4 },
                  }}
                >
                  <Box
                    sx={{
                      backgroundImage: `url(${assets.images.ForHer.src})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      width: "100%",
                      height: {
                        xl: "700px",
                        lg: "650px",
                        md: "460px",
                        sm: "345px",
                        xs: "160px",
                      },
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Button
                      variant="outlined"
                      sx={{
                        background: theme.palette.success.main,
                        width: {
                          md: "256px",
                          sm: "185px",
                          xs: "64px",
                        },

                        border: 0,
                        fontFamily: "Josefin Sans",
                        fontSize: { md: 20, sm: 15, xs: 8 },
                        color: theme.palette.primary.dark,
                        fontWeight: 700,
                        textTransform: "capitalize",

                        "&:hover": {
                          background: theme.palette.success.main,
                        },
                      }}
                    >
                      For Her
                    </Button>
                  </Box>
                  <Box
                    sx={{
                      backgroundImage: `url(${assets.images.ForHim.src})`,
                      backgroundSize: "cover",
                      width: "100%",
                      height: {
                        xl: "700px",
                        lg: "650px",
                        md: "460px",
                        sm: "345px",
                        xs: "160px",
                      },
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Button
                      variant="outlined"
                      sx={{
                        background: theme.palette.success.main,
                        width: {
                          md: "256px",
                          sm: "185px",
                          xs: "64px",
                        },
                        border: 0,
                        fontFamily: "Josefin Sans",
                        fontSize: { md: 20, sm: 15, xs: 8 },
                        color: theme.palette.primary.dark,
                        fontWeight: 700,
                        textTransform: "capitalize",
                        "&:hover": {
                          background: theme.palette.success.main,
                        },
                      }}
                    >
                      For Him
                    </Button>
                  </Box>
                </Box>

                <Box
                  sx={{
                    mt: 12,
                  }}
                >
                  <Slider
                    title="Deals"
                    bestDeals={ProductsList}
                    showButton={true}
                  />
                </Box>

                <Advertise
                  title="Exclusive collection 2021"
                  subtitle="Be exclusive"
                  message="The best everyday option in a Super Saver range within a reasonable price. It is our responsibility to keep you
                100 percent stylish. Be smart & trendy with us."
                  buttontitle="Explore"
                  image={assets.images.womenStanding.src}
                  // background={theme.palette.success.light}
                  background="#EEEEEE"
                />
                <Box>
                  <CategoryGrid />
                </Box>
                <Box>
                  <Arrival />
                </Box>
                <Box sx={{ mt: { sm: 12, xs: 4 }, mb: 9 }}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontFamily: "Jost",
                      fontSize: "39px",
                      fontWeight: 700,
                      textAlign: "center",
                      color: theme.palette.primary.dark,
                    }}
                  >
                    Shop By Category
                  </Typography>

                  <Box sx={{ mt: { sm: 7, xs: 4 }, mb: { sm: 7, xs: 4 } }}>
                    <CategoryTab
                      tabs={person_tabs}
                      textColor={theme.palette.error.main}
                      selectedTextColor={theme.palette.primary.dark}
                      backgroundColor={theme.palette.success.main}
                      borderBottom="1px solid black"
                      border="0"
                    />
                  </Box>
                  <Box>
                    <CategoryTab
                      tabs={product_tabs}
                      textColor={theme.palette.info.dark}
                      selectedTextColor={theme.palette.info.dark}
                      backgroundColor={theme.palette.success.dark}
                      borderBottom="none"
                      border="1px solid #F5F5F5"
                    />
                  </Box>
                  <Box>
                    <CategorySlider bestDeals={Products} />
                  </Box>
                </Box>
                <Box>
                  <ImageGrid />
                </Box>
                <Box sx={{ mt: 12 }}>
                  <Slider
                    title="Seller"
                    bestDeals={ProductsList}
                    showButton={false}
                  />
                </Box>
                <Box
                  sx={{
                    maxWidth: "90%",
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                    mx: "auto",
                    mt: { lg: 12, xs: 5 },
                  }}
                >
                  <ImageListComponent />
                </Box>

                <Advertise
                  subtitle="Gentle Formal Looks "
                  message="We provide the top formal apparel package to make your job look confident
                and comfortable. Stay connect."
                  buttontitle="Explore Collection"
                  image={assets.images.formal.src}
                  // background={theme.palette.success.main}
                  background="#FFFFFF"
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    maxWidth: "90%",
                    mx: "auto",
                  }}
                >
                  <ReviewCard />
                </Box>
                <Box>
                  <ImageSlider />
                </Box>
                {/* enter code above */}
              </Box>
            </Layout>
          </Box>
        </Box>
      </Box>
    </>
  );
}
