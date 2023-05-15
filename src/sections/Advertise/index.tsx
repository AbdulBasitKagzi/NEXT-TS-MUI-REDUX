import { Box, Button, Typography, useTheme } from "@mui/material";
import { assets } from "../../assets";
import Image from "next/image";

interface advertiseProps {
  title?: string;
  subtitle: string;
  message: string;
  buttontitle: string;
  image: string | undefined;
  background?: string | undefined;
}
function Advertise({
  title,
  subtitle,
  message,
  buttontitle,
  image,
  background,
}: advertiseProps): JSX.Element {
  const theme = useTheme();
  return (
    <Box
      sx={{
        mt: { sm: 6, xs: 3 },
        maxWidth: "90%",
        mx: "auto",
      }}
    >
      <Box
        sx={{
          display: { sm: "flex" },
          justifyContent: "center",
          gap: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            background: background,
            width: "100%",
            mb: { xs: "10px" },
            mx: "auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { sm: "start", xs: "center" },
              justifyContent: "center",

              ml: { xl: 13, lg: 9, md: 6, sm: 6 },
              mx: { xs: "auto" },
            }}
          >
            <Typography
              sx={{
                fontFamily: "Jost",
                fontSize: {
                  xl: "35px",
                  lg: "29px",
                  md: "25px",
                  sm: "20px",
                  xs: "20px",
                },
                fontWeight: 700,
                color: theme.palette.primary.main,
                paddingTop: { xs: "40px" },
              }}
            >
              {title}
            </Typography>
            <Typography
              sx={{
                fontFamily: "Jost",
                fontSize: {
                  lg: "50px",
                  md: "35px",
                  sm: "25px",
                  xs: "29px",
                },
                fontWeight: 700,
                color: theme.palette.primary.dark,
                wordBreak: "break-all",
              }}
            >
              {subtitle}
            </Typography>
            <Typography
              sx={{
                textAlign: "left",
                fontFamily: "Jost",
                fontSize: {
                  lg: "18px",
                  md: "14px",
                  sm: "12px",
                  xs: "12px",
                },
                fontWeight: 400,
                color: theme.palette.primary.main,

                width: {
                  lg: "423px",
                  md: "360px",
                  sm: "270px",
                  xs: "240px",
                },
                wordBreak: "break-all",
              }}
            >
              {message}
            </Typography>

            <Button
              // variant="contained"
              sx={{
                background: theme.palette.primary.dark,
                color: theme.palette.success.main,
                width: {
                  xl: 256,
                  lg: 200,
                  md: 150,
                  xs: 100,
                  sm: 110,
                },
                height: { xl: 61, lg: 50, xs: 30 },
                mt: { lg: 10, md: 5, xs: 3 },
                mb: 2,
                fontSize: { lg: "20px", xs: "9px" },
                borderRadius: 0,
                textTransform: "capitalize",
                fontFamily: "Jost",
                "&:hover": {
                  background: theme.palette.primary.dark,
                },
              }}
            >
              {buttontitle}
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
          }}
        >
          <img
            src={image as string}
            alt="womenstanding"
            style={{ width: "100%", height: "98.5%" }}
          />
          <Box
            position="relative"
            sx={{ bottom: 70, display: "flex", justifyContent: "center" }}
          >
            <Button variant="text">
              <Typography color="#FFFFFF" sx={{ textTransform: "capitalize" }}>
                Outfit
                <Image src={assets.images.arrowIcon} alt="arrow" width={15} />
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Advertise;
