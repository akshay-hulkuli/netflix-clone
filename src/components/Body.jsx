import React from "react";
import BrowseComponent from "./BrowseComponent";
import Login from "./Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Body = () => {
  const appRoute = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "browse",
      element: <BrowseComponent />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRoute} />
    </div>
  );
};

export default Body;
