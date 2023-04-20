import Image from "next/image";
import { assets } from "../../assets";

// mui imports
import { Box } from "@mui/material";

function CategoryGrid() {
  return (
    <Box
      className="parent"
      sx={{
        display: {
          sm: "flex",
          xs: "grid",
        },
        gap: 1,
        justifyContent: "center",
        maxWidth: "90%",
        mx: "auto",
      }}
    >
      <Box
        sx={{
          mt: 1,
        }}
      >
        <img
          src={assets.images.handBag.src}
          alt="handbag"
          style={{ width: "100%", height: "99%" }}
        />
      </Box>
      <Box
        sx={{
          mt: 1,
        }}
      >
        <img
          src={assets.images.hats.src}
          alt="hat"
          style={{ width: "100%", height: "99%" }}
        />
      </Box>
      <Box
        sx={{
          mt: 1,
        }}
      >
        <img
          src={assets.images.heels.src}
          alt="heel"
          style={{ width: "100%", height: "99%" }}
        />
      </Box>
    </Box>
  );
}

export default CategoryGrid;
