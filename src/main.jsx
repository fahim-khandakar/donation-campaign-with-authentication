import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root";
import Home from "./Components/Home/Home";
import Donation from "./Components/Donation/Donation";
import Statistics from "./Components/Statistics/Statistics";
import CardDetails from "./Components/CardDetails/CardDetails";
import Error from "./Components/ErrorPage/Error";
import AuthProvider from "./Components/AuthProviders/AuthProvider";
import Login from "./Components/Login/Login";
import Profile from "./Components/Profile/Profile";
import SignUp from "./Components/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/donation",
        loader: () => fetch("/data.json"),
        element: <Donation></Donation>,
      },
      {
        path: "/statistics",
        loader: () => fetch("/data.json"),
        element: <Statistics></Statistics>,
      },
      {
        path: "/card/:id",
        loader: () => fetch("/data.json"),
        element: <CardDetails></CardDetails>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/register",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
