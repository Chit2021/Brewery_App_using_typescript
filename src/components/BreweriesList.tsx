import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import { Link, useNavigate } from "react-router-dom";
import axios, { AxiosError, AxiosResponse } from "axios";

import Brewery from "../types/Brewery";
import { CardContent, Container, FormControl, Typography } from "@mui/material";
import { BreweryCard } from "../styles/component-style";

const BreweriesList = () => {
  const [breweries, setBreweries] = useState<Brewery[]>();
  const [error, setError] = useState("");

  const [visibleBreweries, setvisibleBreweries] = useState<Brewery[]>();

  // filter breweries by name
  const filterSearchData = (search: string) => {
    const data = breweries?.filter((b) =>
      b.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
    setvisibleBreweries(data);
  };

  const navigate = useNavigate();

  const fetchedAll = async () => {
    const url = "https://api.openbrewerydb.org/v1/breweries";
    try {
      const response = await axios.get<any, AxiosResponse<Brewery[]>>(url);
      setBreweries(response.data);
      setvisibleBreweries(response.data);
    } catch (e) {
      const error = e as AxiosError;
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchedAll();
  }, []);

  return (
    <main>
      <Container>
        <Button component={Link} to="/">
          Back to Home
        </Button>

        <Typography variant="h1">Brewery list</Typography>
        {error && <Typography> {`There is a error : ${error}`}</Typography>}
        {breweries && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <FormControl sx={{ padding: "1em" }}>
              <TextField
                id="standard-search"
                label="Search by name"
                type="search"
                variant="standard"
                onChange={(e) => filterSearchData(e.target.value)}
                size="small"
              />
            </FormControl>
            {visibleBreweries?.map((b) => (
              <BreweryCard key={b.id}>
                <CardContent sx={{ backgroundColor: "aliceblue" }}>
                  <Typography variant="h3">{b.name}</Typography>
                  <Typography>{`${b.street} ${b.city} ${b.country}`}</Typography>
                </CardContent>
                <CardContent sx={{ backgroundColor: "aliceblue" }}>
                  <Button
                    href={`../single-brewery/${b.id}`}
                    size="small"
                    endIcon={<SendIcon />}
                  >
                    View More Details
                  </Button>
                </CardContent>
              </BreweryCard>
            ))}
          </Box>
        )}
      </Container>
    </main>
  );
};

export default BreweriesList;
