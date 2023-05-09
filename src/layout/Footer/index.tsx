import React from "react";

// mui imports
import {
  Box,
  Divider,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  List,
  ListItem,
  OutlinedInput,
  Typography,
  useTheme,
} from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import { assets } from "../../assets";

const Footer: React.FC = () => {
  const theme = useTheme();
  return (
    <Box sx={{ maxWidth: "1600px", mx: "auto" }}>
      <Box sx={{ maxWidth: "90%", mx: "auto", mt: 5 }}>
        <Box
          sx={{
            display: {
              sm: "flex",
            },
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: {
                sm: "flex",
                xs: "block",
              },
              gap: { lg: "100px", md: "50px", sm: "10px" },
            }}
          >
            <Box sx={{ textAlign: { xs: "center" } }}>
              <List>
                <ListItem
                  sx={{
                    fontFamily: "Jost",
                    fontSize: "20px",
                    fontWeight: 700,
                    color: theme.palette.primary.dark,
                  }}
                >
                  Company Info
                </ListItem>
                <ListItem
                  sx={{
                    fontFamily: "Jost",
                    fontSize: {
                      md: "16px",
                      sm: "14px",
                      xs: "11px",
                    },
                    fontWeight: 400,
                    color: theme.palette.error.dark,
                    cursor: "pointer",
                  }}
                >
                  About Us
                </ListItem>
                <ListItem
                  sx={{
                    fontFamily: "Jost",
                    fontSize: {
                      md: "16px",
                      sm: "14px",
                      xs: "11px",
                    },
                    fontWeight: 400,
                    color: theme.palette.error.dark,

                    cursor: "pointer",
                  }}
                >
                  Affiliate
                </ListItem>
                <ListItem
                  sx={{
                    fontFamily: "Jost",
                    fontSize: {
                      md: "16px",
                      sm: "14px",
                      xs: "11px",
                    },
                    fontWeight: 400,
                    color: theme.palette.error.dark,

                    cursor: "pointer",
                  }}
                >
                  Fashion Blogger
                </ListItem>
              </List>
            </Box>
            <Box>
              <List>
                <ListItem
                  sx={{
                    fontFamily: "Jost",
                    fontSize: "20px",
                    fontWeight: 700,
                    color: theme.palette.primary.dark,
                  }}
                >
                  Help & Support
                </ListItem>
                <ListItem
                  sx={{
                    fontFamily: "Jost",
                    fontSize: {
                      md: "16px",
                      sm: "14px",
                      xs: "11px",
                    },
                    fontWeight: 400,
                    color: theme.palette.error.dark,
                    cursor: "pointer",
                  }}
                >
                  Shipping Info
                </ListItem>
                <ListItem
                  sx={{
                    fontFamily: "Jost",
                    fontSize: {
                      md: "16px",
                      sm: "14px",
                      xs: "11px",
                    },
                    fontWeight: 400,
                    color: theme.palette.error.dark,
                    cursor: "pointer",
                  }}
                >
                  Refunds
                </ListItem>
                <ListItem
                  sx={{
                    fontFamily: "Jost",
                    fontSize: {
                      md: "16px",
                      sm: "14px",
                      xs: "11px",
                    },
                    fontWeight: 400,
                    color: theme.palette.error.dark,
                    cursor: "pointer",
                  }}
                >
                  How to Order
                </ListItem>
                <ListItem
                  sx={{
                    fontFamily: "Jost",
                    fontSize: {
                      md: "16px",
                      sm: "14px",
                      xs: "11px",
                    },
                    fontWeight: 400,
                    color: theme.palette.error.dark,
                    cursor: "pointer",
                  }}
                >
                  How to Track
                </ListItem>
                <ListItem
                  sx={{
                    fontFamily: "Jost",
                    fontSize: {
                      md: "16px",
                      sm: "14px",
                      xs: "11px",
                    },
                    fontWeight: 400,
                    color: theme.palette.error.dark,
                    cursor: "pointer",
                  }}
                >
                  Size Guides
                </ListItem>
              </List>
            </Box>
            <Box>
              <List>
                <ListItem
                  sx={{
                    fontFamily: "Jost",
                    fontSize: "20px",
                    fontWeight: 700,
                    color: theme.palette.primary.dark,
                  }}
                >
                  Customer Care
                </ListItem>
                <ListItem
                  sx={{
                    fontFamily: "Jost",
                    fontSize: {
                      md: "16px",
                      sm: "14px",
                      xs: "11px",
                    },
                    fontWeight: 400,
                    color: theme.palette.error.dark,
                    cursor: "pointer",
                  }}
                >
                  Contact Us
                </ListItem>
                <ListItem
                  sx={{
                    fontFamily: "Jost",
                    fontSize: {
                      md: "16px",
                      sm: "14px",
                      xs: "11px",
                    },
                    fontWeight: 400,
                    color: theme.palette.error.dark,
                    cursor: "pointer",
                  }}
                >
                  Payment Methods
                </ListItem>
                <ListItem
                  sx={{
                    fontFamily: "Jost",
                    fontSize: {
                      md: "16px",
                      sm: "14px",
                      xs: "11px",
                    },
                    fontWeight: 400,
                    color: theme.palette.error.dark,
                    cursor: "pointer",
                  }}
                >
                  Bonus Point
                </ListItem>
              </List>
            </Box>
          </Box>
          <Box>
            <Typography
              sx={{
                fontFamily: "Jost",
                fontSize: "20px",
                fontWeight: 700,
                color: theme.palette.primary.dark,
              }}
            >
              Signup For The Latest News
            </Typography>
            <FormControl
              sx={{ m: 1, width: { lg: "275px" } }}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Enter Email
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type="text"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      edge="end"
                    >
                      <ArrowForwardIcon />
                    </IconButton>
                  </InputAdornment>
                }
                label="email"
              />
            </FormControl>
            <Box
              sx={{
                fontFamily: "Jost",
                fontSize: "16px",
                fontWeight: 400,
                color: theme.palette.error.dark,
                mt: { sm: 7, xs: 2 },
                ml: 1,
                display: "flex",
                gap: 1,
              }}
            >
              <MailOutlineIcon sx={{ color: theme.palette.primary.dark }} />
              <Typography sx={{ color: theme.palette.error.dark }}>
                something@email.com
              </Typography>
            </Box>
            <Box
              sx={{
                fontFamily: "Jost",
                fontSize: "16px",
                fontWeight: 400,
                color: theme.palette.error.dark,
                mt: { xs: 2 },
                mb: 2,
                ml: 1,
                display: "flex",
                gap: 1,
              }}
            >
              <PhoneIcon sx={{ color: theme.palette.primary.dark }} />
              <Typography sx={{ color: theme.palette.error.dark }}>
                +2321354524
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            mb: { xs: 2 },
            mt: { xs: 10 },
            display: "flex",
            justifyContent: "center",
            gap: 6,
          }}
        >
          <img src={assets.icons.facebook.src} alt="facebook" />
          <img src={assets.icons.instagram.src} alt="instagram" />
          <img src={assets.icons.youtube.src} alt="youtube" />
          <img src={assets.icons.twitter.src} alt="twitter" />
        </Box>
        <Box>
          <Divider variant="middle" />
        </Box>
        <Box textAlign="left" display="flex" sx={{ mt: 2 }}>
          <Typography
            sx={{
              fontFamily: "Jost",
              fontSize: "14px",
              color: theme.palette.error.light,
              mr: 1,
            }}
          >
            All rights Reserved
          </Typography>
          <Typography
            sx={{
              fontFamily: "Jost",
              fontSize: "14px",
              color: theme.palette.error.light,
              fontWeight: 700,
            }}
          >
            &copy; Your Company, 2021
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
