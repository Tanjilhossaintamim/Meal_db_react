import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Meals from "./components/Meals/Meals.jsx";
import axios from "axios";
import Detailes from "./components/Details/Detailes.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Meals />,
        loader: () =>
          axios.get("https://www.themealdb.com/api/json/v1/1/search.php?f=a"),
      },
      {
        path: "/meal/:mealId",
        loader: ({ params }) =>
          axios.get(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealId}`
          ),
        element: <Detailes />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.Fragment>
    <RouterProvider router={router} />
  </React.Fragment>
);
