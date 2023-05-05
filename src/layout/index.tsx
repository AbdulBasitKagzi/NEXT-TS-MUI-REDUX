import React from "react";
import NavBar from "./Header/index";
import { ReactNode } from "react";
import { Box } from "@mui/material";
import Footer from "./Footer";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Box sx={{ position: "relative", width: "100%" }}>
      <NavBar />
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;
