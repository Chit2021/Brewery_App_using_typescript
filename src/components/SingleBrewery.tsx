import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios, { AxiosError, AxiosResponse } from "axios";
import { Button, CardContent, Container, Typography } from "@mui/material";

import Brewery from "../types/Brewery";
import { BreweryCard } from "../styles/component-style";

const SingleBrewery = () => {
  const [brewery, setBrewery] = useState<Brewery>();
  const [error, setError] = useState("");
  const params = useParams();
  const id = params?.id;

  const fetchedSingleBrewery = async (id: string | undefined) => {
    let url: string;
    url = `https://api.openbrewerydb.org/v1/breweries/${id}`;
    try {
      const result = await axios.get<any, AxiosResponse<Brewery>>(url);
      if (!result) {
        throw new Error();
      }
      setBrewery(result.data);
    } catch (e) {
      const error = e as AxiosError;
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchedSingleBrewery(id);
  }, [id]);

  return (
    <main>
      <Container>
        <Button component={Link} to="/breweries-list">
          Back to Breweries List
        </Button>

        <Typography variant="h3"> Single Brewery </Typography>

        {error && <p> {`There is a error : ${error}`}</p>}
        {!error && brewery && (
          <BreweryCard key={brewery.id}>
            <CardContent sx={{ backgroundColor: "aliceblue" }}>
              <p>{brewery.name}</p>
              <p> Type : {brewery.brewery_type}</p>
              <p>
                {`${brewery.street},${brewery.city},${brewery.country}-${brewery.postal_code}`}
              </p>
              <p>{brewery.phone}</p>
              <p>
                web-site :
                <a href={`${brewery.website_url}`} target="_blank">
                  {brewery.website_url}
                </a>
              </p>
            </CardContent>
          </BreweryCard>
        )}
      </Container>
    </main>
  );
};

export default SingleBrewery;
