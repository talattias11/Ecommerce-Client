import {useParams ,Link, Route, Routes } from "react-router-dom";

const products = [
  {id: '101', name: 'apple', price: 5},
  {id: '102', name: 'bannana', price: 10},
  {id: '103', name: 'pear', price: 15}
]

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
      </ul>
    </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Catalog />} />
        <Route path="/products/:id" element={<ProductPage />} />
      </Routes>
    </>
}

function Home() {
  return 'home'
}
function Catalog() {
  const productsListItems = products.map(p => <li>
    <Link to={`/products/${p.id}`}>{p.name}</Link>
  </li>)
  return <>
    <ul>
    {productsListItems}
    </ul>
  </>
}
function ProductPage() {
  const{ id } = useParams();

  const product = products.find(p => p.id === id)

  return <>
    <pre>
      {JSON.stringify(product, null, 2)}
    </pre>
  </>
}
