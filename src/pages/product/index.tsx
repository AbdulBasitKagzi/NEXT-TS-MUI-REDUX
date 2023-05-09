import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { gender } from "@/data/Constants";

import Layout from "../../layout";

import FilterSlider from "../../components/Filter";
import FilterGrid from "../../components/FilterGrid";

// mui imports
import { Box } from "@mui/system";
import { Typography, useTheme } from "@mui/material";
import { getFilteredProducts } from "@/store/product/product.thunk";
import { RootState } from "@/store/store";
import { data, filterQueryTypes } from "./product.types";

export const CategoryDetail: React.FC = () => {
  const theme = useTheme();

  const router = useRouter();

  const [foundGender, setFoundGender] = useState<data>();
  const [foundBrand, setFoundBrand] = useState<data>();
  const [foundCategory, setFoundCategory] = useState<data>();
  const [filterQuery, setFilterQuery] = useState<filterQueryTypes>({
    gender: router.query.gender,
    brands: [],
    categories: [],
    sizes: [],
    priceRange: { min: "0", max: "1000" },
    page: 1,
  });
  let g;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const dispatch = useDispatch<any>();

  useEffect(() => {
    if (router.isReady) {
      setFilterQuery((prev) => ({
        ...prev,
        gender: router.query.gender,
        brands: router.query.brands ? [+router.query.brands] : [],
        categories: router.query.categories ? [+router.query.categories] : [],
        sizes: [],
        priceRange: { min: "0", max: "1000" },
        page: 1,
      }));
    }
  }, [router.isReady, router.query]);

  useEffect(() => {
    if (router.isReady) {
      dispatch(getFilteredProducts(filterQuery));
    }
  }, [router.isReady, filterQuery]);

  useEffect(() => {
    if (router.isReady) {
      g = gender.filter((gender) => {
        if (router.query.gender) return gender.id === +router.query.gender;
      });
    }
  }, [router.isReady, router.query]);

  console.log("g", g);

  const [state, setState] = useState({
    bottom: false,
  });

  type Anchor = "bottom";

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setState({ ...state, [anchor]: open });
    };

  return (
    <>
      <Layout>
        <Box
          sx={{
            maxWidth: "1600px",
            mx: "auto",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontFamily: "Jost",
                fontWeight: 700,
                fontSize: "25px",
                textAlign: "left",
                ml: "4%",
                display: {
                  sm: "block",
                  xs: "none",
                },
                mt: { sm: "2rem", md: "9.5rem" },
                color: theme.palette.primary.dark,
              }}
            >
              Filter
            </Typography>
            <Box sx={{ display: { sm: "flex", xs: "block" } }}>
              <FilterSlider
                filterQuery={filterQuery}
                setFilterQuery={setFilterQuery}
                toggleDrawer={toggleDrawer}
                state={state}
                currentPage={currentPage}
              />
              <FilterGrid
                foundGender={foundGender as data}
                foundBrand={foundBrand as data}
                foundCategory={foundCategory as data}
                toggleDrawer={toggleDrawer}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                setFilterQuery={setFilterQuery}
              />
            </Box>
          </Box>
        </Box>
      </Layout>
    </>
  );
};

export default CategoryDetail;
