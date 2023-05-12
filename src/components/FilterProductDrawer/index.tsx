import {
  brandFilter,
  categoriesFilter,
  sizeFilter,
} from "../../data/Constants";
import { MouseEvent } from "react";
import { filterQueryTypes } from "@/pages/product/product.types";

// mui imports
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Checkbox, FormControlLabel, FormGroup, Slider } from "@mui/material";
import theme from "../../theme";

type Anchor = "bottom";

interface drawerProps {
  state: {
    bottom: boolean;
  };
  toggleDrawer: (
    anchor: "bottom",
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
  min_max: number[];
  setPriceRange: (value: Array<number>) => void;
  filterQuery: filterQueryTypes;
  handleSizeFilter: (value: number, isChecked: boolean) => void;
  handleCategoriesFilter: (
    value: number,
    isChecked: boolean,
    category: string
  ) => void;
  handleBrandFilter: (value: number, isChecked: boolean, brand: string) => void;
}

export default function SwipeableTemporaryDrawer({
  state,
  toggleDrawer,
  min_max,
  setPriceRange,
  filterQuery,
  handleSizeFilter,
  handleCategoriesFilter,
  handleBrandFilter,
}: drawerProps): JSX.Element {
  const list = (anchor: Anchor) => (
    <Box sx={{ width: anchor === "bottom" ? "auto" : 250 }} role="presentation">
      <List>
        <Box sx={{ mx: 4, textAlign: "left" }}>
          <Typography
            sx={{
              fontFamily: "Jost",
              fontWeight: "600",
              fontSize: "16px",
              letterSpacing: "0.02em",
              textTransform: "uppercase",
              color: theme.palette.warning.main,
              mb: 3,
              pt: 1,
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
              gutterBottom
              sx={{
                fontFamily: "Jost",
                fontWeight: "400",
                fontSize: "20px",
                letterSpacing: "0.02em",
                color: theme.palette.warning.light,
              }}
            >
              Range
            </Typography>
            <Typography
              id="range-slider"
              gutterBottom
              sx={{
                fontFamily: "Jost",
                fontWeight: "500",
                fontSize: { sm: "20px", xs: "16px" },
                letterSpacing: "0.02em",
                color: theme.palette.warning.main,
              }}
            >
              ${filterQuery.priceRange.min}-${filterQuery.priceRange.max}
            </Typography>
          </Box>

          <Slider
            sx={{
              color: theme.palette.warning.dark,
              width: "100%",
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
        <FormGroup sx={{ mx: 4, textAlign: "left", mt: 4 }}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                textAlign="left"
                sx={{
                  fontFamily: "Jost",
                  fontWeight: 600,
                  fontSize: "16px",
                  color: theme.palette.warning.main,
                  mt: 1,
                  mb: 1,
                }}
              >
                Brands
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {brandFilter.map((brand) => (
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
                  sx={{ color: theme.palette.warning.main }}
                  onClick={(e: MouseEvent<HTMLLabelElement>) => {
                    handleBrandFilter(
                      brand.id,
                      (e.target as unknown as { checked: boolean }).checked,
                      brand.slug
                    );
                  }}
                />
              ))}
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                textAlign="left"
                sx={{
                  fontFamily: "Jost",
                  fontWeight: 600,
                  fontSize: "16px",
                  color: theme.palette.warning.main,
                  mt: 1,
                  mb: 1,
                }}
              >
                Categories
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {categoriesFilter.map((category) => (
                <FormControlLabel
                  key={category.id}
                  checked={
                    filterQuery.categories &&
                    filterQuery.categories.includes(category.id)
                      ? true
                      : false
                  }
                  control={
                    <Checkbox
                      color="primary"
                      style={{ color: "#374151", border: "1.5 px solid " }}
                    />
                  }
                  label={category.value}
                  sx={{ color: theme.palette.warning.main }}
                  onClick={(e: MouseEvent<HTMLLabelElement>) => {
                    handleCategoriesFilter(
                      category.id,
                      (e.target as unknown as { checked: boolean }).checked,
                      category.slug
                    );
                  }}
                />
              ))}
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                textAlign="left"
                sx={{
                  fontFamily: "Jost",
                  fontWeight: 600,
                  fontSize: "16px",
                  color: theme.palette.warning.main,
                  mt: 1,
                  mb: 1,
                }}
              >
                Size
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {sizeFilter.map((size) => (
                <FormControlLabel
                  key={size.id}
                  checked={
                    filterQuery.sizes && filterQuery.sizes.includes(size.id)
                      ? true
                      : false
                  }
                  control={
                    <Checkbox
                      color="primary"
                      style={{ color: "#374151", border: "1.5 px solid " }}
                    />
                  }
                  label={size.value}
                  sx={{ color: theme.palette.warning.main }}
                  onClick={(e: MouseEvent<HTMLLabelElement>) => {
                    handleSizeFilter(
                      size.id,
                      (e.target as unknown as { checked: boolean }).checked
                    );
                  }}
                />
              ))}
            </AccordionDetails>
          </Accordion>
        </FormGroup>
      </List>
    </Box>
  );

  return (
    <Box>
      <SwipeableDrawer
        sx={{
          ".MuiDrawer-paper": {
            maxHeight: "70%",
            borderRadius: "30px 30px 0px 0px",
          },
        }}
        anchor="bottom"
        open={state["bottom"]}
        onClose={toggleDrawer("bottom", false)}
        onOpen={toggleDrawer("bottom", true)}
        ModalProps={{ keepMounted: false }}
      >
        {list("bottom")}
      </SwipeableDrawer>
    </Box>
  );
}
