import React from "react";
import { useSelector } from "react-redux";

// import { Link, useNavigate } from 'react-router-dom';
import Link from "next/link";

import { brandFilter, categoriesFilter } from "../../data/Constants";
import { assets } from "../../assets";

// mui imports
import Box from "@mui/material/Box";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { RootState } from "../../store/store";
import { Backdrop, useTheme } from "@mui/material";

const style = {
  ml: "50%",
  mt: "53px",
  height: { xl: "550px", md: "350px", xs: "550px" },
  width: { md: "100%", xs: "90%" },
  bgcolor: {
    sm: "#FFFFFF",
    xs: "#F9FAFB",
  },
  border: 0,
  borderRadius: "0px 0px 25px 25px",
  p: 4,
  maxWidth: "1600px",
  mx: "auto",
  overflowX: "auto",
};

interface menuProps {
  openModel: boolean;
  setOpenModel: (value: boolean) => void;
  setBackground: (value: string) => void;
  setValue: (value: number) => void;
}

const NavbarModel: React.FC<menuProps> = ({
  openModel,
  setOpenModel,
  setBackground,
  setValue,
}) => {
  const theme = useTheme();
  const { routeValue } = useSelector((state: RootState) => state.user);

  return (
    <>
      <Box
        sx={style}
        onMouseEnter={() => {
          setBackground("#FFFFFF");
          setOpenModel(true);
        }}
        onMouseLeave={() => {
          setOpenModel(false);
          setBackground("transparent");
        }}
      >
        <Box>
          <Box
            sx={{
              maxWidth: "90%",
              display: "flex",
              mx: "auto",
              justifyContent: {
                sm: "space-between",
                xs: "center",
              },
              overflowX: "auto",
              gap: "60px",
            }}
          >
            <Box
              sx={{
                display: {
                  md: "flex",
                  xs: "block",
                },
                gap: "60px",
              }}
            >
              <Box>
                <List>
                  <ListItem
                    sx={{
                      fontFamily: "Inter",
                      fontSize: "24px",
                      fontWeight: 400,
                      color: theme.palette.primary.light,
                      display: "block",
                    }}
                  >
                    Products
                  </ListItem>
                  <Box sx={{ mt: 4 }}>
                    {categoriesFilter.map((category) => (
                      <Link
                        href={`/product?gender=${routeValue}&categories=${category.id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <ListItem
                          key={category.id}
                          sx={{
                            fontFamily: "Inter",
                            fontSize: "16px",
                            fontWeight: 400,
                            cursor: "pointer",
                            "&:hover": {
                              textDecoration: "underline",
                            },
                            color: theme.palette.secondary.dark,
                            display: "block",
                          }}
                          onClick={() => {
                            setOpenModel(false);
                            setBackground("transparent");
                          }}
                        >
                          {category.value}
                        </ListItem>
                      </Link>
                    ))}
                  </Box>
                </List>
              </Box>
              <Box>
                <List>
                  <ListItem
                    sx={{
                      fontFamily: "Inter",
                      fontSize: "24px",
                      fontWeight: 400,
                      color: theme.palette.primary.light,
                      display: "block",
                    }}
                  >
                    Designers
                  </ListItem>
                  <Box sx={{ mt: 4 }}>
                    {brandFilter.map((brand) => (
                      <Link
                        href={`/product?gender=${routeValue}&brands=${brand.id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <ListItem
                          key={brand.id}
                          sx={{
                            fontFamily: "Inter",
                            fontSize: "16px",
                            fontWeight: 400,
                            cursor: "pointer",
                            "&:hover": {
                              textDecoration: "underline",
                            },
                            color: theme.palette.secondary.dark,
                            display: "block",
                          }}
                          onClick={() => setOpenModel(false)}
                        >
                          {brand.value}
                        </ListItem>
                      </Link>
                    ))}
                  </Box>
                </List>
              </Box>
              <Box>
                <List>
                  <ListItem
                    sx={{
                      fontFamily: "Inter",
                      fontSize: "24px",
                      fontWeight: 400,
                      color: theme.palette.primary.light,
                      display: "block",
                    }}
                  >
                    Archived collections
                  </ListItem>
                  <Box sx={{ mt: 4 }}>
                    {categoriesFilter.map((category, index) => (
                      <ListItem
                        key={index}
                        sx={{
                          fontFamily: "Inter",
                          fontSize: "16px",
                          fontWeight: 400,
                          cursor: "pointer",
                          "&:hover": {
                            textDecoration: "underline",
                          },
                          color: theme.palette.secondary.dark,
                          display: "block",
                        }}
                      >
                        {category.value}
                      </ListItem>
                    ))}
                  </Box>
                </List>
              </Box>
            </Box>
            <Box
              sx={{
                width: { md: "450px", sm: "350px" },
                height: "340px",
                display: {
                  sm: "block",
                  xs: "none",
                },
              }}
            >
              <img src={assets.images.photo.src} alt="abdul" width="100%" />
            </Box>
          </Box>
        </Box>
      </Box>
      {/* <Backdrop
        sx={{
          backgroundColor: "transparent",
          height: { xl: "550px", md: "350px", xs: "550px" },
          width: { md: "100%", xs: "90%" },
          // width: "100%",
          mt: "53px",
          mx: "auto",
          overflowX: "auto",
        }}
        open={openMobileModel || openModel}
        onClick={() => {
          setOpenMobileModel(false);
          setOpenModel(false);
        }}
        onMouseEnter={() => {
          openModel && setBackground("#FFFFFF");
        }}
      ></Backdrop> */}
    </>
  );
};

export default NavbarModel;
