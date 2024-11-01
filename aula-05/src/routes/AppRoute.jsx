import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Empresa from "../pages/Empresa";
import Contato from "../pages/Contato";
import Sobre from "../pages/Sobre";
import Error from "../pages/Error";
import Cliente from "../pages/Cliente";

export default function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/empresa" element={<Empresa />}></Route>
      <Route path="/contato" element={<Contato />}></Route>
      <Route path="/sobre" element={<Sobre />}></Route>
      <Route path="/cliente/:id" element={<Cliente />}></Route>
      <Route path="/*" element={<Error />}></Route>
    </Routes>
  );
}
