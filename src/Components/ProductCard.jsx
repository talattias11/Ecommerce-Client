import { Link } from "react-router-dom"

export default function ProductCard({product}) {

  return <div className="product-card">
      <Link to={`/products/${product.id}`}>
        <h2>{product.name}</h2>
      </Link>
      <p>{product.price}</p>
    </div>
}
