import { Link, Route, Routes } from "react-router-dom";

export default function App() {
  return <>
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/products'>Catalog</Link>
        </li>
        <li>
          <Link to='/'>Home</Link>
        </li>
      </ul>
    </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Catalog />} />
        <Route path="/products/:id" element={<ProductPage />} />
      </Routes>
    </>
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
