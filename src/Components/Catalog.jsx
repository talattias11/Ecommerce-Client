import { Link } from "react-router-dom"
import {products} from "../products"

export default function Catalog() {
    const productsListItems = products.map(p => <li key={p.id}>
      <Link to={`/products/${p.id}`}>{p.name}</Link>
    </li>)
    return <>
      <ul>
      {productsListItems}
      </ul>
    </>
  }