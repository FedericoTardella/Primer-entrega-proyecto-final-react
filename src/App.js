import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import BodyPrincipal from "./components/BodyPrincipal";
import Footer from "./components/Footer";
import ItemCount from "./components/ItemCount";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/ItemListContainer"
          element={<ItemListContainer greeting={"¡Hola, bienvenido a Lucero Mates!"} />}
        />
        <Route path="/BodyPrincipal" element={<BodyPrincipal />} />
        <Route path="/ItemCount" element={<ItemCount />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
