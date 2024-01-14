import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Catalog />} />
        <Route path="/products/:id" element={<ProductPage />} />
      </Routes>
    </>
  );
}

function Home(params) {
  return 'home'
}
function Catalog(params) {
  return 'catalog'
}
function ProductPage() {
  return 'product page'
}
