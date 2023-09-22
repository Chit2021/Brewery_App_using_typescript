import BreweryType from "./Brewery-Types";

interface Brewery {
  id: string;
  name: string;
  brewery_type: BreweryType;
  address1: string | null;
  address2: string | null;
  address3: string | null;
  city: string;
  state_province: string;
  postal_code: string;
  country: string;
  longitude: string;
  latitude: string;
  phone: string;
  website_url: string;
  state: string | null;
  street: string;
}

export default Brewery;