import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {EquipoFavorito} from "./Pages/EquipoFavorito";
import {Equipos} from "./Pages/Equipos";
import {Equiposid} from "./Pages/Equiposid";
import { Home } from "./Pages/Home";

const router = createBrowserRouter([
  { path: "/Home", 
    element: <Home /> },

  { path: "/EquipoFavorito",
    element: <EquipoFavorito /> },

  { path: "/Equipos",
    element: <Equipos /> },

  { path: "/Equiposid",
    element: <Equiposid /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);