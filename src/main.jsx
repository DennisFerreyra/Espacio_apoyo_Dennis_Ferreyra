import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {EquipoFavorito} from "./Pages/EquipoFavorito";
import {Equipos} from "./Pages/Equipos";
import {Equiposid} from "./Pages/Equiposid";
import { Home } from "./Pages/Home";

const router = createBrowserRouter([
  { path: "/home", 
    element: <Home /> },

  { path: "/equipoFavorito",
    element: <EquipoFavorito /> },

  { path: "/equipos",
    element: <Equipos /> },

  { path: "/equiposid/:id",
    element: <Equiposid /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);