import { BottomNavigation, Button, Link, Typography } from "@mui/material";

const Footer = () => {
  return (
    <BottomNavigation>
      <Typography>
        BreweryInfo@
        <Button href="https://www.openbrewerydb.org/documentation">
          Open Brewery DB
        </Button>
      </Typography>
    </BottomNavigation>
  );
};
export default Footer;

