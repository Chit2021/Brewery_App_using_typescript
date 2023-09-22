import { Link, Outlet } from "react-router-dom";
import BreweriesList from "../components/BreweriesList";
import { Button,Typography} from "@mui/material";

const Home = () => {
  return (
    <div>
      <Typography variant="h1">Home</Typography>
      <Button component={Link} to="/breweries-list">
        Show Breweries List
      </Button>
      <Outlet />
    </div>
  );
};

export default Home
