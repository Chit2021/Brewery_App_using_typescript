import { AppBar, Typography, Toolbar, Button, Icon } from "@mui/material";

import { Link } from "react-router-dom";

import { NavButtonGroup } from "../styles/component-style";

const Header = () => {
  return (
    <header>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h1">
            Breweries
          </Typography>

          <NavButtonGroup variant="contained">
            <Button component={Link} to="/">
              Home
            </Button>
            <Button component={Link} to="/breweries-list">
              Brewery list
            </Button>
          </NavButtonGroup>
        </Toolbar>
      </AppBar>
    </header>
  );
};
export default Header