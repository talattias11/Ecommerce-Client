import {Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Catalog from "./Components/Catalog";
import Navbar from "./Components/NavBar";
import ProductPage from "./Components/ProductPage"

export default function App() {
  return <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Catalog />} />
        <Route path="/products/:id" element={<ProductPage />} />
      </Routes>
    </>
}