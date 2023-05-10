import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { assets } from "@/assets";
import { Box, Button, Tab, Tabs, Typography, useTheme } from "@mui/material";
import React from "react";
import { RootState } from "@/store/store";

import { addColor, addSize } from "@/store/product/product.slice";
import { addToCart } from "@/store/cart/cart.thunk";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface productDetailProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  save?: string;
}

function ProductDetail({ setOpen, save }: productDetailProps): JSX.Element {
  const theme = useTheme();
  const { selectedProduct } = useSelector((state: RootState) => state.product);

  const dispatch = useDispatch<any>();
  const router = useRouter();

  const [value, setValue] = useState(0);
  const [sizeValue, setSizeValue] = useState(0);
  const [colorValue, setColorValue] = useState(0);
  const [tabs, setTabs] = useState<Array<string>>([
    "Info",
    "Brand",
    "Delivery",
  ]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const handleSizeChange = (event: React.SyntheticEvent, newValue: number) => {
    setSizeValue(newValue);
  };
  const handleColorChange = (event: React.SyntheticEvent, newValue: number) => {
    setColorValue(newValue);
  };

  // for tab
  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}> {children} </Box>}
      </div>
    );
  }

  const printStars = (reviewStars: number | undefined) => {
    let result = [];
    if (reviewStars) {
      for (let i = 0; i < reviewStars; i++) {
        result.push(
          <Box sx={{ pl: 1 }}>
            <img src={assets.icons.Star_Active.src} alt="filled star" />
          </Box>
        );
      }
      return <Box sx={{ display: "flex" }}>{result}</Box>;
    }
  };
  const printRemainingStars = (stars: number) => {
    let result = [];

    for (let i = 1; i <= stars; i++) {
      result.push(
        <Box sx={{}}>
          <img src={assets.icons.Star_Disabled.src} alt="filled star" />
        </Box>
      );
    }
    return <Box sx={{ display: "flex" }}>{result}</Box>;
  };

  return (
    <Box
      sx={{
        maxWidth: {
          sm: "50%",
          xs: "100%",
        },
        mx: "auto",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          sx={{
            width: "142px",
            height: "48px",
            background: theme.palette.success.contrastText,
            borderRadius: 3,
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            ml: { sm: 1, xs: 2 },
            mt: { lg: 1, md: 2, sm: 1, xs: 2 },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Inter",
              fontWeight: 700,
              fontSize: "14px",
              my: "auto",
              color: theme.palette.primary.light,
            }}
          >
            Popular
          </Typography>
        </Box>
        <img
          className="heart"
          src={assets.icons.ADD_TO_FAVOURITE.src}
          alt="heart"
          width={50}
          height={64}
        />
      </Box>

      <Box
        sx={{
          textAlign: "left",
          wordBreak: "break-all",
          pl: { md: 0, xs: 2 },
        }}
      >
        <Typography
          sx={{
            mt: 3,
            fontFamily: "Inter",
            fontWeight: 400,
            fontSize: {
              md: "48px",
              sm: "35px",
              xs: "28px",
            },
            color: theme.palette.primary.light,
          }}
        >
          {selectedProduct?.productName}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", pt: 2, gap: 1 }}>
        {printStars(selectedProduct?.reviewRate)}
        {selectedProduct?.reviewRate &&
          printRemainingStars(5 - selectedProduct?.reviewRate)}

        <Typography
          sx={{
            fontFamily: "Inter",
            fontWeight: 400,
            fontSize: "14px",
            color: theme.palette.primary.light,
          }}
        >
          132 Reviews
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          mt: 6,
          pr: { xs: 2 },
          pl: { md: 0, xs: 2 },
        }}
      >
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            variant="fullWidth"
            sx={{
              ".MuiTab-root": {
                color: theme.palette.primary.light,
              },
              ".MuiTab-root.Mui-selected": {
                color: theme.palette.primary.contrastText,
                pb: 2.5,
                fontFamily: "Inter",
                fontSize: "16px",
                fontWeight: 700,
              },
            }}
            TabIndicatorProps={{
              style: { background: "#111827" },
            }}
          >
            {tabs.map((tab: string, index: number) => (
              <Tab
                key={index}
                label={tab}
                sx={{ fontSize: "16px", color: "#1B2437" }}
              />
            ))}
          </Tabs>
        </Box>
        {tabs.map((_, index: number) => (
          <TabPanel value={value} index={index} key={index}>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: {
                  md: "16px",
                  sm: "14px",
                },
                textAlign: "left",
                wordBreak: "break-all",
                color: theme.palette.secondary.dark,
              }}
            >
              Dress with tulle and collar Peter Pan from REDValentino (
              {selectedProduct?.productName}). Peter Pan collar, tulle panels,
              sleeveless model, concealed back zipper and pleated skirt. Black
              colour.
            </Typography>
          </TabPanel>
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: { sm: "unset", xs: "space-between" },
          pl: { xl: 0, lg: 0, md: 2, sm: 2, xs: 2 },
        }}
      >
        <Box>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontSize: "16px",
              fontWeight: 400,
              textAlign: "left",
              mt: 4,
              mb: 4,
              p: 1,
              color: theme.palette.primary.light,
            }}
          >
            Sizes
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              p: 1,
              gap: 2,
            }}
          >
            {selectedProduct?.sizes?.map((size, index: number) =>
              sizeValue === index ? (
                <Box
                  key={size.id}
                  sx={{
                    width: "81px",
                    height: "45px",
                    fontFamily: "Inter",
                    fontSize: "16px",
                    fontWeight: 700,
                    color: theme.palette.success.main,
                    background: theme.palette.primary.light,
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 2,
                  }}
                  onClick={(event) => {
                    dispatch(
                      addSize({
                        selectedSize: size.id,
                      })
                    );
                    handleSizeChange(event, index);
                  }}
                >
                  <Typography>{size.slug}</Typography>
                </Box>
              ) : (
                <Box
                  key={size.id}
                  sx={{
                    width: "81px",
                    height: "45px",
                    border: 1,
                    borderColor: theme.palette.info.dark,
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onClick={(event) => {
                    dispatch(
                      addSize({
                        selectedSize: size.id,
                      })
                    );
                    handleSizeChange(event, index);
                  }}
                >
                  <Typography>{size.slug}</Typography>
                </Box>
              )
            )}
          </Box>
        </Box>

        <Box sx={{ ml: { xl: 14, lg: 11, md: 3 } }}>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontSize: "16px",
              fontWeight: 400,
              color: theme.palette.primary.light,
              textAlign: "left",
              mt: 4,
              mb: 4,
              p: 1,
            }}
          >
            Colors
          </Typography>
          <Box className="colorBox">
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                p: 1,
                gap: 2,
              }}
            >
              {selectedProduct?.colors?.map((col, index: number) =>
                colorValue === index ? (
                  <Box
                    key={index}
                    sx={{
                      width: "50px",
                      height: "50px",
                      background: `${col.hax_value}`,
                      cursor: "pointer",
                      borderRadius: 2,
                    }}
                    onClick={(event) => {
                      dispatch(
                        addColor({
                          selectedColor: col.id,
                        })
                      );
                      handleColorChange(event, index);
                    }}
                  />
                ) : (
                  <Box
                    key={index}
                    sx={{
                      width: "35px",
                      height: "35px",
                      border: 1,
                      background: `${col.hax_value}`,
                      borderColor: `${col.hax_value}`,
                      cursor: "pointer",
                      borderRadius: 2,
                    }}
                    onClick={(event) => {
                      dispatch(
                        addColor({
                          selectedColor: col.id,
                        })
                      );
                      handleColorChange(event, index);
                    }}
                  />
                )
              )}
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          textAlign: "left",
          pl: { sm: 2, xs: 2 },
        }}
      >
        <Typography
          sx={{
            display: "inline-block",
            fontFamily: "Inter",
            fontSize: "24px",
            fontWeight: 400,
            color: theme.palette.primary.light,
            mt: 4,
            mb: 4,
          }}
        >
          $
        </Typography>
        <Typography
          sx={{
            display: "inline-block",
            fontFamily: "Inter",
            fontSize: "34px",
            fontWeight: 400,
            color: theme.palette.primary.light,
            mt: 4,
            mb: 4,
            ml: 1,
          }}
        >
          {selectedProduct?.productCurrentPrice}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: { sm: 7, xs: 3 },
          justifyContent: { sm: "left", xs: "center" },
          mt: { sm: 8, xs: 4 },
          mb: 2,
        }}
      >
        <Button
          variant="outlined"
          sx={{
            background: theme.palette.primary.light,
            maxWidth: "167px",
            height: "54px",
            fontSize: "18px",
            fontFamily: "Inter",
            fontWeight: 700,
            color: theme.palette.success.main,
            ml: { sm: 1 },
            borderRadius: 0,
            textTransform: "capitalize",
            "&:hover": {
              background: theme.palette.primary.light,
            },
          }}
          onClick={() => {
            if (!save) {
              setOpen(true);
            } else {
              selectedProduct && dispatch(addToCart(selectedProduct));
              router.push("/shipping");
            }
          }}
        >
          Shop Now
        </Button>
        <Button
          variant="outlined"
          sx={{
            border: 1,
            borderColor: theme.palette.primary.contrastText,
            maxWidth: "167px",
            height: "54px",
            fontSize: "18px",
            fontFamily: "Inter",
            fontWeight: 700,
            color: theme.palette.primary.contrastText,
            mr: { sm: 1 },
            textTransform: "capitalize",
            borderRadius: 0,
          }}
          onClick={() => {
            if (!save) {
              setOpen(true);
            } else {
              selectedProduct && dispatch(addToCart(selectedProduct));
            }
          }}
        >
          Add to cart
        </Button>
      </Box>
      {/* add new element above */}
    </Box>
  );
}

export default ProductDetail;
