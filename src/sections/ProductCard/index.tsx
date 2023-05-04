import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getUserCart,
  increment_decrement_cartProduct,
  update_cartProduct,
} from "@/store/cart/cart.thunk";
import Image from "next/image";

import { RootState } from "@/store/store";

import {
  Box,
  Divider,
  MenuItem,
  Select,
  Typography,
  useTheme,
} from "@mui/material";
import { DeleteOutlineOutlined } from "@mui/icons-material";
import { decrement, increment, removeProduct } from "@/store/cart/cart.slice";
import { colorLists, sizeFilter } from "@/data/Constants";
import Loader from "@/components/Loader";

function ProductCard(): JSX.Element {
  const theme = useTheme();
  const { cartProducts, subTotal, isLoading, message } = useSelector(
    (state: RootState) => state.cart
  );
  const dispatch = useDispatch<any>();

  let shipping: number = 64.0;
  let vat_tax: number = 64.0;

  const filteration = (
    data: Array<number>,
    array: {
      id?: number;
      value?: string;
      slug?: string;
      haxValue?: string;
      name?: string;
    }[]
  ) => {
    let filteredata;
    filteredata = data.map((data) => {
      return array.filter((fill) => fill.id === data);
    });

    return filteredata;
  };

  useEffect(() => {
    dispatch(getUserCart());
  }, []);

  useEffect(() => {
    console.log("cartProds", cartProducts);
  }, [cartProducts]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Box
            sx={{
              backgroundColor: theme.palette.info.contrastText,
              borderRadius: 8,
            }}
          >
            <Box sx={{ pt: 2, mb: 2 }}>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontWeight: 700,
                  fontSize: "18px",
                  color: theme.palette.info.main,
                  textAlign: "left",
                  mx: 4,
                }}
              >
                Your Order
              </Typography>
            </Box>
            <Divider />
            {cartProducts.length ? (
              cartProducts.map(
                (
                  { id, quantity, color, size, product, total_amount },
                  index
                ) => (
                  <>
                    <Box
                      key={id}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mx: 4,
                        my: 3,
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "Inter",
                          fontWeight: 800,
                          fontSize: "18px",
                          color: theme.palette.info.main,
                          wordBreak: "break-all",
                        }}
                      >
                        {product.productName}
                      </Typography>
                      <Box
                        sx={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch(
                            increment_decrement_cartProduct({
                              id: id,
                              type: "delete",
                              product_id: product.id,
                            })
                          )
                        }
                      >
                        <DeleteOutlineOutlined />
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mx: 4,
                        my: 3,
                      }}
                    >
                      <Box sx={{ width: "75px", height: "65px" }}>
                        {product.productImages[0].productImage && (
                          <img
                            src={
                              process.env.NEXT_PUBLIC_IMAGE_URL +
                              product.productImages[0].productImage
                            }
                            alt="product"
                            style={{
                              width: "100%",
                              height: "100%",
                            }}
                          />
                        )}
                      </Box>
                      <Box>
                        {product.productDescription.length &&
                          product.productDescription.map(
                            (desc: string, index) => (
                              <Box key={index}>
                                <Typography
                                  sx={{
                                    fontFamily: "Inter",
                                    fontSize: "14px",
                                    color: theme.palette.info.main,
                                    wordBreak: "break-all",
                                    textAlign: "left",

                                    pt: 1,
                                  }}
                                >
                                  {desc}
                                </Typography>
                              </Box>
                            )
                          )}
                      </Box>
                      <Box>
                        <Typography
                          sx={{
                            fontFamily: "Inter",
                            fontSize: "14px",
                            fontWeight: 700,
                            color: "#616161",
                            wordBreak: "break-all",

                            pt: 1,
                          }}
                        >
                          Quantity
                        </Typography>
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                          <Box
                            sx={{
                              width: "26px",
                              height: "26px",
                              border: 1,
                              borderColor: "#E15113",
                              borderRadius: 2,
                              cursor: "pointer",
                            }}
                            onClick={() =>
                              dispatch(
                                increment_decrement_cartProduct({
                                  product_id: product.id,
                                  id: id,
                                  type: "decrement",
                                })
                              )
                            }
                          >
                            <Typography
                              sx={{
                                fontSize: "18px",
                                color: theme.palette.secondary.contrastText,
                                textAlign: "center",
                              }}
                            >
                              -
                            </Typography>
                          </Box>
                          <Typography sx={{ pl: 1, pr: 1 }}>
                            {quantity}
                          </Typography>
                          <Box
                            sx={{
                              width: "26px",
                              height: "26px",
                              border: 1,
                              borderColor: theme.palette.secondary.contrastText,
                              borderRadius: 2,
                              cursor: "pointer",
                            }}
                            onClick={(e: any) => {
                              e.preventDefault();
                              dispatch(
                                increment_decrement_cartProduct({
                                  product_id: product.id,
                                  id: id,
                                  type: "increment",
                                })
                              );
                            }}
                          >
                            <Typography
                              sx={{
                                fontSize: "18px",
                                color: theme.palette.secondary.contrastText,
                                textAlign: "center",
                              }}
                            >
                              +
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: {
                          sm: "space-between",
                          xs: "space-between",
                        },
                        pb: 2,
                        mx: 4,
                      }}
                    >
                      <Box sx={{ display: "flex", mt: 2, gap: 2 }}>
                        {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                        <Box sx={{ pl: { xl: 0, xs: 0 } }}>
                          <Typography sx={{ color: theme.palette.info.main }}>
                            Size
                          </Typography>
                          <>
                            {console.log("checksize", size)}
                            <Select
                              sx={{
                                width: {
                                  md: "137px",
                                  sm: "100px",
                                  xs: "100px",
                                },
                              }}
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              defaultValue={
                                // product.selectedSize
                                //   ? product.selectedSize
                                //   : product.size[0]
                                size
                              }
                              label="Age"
                              placeholder="Select Size"
                              onChange={(e) => {
                                dispatch(
                                  update_cartProduct({
                                    id: id,
                                    size: +e.target.value,
                                  })
                                );
                              }}
                            >
                              {product.productSizes.map(
                                ({ size }, index: number) => {
                                  return (
                                    <MenuItem key={id} value={size.id}>
                                      {size.slug}
                                    </MenuItem>
                                  );
                                }
                              )}
                            </Select>
                          </>
                        </Box>
                        <Box sx={{ pl: 0.5 }}>
                          <Typography sx={{ color: theme.palette.info.main }}>
                            Color
                          </Typography>
                          <Select
                            sx={{ width: { sm: "75px", xs: "50px" } }}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            defaultValue={
                              // product.selectedColor
                              //   ? product.selectedColor
                              //   : product.color[0]
                              color
                            }
                            // value={age}
                            label="Age"
                            // value={color}
                            // onChange={handleChange}
                            // onChange={handleColor}
                            onChange={(e) => {
                              dispatch(
                                update_cartProduct({
                                  id: id,
                                  color: +e.target.value,
                                })
                              );
                            }}
                          >
                            {product.productColors.map(
                              ({ color }, index: number) => {
                                return (
                                  <MenuItem key={id} value={color.id}>
                                    {color.name}
                                  </MenuItem>
                                );
                              }
                            )}
                          </Select>
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          mr: {
                            sm: 0,
                            xs: "20px",
                          },
                          mt: 7,
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: { sm: "18px", xs: "16px" },
                            fontFamily: "Jost",
                            fontWeight: 700,
                            color: theme.palette.info.main,
                            // pr: { md: 5, sm: 2, xs: 0 }
                          }}
                        >
                          $ {total_amount}
                          .00
                        </Typography>
                      </Box>
                    </Box>
                  </>
                )
              )
            ) : (
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "30px",
                  fontFamily: "Jost",
                  p: 2,
                }}
              >
                {message}
              </Typography>
            )}
            <Divider />
            {cartProducts.length ? (
              <>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: "Jost",
                        fontWeight: 800,
                        fontSize: {
                          md: "18px",
                          xs: "16px",
                        },
                        color: theme.palette.info.main,
                        // py: 2,
                        // pl: 5,
                        mx: 4,
                        my: 2,
                        wordBreak: "break-all",
                      }}
                    >
                      Subtotal
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: "Jost",
                        fontWeight: 800,
                        fontSize: {
                          md: "18px",
                          xs: "16px",
                        },
                        color: theme.palette.info.main,
                        // py: 2,
                        // pr: 5,
                        mx: 4,
                        my: 2,
                        wordBreak: "break-all",
                      }}
                    >
                      $ {subTotal}.00
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: "Jost",
                        fontWeight: 800,
                        fontSize: {
                          md: "18px",

                          xs: "15px",
                        },
                        color: theme.palette.info.main,
                        // py: 2,
                        // pl: 5,
                        mx: 4,
                        my: 2,
                        wordBreak: "break-all",
                      }}
                    >
                      Shipping
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: "Jost",
                        fontWeight: 800,
                        fontSize: {
                          md: "18px",
                          xs: "16px",
                        },
                        color: theme.palette.info.main,
                        // py: 2,
                        // pr: 5,
                        mx: 4,
                        my: 2,
                        wordBreak: "break-all",
                      }}
                    >
                      $ 0{shipping}.00
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: "Jost",
                        fontWeight: 800,
                        fontSize: {
                          md: "18px",
                          xs: "16px",
                        },
                        color: theme.palette.info.main,
                        // py: 2,
                        // pl: 5,
                        mx: 4,
                        my: 2,
                        wordBreak: "break-all",
                      }}
                    >
                      Vat,tax
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: "Jost",
                        fontWeight: 800,
                        fontSize: {
                          md: "18px",
                          xs: "16px",
                        },
                        color: theme.palette.info.main,
                        // py: 2,
                        // pr: 5,
                        mx: 4,
                        my: 2,
                        wordBreak: "break-all",
                      }}
                    >
                      $ 0{vat_tax}.00
                    </Typography>
                  </Box>
                </Box>
                <Divider />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: "Jost",
                        fontWeight: 800,
                        fontSize: {
                          md: "24px",
                          xs: "20px",
                        },
                        color: theme.palette.info.main,
                        // py: 2,
                        // pl: 5,
                        mx: 4,
                        my: 2,
                        wordBreak: "break-all",
                      }}
                    >
                      Total
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: "Jost",
                        fontWeight: 800,
                        fontSize: {
                          md: "24px",
                          xs: "20px",
                        },
                        color: theme.palette.info.main,
                        // py: 2,
                        // pr: { md: '16px', xs: '24px' },
                        mx: 4,
                        my: 2,
                        wordBreak: "break-all",
                      }}
                    >
                      $ {subTotal + vat_tax + shipping}.00
                    </Typography>
                  </Box>
                </Box>
              </>
            ) : (
              <Typography></Typography>
            )}

            {/* enter code above */}
          </Box>
        </>
      )}
    </>
  );
}

export default ProductCard;
