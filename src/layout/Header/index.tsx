import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { makeRoute } from "@/store/user/user.slice";
import { gender } from "../../data/Constants";
import { assets } from "../../assets";

// mui imports
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import NavbarModel from "../../components/NavbarModel/index";
import { RootState } from "../../store/store";
import { cartProducts } from "../../store/cart/cart.types";
import { useTheme } from "@mui/material";
import { get_like_products } from "@/store/user/user.thunk";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;

export default function DrawerAppBar(props: Props) {
  const theme = useTheme();
  const router = useRouter();
  const { cartProducts } = useSelector((state: RootState) => state.cart);
  const { window } = props;
  // const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const dispatch = useDispatch<any>();
  const [background, setBackground] = useState<string | undefined>(
    "transparent"
  );
  // const [searchParams, setSearchParams] = useSearchParams();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const navIcons = [
    { id: 1, value: assets.icons.Call_Vector },
    { id: 2, value: assets.icons.Cart },
    { id: 3, value: assets.icons.Search },
    { id: 4, value: assets.icons.Login },
    { id: 5, value: assets.icons.Like_Vector },
  ];

  const [openModel, setOpenModel] = useState<boolean>(false);
  const [value, setValue] = useState<number>(-1);

  const [totalCartProducts, setTotalCartProducts] = useState<number>(0);

  useEffect(() => {
    let total: number = 0;
    if (cartProducts.length) {
      total = cartProducts.reduce((acc: number, curr: cartProducts) => {
        total = acc + curr.quantity;
        return total;
      }, 0);
      setTotalCartProducts(total);
    }
  }, [cartProducts]);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Menu
      </Typography>
      <Divider />
      <List>
        {gender.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText
                sx={{
                  color: theme.palette.primary.dark,
                  fontFamily: "Josefin Sans",
                  fontSize: "16px",
                  display: "inline-block",
                }}
                onClick={() => {
                  if (item.id === 0) {
                    router.push("/");
                  } else if (item.id !== 3 && item.id !== 4) {
                    dispatch(makeRoute(item.slug));
                    setOpenModel(true);
                  } else {
                    router.push("/");
                  }
                }}
              >
                {item.id === 0 && (
                  <img
                    src={assets.icons.W.src}
                    alt="icon"
                    style={{ paddingRight: "5px", width: "30px" }}
                  />
                )}
                {item.value}
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          component="nav"
          sx={{
            background: background,
            boxShadow: "none",
            position: "relative",
            maxWidth: "1600px",
            mx: "auto",
          }}
        >
          {openModel && (
            <Box sx={{ position: "absolute", width: "100%" }}>
              <NavbarModel
                openModel={openModel}
                setOpenModel={setOpenModel}
                setBackground={setBackground}
                setValue={setValue}
              />
            </Box>
          )}
          <Toolbar sx={{ display: "block" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                mr: 2,
                display: {
                  md: "none",
                  sm: "block",
                  xs: "flex",
                },
                color: "black",
              }}
            >
              <MenuIcon />
            </IconButton>
            <Box
              sx={{
                display: {
                  xs: "flex",
                },
                justifyContent: {
                  md: "space-between",
                  xs: "end",
                },
                mt: { md: 3, sm: "-28px", xs: "-26px" },
                mr: { sm: 0 },
                zIndex: 5,
              }}
            >
              <Box
                className="class"
                sx={{
                  color: "#fff",
                  fontFamily: "Josefin Sans",
                  ml: { md: "75px" },
                  cursor: "pointer",
                  display: {
                    md: "flex",
                    xs: "none",
                  },
                  gap: 4,
                  zIndex: 5,
                }}
              >
                {gender.map((item) => (
                  <Link
                    href={item.id === 0 ? `/` : `/product?gender=${item.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    {item.id === 0 && (
                      <img
                        key={item.id}
                        src={assets.icons.W.src}
                        alt="icon"
                        style={{ paddingRight: "5px", width: "30px" }}
                      />
                    )}
                    <Typography
                      sx={{
                        color: theme.palette.primary.dark,
                        fontFamily: "Josefin Sans",
                        fontSize: "16px",
                        display: "inline-block",
                        textDecoration:
                          item.id === Number(value) ? "underline" : "none",
                        zIndex: 10,
                      }}
                      onClick={() => {
                        if (item.id === 0) {
                          setOpenModel(false);
                        } else {
                          // setSearchParams({ gender: item.slug });
                        }
                      }}
                      onMouseEnter={() => {
                        if (item.id !== 0 && item.id !== 3 && item.id !== 4) {
                          dispatch(makeRoute(item.id));
                          setOpenModel(true);
                          setBackground(theme.palette.success.main);
                          setValue(item.id);
                        } else {
                          setOpenModel(false);
                        }
                      }}
                      onMouseLeave={() => {
                        if (item.id !== 0) {
                          setBackground("transparent");
                          setValue(-1);
                        }
                      }}
                    >
                      {item.value}
                    </Typography>
                  </Link>
                ))}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  marginRight: { md: "30px", sm: 0 },
                  gap: { sm: 4, xs: 2 },
                }}
              >
                {navIcons.map((item) => (
                  <Typography
                    key={item.id}
                    sx={{
                      color: theme.palette.primary.dark,
                      fontFamily: "Josefin Sans",
                      fontSize: "16px",
                      display: "block",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      if (item.id === 2 && cartProducts.length !== 0) {
                        router.push("/shipping");
                      } else if (item.id === 4) {
                        router.push("/login");
                      } else if (item.id === 5) {
                        dispatch(get_like_products());
                      }
                    }}
                  >
                    <Image
                      src={item.value}
                      alt="item"
                      style={{ position: "relative" }}
                    />
                    {item.id === 2 && (
                      <span
                        style={{
                          position: "relative",
                          top: "-15px",
                          left: 0,
                          backgroundColor: "red",
                          borderRadius: 4,
                          fontSize: "16px",
                          textAlign: "center",
                          padding: 3,
                          color: theme.palette.success.main,
                        }}
                      >
                        {totalCartProducts}
                      </span>
                    )}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
    </>
  );
}
