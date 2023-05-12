import { useState } from "react";
import NavBar from "./Header/index";
import { ReactNode } from "react";
import { Box } from "@mui/material";
import Footer from "./Footer";

interface layoutProps {
  children: ReactNode;
}

const Layout: React.FC<layoutProps> = ({ children }) => {
  const [openModel, setOpenModel] = useState<boolean>(false);
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        backdropFilter: openModel ? "blur(20px)" : "none",
      }}
      onClick={() => {
        openModel && setOpenModel(false);
      }}
    >
      <NavBar setOpenModel={setOpenModel} openModel={openModel} />
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;
