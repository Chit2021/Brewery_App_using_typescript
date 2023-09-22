import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import { Outlet } from "react-router-dom";
import { brewerySiteTheme } from "../styles/theam";

import Header from "./Header";
import Footer from "./Footer";

const Root = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={brewerySiteTheme}>
        <Header />
        <Outlet />
        <Footer />
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default Root;