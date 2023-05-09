import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { MouseEvent } from "react";

import {
  brandFilter,
  categoriesFilter,
  sizeFilter,
} from "../../data/Constants";

// mui imports
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Slider from "@mui/material/Slider";

import { useTheme } from "@mui/material";

import SwipeableTemporaryDrawer from "../FilterProductDrawer/index";

import { filterQueryTypes } from "@/pages/product/product.types";

interface filterProps {
  filterQuery: filterQueryTypes;
  setFilterQuery: React.Dispatch<
    React.SetStateAction<{
      gender: string | string[] | undefined;
      brands: Array<number>;
      categories: Array<number>;
      sizes: Array<number> | null;
      priceRange: { min: string; max: string };
      page: number;
    }>
  >;

  state: {
    bottom: boolean;
  };
  toggleDrawer: (
    anchor: "bottom",
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
  currentPage: number;
}

export default function FilterSlider({
  filterQuery,
  setFilterQuery,
  state,
  toggleDrawer,
  currentPage,
}: filterProps): JSX.Element {
  const theme = useTheme();
  const [min_max, setMin_Max] = useState<Array<number>>([
    +filterQuery.priceRange.min,
    +filterQuery.priceRange.max,
  ]);

  const dispatch = useDispatch<any>();

  const handleBrandFilter = (value: number, isChecked: boolean) => {
    if (isChecked) {
      setFilterQuery((prevValue) => {
        if (prevValue.brands) {
          return {
            ...prevValue,
            brands: [...prevValue.brands, value],
          };
        } else {
          return {
            ...prevValue,
            brands: [value],
          };
        }
      });
    } else {
      setFilterQuery((prevValue) => {
        if (prevValue.brands) {
          return {
            ...prevValue,
            brands: [...prevValue.brands.filter((filter) => filter !== value)],
          };
        } else {
          return {
            ...prevValue,
            brands: [value],
          };
        }
      });
    }
  };
  const handleCategoriesFilter = (value: number, isChecked: boolean) => {
    if (isChecked) {
      setFilterQuery((prevValue) => {
        if (prevValue.categories) {
          return {
            ...prevValue,
            categories: [...prevValue.categories, value],
          };
        } else {
          return {
            ...prevValue,
            categories: [value],
          };
        }
      });
    } else {
      setFilterQuery((prevValue) => {
        if (prevValue.categories) {
          return {
            ...prevValue,
            categories: [
              ...prevValue.categories.filter((filter) => filter !== value),
            ],
          };
        } else {
          return {
            ...prevValue,
            categories: [value],
          };
        }
      });
    }
  };
  const handleSizeFilter = (value: number, isChecked: boolean) => {
    if (isChecked) {
      setFilterQuery((prevValue) => {
        if (prevValue.sizes) {
          return {
            ...prevValue,
            sizes: [...prevValue.sizes, value],
          };
        } else {
          return {
            ...prevValue,
            sizes: [value],
          };
        }
      });
    } else {
      setFilterQuery((prevValue) => {
        if (prevValue.sizes) {
          return {
            ...prevValue,
            sizes: [...prevValue.sizes.filter((filter) => filter !== value)],
          };
        } else {
          return {
            ...prevValue,
            sizes: [value],
          };
        }
      });
    }
  };

  useEffect(() => {
    setMin_Max([+filterQuery.priceRange.min, +filterQuery.priceRange.max]);
  }, [filterQuery, dispatch]);

  const setPriceRange = (value: Array<number>) => {
    setFilterQuery((prev) => ({
      ...prev,
      priceRange: { min: value[0].toString(), max: value[1].toString() },
    }));
  };

  console.log(filterQuery);

  const desktop_filter = () => {
    return (
      <>
        <Box
          sx={{
            width: { lg: "450px", sm: "245px" },
            height: 1600,
            display: {
              sm: "block",
              xs: "none",
            },

            backgroundColor: theme.palette.info.light,
            ml: { xl: 8, lg: 6, md: 4, sm: 2 },
          }}
        >
          <Box sx={{ mx: 4, textAlign: "left", mt: 8 }}>
            <Typography
              sx={{
                fontFamily: "Jost",
                fontWeight: "600",
                fontSize: "16px",
                letterSpacing: "0.02em",
                textTransform: "uppercase",
                color: theme.palette.warning.main,
                mb: 3,
              }}
            >
              PRICES
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography
                id="range-slider"
                sx={{
                  fontFamily: "Jost",
                  fontWeight: "400",
                  fontSize: "20px",
                  letterSpacing: "0.02em",
                  color: theme.palette.warning.light,
                  mb: 3,
                }}
              >
                Range
              </Typography>
              <Typography
                id="range-slider"
                sx={{
                  fontFamily: "Jost",
                  fontWeight: "500",
                  fontSize: "20px",
                  letterSpacing: "0.02em",
                  color: theme.palette.warning.main,
                  mb: 3,
                }}
              >
                ${filterQuery.priceRange.min}-${filterQuery.priceRange.max}
              </Typography>
            </Box>
            <Slider
              sx={{
                color: theme.palette.warning.dark,
                width: { lg: "280px", sm: "180px" },
              }}
              onChange={(_, value) => {
                setPriceRange(value as [number, number]);
              }}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              value={min_max}
              max={1000}
              min={1}
              name="price"
              disableSwap
              getAriaLabel={() => "Minimum distance"}
            />
          </Box>

          <FormGroup sx={{ mx: 4, textAlign: "left" }}>
            <Typography
              textAlign="left"
              sx={{
                fontFamily: "Jost",
                fontWeight: 600,
                fontSize: "16px",
                color: theme.palette.warning.main,
                mt: 10,
                mb: { sm: 3 },
              }}
            >
              Brands
            </Typography>
            {brandFilter.map((brand) => {
              return (
                <FormControlLabel
                  key={brand.id}
                  control={
                    <Checkbox
                      color="primary"
                      style={{ color: "#374151", border: "1.5 px solid " }}
                      checked={
                        filterQuery.brands.includes(brand.id) ? true : false
                      }
                    />
                  }
                  label={brand.value}
                  onClick={(e: MouseEvent<HTMLLabelElement>) => {
                    handleBrandFilter(
                      brand.id,
                      (e.target as unknown as { checked: boolean }).checked
                    );
                  }}
                  htmlFor="my-checkbox"
                />
              );
            })}
            <Typography
              textAlign="left"
              sx={{
                fontFamily: "Jost",
                fontWeight: 600,
                fontSize: "16px",
                color: theme.palette.warning.main,
                mt: 10,
                mb: { sm: 3 },
              }}
            >
              Categories
            </Typography>

            {categoriesFilter.map((category) => (
              <>
                <FormControlLabel
                  key={category.id}
                  control={
                    <Checkbox
                      checked={
                        filterQuery.categories &&
                        filterQuery.categories.includes(category.id)
                          ? true
                          : false
                      }
                      color="primary"
                      style={{ color: "#374151", border: "1.5 px solid " }}
                      onChange={(e) => {
                        handleCategoriesFilter(category.id, e.target.checked);
                      }}
                    />
                  }
                  label={category.value}
                  htmlFor="my-checkbox"
                />
              </>
            ))}
            <Typography
              textAlign="left"
              sx={{
                fontFamily: "Jost",
                fontWeight: 600,
                fontSize: "16px",
                color: theme.palette.warning.main,
                mt: 10,
                mb: { sm: 3 },
              }}
            >
              Size
            </Typography>
            {sizeFilter.map((size) => (
              <FormControlLabel
                key={size.id}
                control={
                  <Checkbox
                    color="primary"
                    style={{ color: "#374151", border: "1.5 px solid " }}
                    checked={
                      filterQuery.sizes && filterQuery.sizes.includes(size.id)
                        ? true
                        : false
                    }
                  />
                }
                label={size.value}
                onClick={(e: MouseEvent<HTMLLabelElement>) => {
                  handleSizeFilter(
                    size.id,
                    (e.target as unknown as { checked: boolean }).checked
                  );
                }}
                htmlFor="my-checkbox"
              />
            ))}
          </FormGroup>
        </Box>
      </>
    );
  };

  let desktop = desktop_filter();

  return (
    <>
      {desktop}
      <SwipeableTemporaryDrawer
        state={state}
        toggleDrawer={toggleDrawer}
        min_max={min_max}
        setPriceRange={setPriceRange}
        filterQuery={filterQuery}
        handleSizeFilter={handleSizeFilter}
        handleBrandFilter={handleBrandFilter}
        handleCategoriesFilter={handleCategoriesFilter}
      />
    </>
  );
}
