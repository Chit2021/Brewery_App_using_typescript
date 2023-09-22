import BreweriesList from "./components/BreweriesList";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Root from "./pages/Root";

import Home  from "./pages/Home";
import CustomError from "./pages/CustomError";
import SingleBrewery from "./components/SingleBrewery";

const App = () => {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "/breweries-list",
          element: <BreweriesList />,
        },
        { path: "single-brewery/:id", element: <SingleBrewery /> },

        {
          path: "*",
          element: <CustomError />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={route} />
    </div>
  );
};

export default App;