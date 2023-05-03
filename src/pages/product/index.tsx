import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

import Layout from "../../layout";
// import { useParams, useLocation } from 'react-router-dom';
import FilterSlider from "../../components/Filter";
import FilterGrid from "../../components/FilterGrid";
import { gender, brandFilter, categoriesFilter } from "../../data/Constants";

// mui imports
import { Box } from "@mui/system";
import { Typography, useTheme } from "@mui/material";

interface data {
  id: number;
  value: string;
  slug: string;
}
export const CategoryDetail: React.FC = () => {
  const theme = useTheme();

  const [foundGender, setFoundGender] = useState<data>();
  const [foundBrand, setFoundBrand] = useState<data>();
  const [foundCategory, setFoundCategory] = useState<data>();
  const [filterQuery, setFilterQuery] = useState<{
    gender: number;
    brands: Array<number>;
    categories: Array<number> | null;
    sizes: Array<number> | null;
    priceRange: { min: number; max: number };
  }>({
    gender: 0,
    brands: [],
    categories: [],
    sizes: [],
    priceRange: { min: 200, max: 500 },
  });

  const router = useRouter();

  useEffect(() => {
    setFilterQuery((prev) => ({
      ...prev,
      brands: [],
      categories: [],
    }));

    setFoundGender(
      gender.find((gender) => gender.slug === router.query.gender)
    );
    setFoundBrand(
      brandFilter.find((brand) => brand.slug === router.query.brand)
    );
    setFoundCategory(
      categoriesFilter?.find(
        (category) => category?.slug === router.query.categories
      )
    );
  }, [router.query]);

  useEffect(() => {
    if (foundGender?.id) {
      setFilterQuery((prev) => ({
        ...prev,
        gender: foundGender?.id,
      }));
    }
  }, [foundGender, foundBrand, foundCategory]);

  useEffect(() => {
    if (foundBrand?.id) {
      setFilterQuery((prev) => ({
        ...prev,
        brands: [foundBrand.id],
      }));
    }
  }, [foundGender, foundBrand, foundCategory]);

  useEffect(() => {
    if (foundCategory?.id) {
      setFilterQuery((prev) => ({
        ...prev,
        categories: [foundCategory.id],
      }));
    }
  }, [foundCategory]);

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
              />
              <FilterGrid
                foundGender={foundGender as data}
                foundBrand={foundBrand as data}
                foundCategory={foundCategory as data}
                toggleDrawer={toggleDrawer}
              />
            </Box>
          </Box>
        </Box>
      </Layout>
    </>
  );
};

export default CategoryDetail;
