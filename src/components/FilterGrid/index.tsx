import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import { RootState } from "../../store/store";
import { genderProps } from "../../store/product/product.types";
import WarningModel from "../WarningModel";
import DescriptionAlerts from "../Alert";
import Loader from "../Loader";
import { addToCart } from "@/store/cart/cart.thunk";

// images and icons import
import { assets } from "../../assets";

// mui imports
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import { useTheme } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";

interface filterGridProps {
  toggleDrawer: (
    anchor: "bottom",
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
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
  type: genderProps;
}

const FilterGrid: React.FC<filterGridProps> = ({
  toggleDrawer,
  setCurrentPage,
  setFilterQuery,
  currentPage,
  type,
}) => {
  const theme = useTheme();
  const { filteredProducts, totalProduct, isLoading } = useSelector(
    (state: RootState) => state.product
  );
  const { added } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch<any>();

  const [totalPage, setTotalPage] = useState<number>();
  let postPerPage: number = 9;

  const [save, setSave] = useState<string>();
  const [open, setOpen] = useState<boolean>(false);
  const [openUp, setOpenUp] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== undefined) {
      setSave(localStorage.getItem("token") || "");
    }
  }, []);

  useEffect(() => {
    const page = Math.ceil(totalProduct / postPerPage);
    setTotalPage(page);
  }, [filteredProducts, postPerPage, totalProduct]);

  return (
    <Box>
      <Box
        sx={{
          mt: { md: -12.9, sm: -11.8, xs: 5 },
          display: "flex",
          justifyContent: "space-between",
          ml: { xs: 4 },
        }}
      >
        <Typography
          sx={{
            fontFamily: "Jost",
            fontSize: {
              lg: "44px",
              md: "40px",
              sm: "34px",
              xs: "28px",
            },
            fontWeight: 700,
            color: theme.palette.primary.dark,
          }}
        >
          {type?.value} Products
        </Typography>
        <Box
          onClick={toggleDrawer("bottom", true)}
          sx={{ display: { sm: "none", xs: "block" }, alignSelf: "self-end" }}
        >
          <FilterListIcon sx={{ mr: 2 }} />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "start" },
          ml: { xs: 4 },
        }}
      >
        <Typography
          sx={{
            fontFamily: "Jost",
            fontWeight: "400",
            fontSize: "20px",
            pb: 1,
            color: theme.palette.warning.light,
          }}
        >
          {totalProduct} results
        </Typography>
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          marginInline: "25px",
        }}
      >
        {added && (
          <DescriptionAlerts
            type="success"
            title="Success"
            message="Product successfully added to cart"
            openUp={added}
            setOpenUp={setOpenUp}
            closeDuration={2000}
            backgroundColor="#4caf50"
          />
        )}

        {open && <WarningModel open={open} setOpen={setOpen} />}

        <Grid container spacing={4}>
          {isLoading ? (
            <Box
              sx={{
                position: "absolute",
                top: { sm: "15%", xs: "1%" },
                left: { sm: "60%", xs: "40%" },
              }}
            >
              <Loader />
            </Box>
          ) : filteredProducts.length !== 0 ? (
            filteredProducts.map((arr, index) => (
              <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                <Link
                  href={`/product/singleProduct/${arr.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Box
                    key={arr.id}
                    sx={{
                      position: "relative",
                      border: 1,
                      // height: "100%",
                      borderColor: "#E5E7EB",
                      width: {
                        sm: filteredProducts.length === 1 ? "300px" : "100%",
                        xs: "100%",
                      },
                      cursor: "pointer",
                    }}
                  >
                    <Box>
                      {arr?.productImages?.map((image, index: number) => {
                        if (index === 0) {
                          return (
                            <Box key={image.id}>
                              <img
                                className="product_image"
                                src={
                                  image.productImage &&
                                  process.env.NEXT_PUBLIC_IMAGE_URL +
                                    image.productImage
                                }
                                alt={image.productImage}
                                style={{
                                  width: "100%",
                                  height: "300px",
                                }}
                              />
                            </Box>
                          );
                        } else {
                          return;
                        }
                      })}
                    </Box>

                    <Box sx={{ position: "absolute", top: 12, right: 15 }}>
                      <img
                        src={assets.icons.Heart_Group.src}
                        alt="heartgroup"
                        width="40px"
                      />
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        textAlign: "left",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          fontFamily: "Inter",
                          fontSize: {
                            lg: "30px",
                            md: "26px",
                            sm: "24px",
                            xs: "22px",
                          },
                          fontWeight: 400,

                          height: { sm: 120 },
                          pb: 1,
                          pl: 2,
                          color: theme.palette.info.dark,
                        }}
                      >
                        {arr.productName}
                      </Typography>
                      <Box
                        sx={{
                          mr: 3,
                          my: "auto",
                          display: "flex",
                          mt: 6,
                        }}
                        onClick={(
                          e: React.MouseEvent<HTMLDivElement, MouseEvent>
                        ) => {
                          e.stopPropagation();
                          e.preventDefault();
                          if (save) {
                            dispatch(addToCart(arr));
                          } else {
                            setOpen(true);
                          }
                        }}
                      >
                        <img
                          src={assets.icons.Shopping_Cart_Vector.src}
                          alt="cart"
                        />
                      </Box>
                    </Box>
                    <Typography
                      sx={{
                        textAlign: "left",
                        fontFamily: "Inter",
                        fontSize: {
                          lg: "34px",
                          md: "30px",
                          sm: "28px",
                          xs: "22px",
                        },
                        pl: 1,
                        fontWeight: 400,
                        ml: { lg: "16px" },
                        color: theme.palette.primary.light,
                      }}
                    >
                      $ {arr.productCurrentPrice}
                    </Typography>
                  </Box>
                </Link>
              </Grid>
            ))
          ) : (
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: "30px",
                fontFamily: "Jost",
                p: 5,
              }}
            >
              No product Found
            </Typography>
          )}
        </Grid>

        {filteredProducts.length !== 0 && !isLoading && (
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 10 }}>
            <>
              {console.log("page", currentPage)}
              <Pagination
                sx={{
                  ".MuiPaginationItem-root": {
                    border: "1px solid #D1D5DB",
                    color: theme.palette.error.dark,
                    fontSize: "20px",
                    fontWeight: 700,
                    borderRadius: 0,
                    width: "38px",
                    height: "38px",
                  },
                }}
                count={totalPage}
                variant="outlined"
                shape="rounded"
                page={currentPage}
                onChange={(event: React.ChangeEvent<unknown>, page: number) => {
                  console.log("test", page);
                  setCurrentPage(page);
                  setFilterQuery((prev) => ({ ...prev, page: page }));
                }}
              />
            </>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default FilterGrid;
