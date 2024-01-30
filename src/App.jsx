import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Catalog from "./Components/Catalog";
import Users from "./Components/Users";
import ProductPage from "./Components/ProductPage";
import Navbar from "./Components/Navbar";
import LocalSorageDemo from "./Components/LocalStorageDemo";


export default function App() {
  return <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<Catalog />} />
      <Route path='/products/:id' element={<ProductPage />} />
      <Route path='/storage' element={<LocalSorageDemo />} />
      <Route path='/users' element={<Users />} />
    </Routes>
  </>;
}