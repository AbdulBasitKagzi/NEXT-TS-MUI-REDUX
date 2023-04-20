import Image from "next/image";
import { Box } from "@mui/material";
import { assets } from "../../assets";

function ImageGrid(): JSX.Element {
  return (
    <Box
      sx={{
        mt: { md: 12, sm: 8, xs: 5 },
        maxWidth: "90%",
        mx: "auto",
      }}
    >
      <Box
        sx={{
          display: { sm: "flex" },
          justifyContent: "center",
          gap: 1,
          width: { xl: "100%" },
        }}
      >
        <Box
          sx={{
            mb: { xs: 1 },
            // mr: 1,
            textAlign: "center",
          }}
        >
          <Image
            src={assets.images.urbanStories}
            alt="urban"
            style={{ objectFit: "contain", width: "100%", height: "99%" }}
          />
        </Box>
        <Box>
          <Image
            src={assets.images.countryLights}
            alt="countylights"
            style={{ objectFit: "contain", width: "100%", height: "99%" }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default ImageGrid;
