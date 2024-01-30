import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return <div className="product-card">
    <Link to={`/products/${product.id}`}>
      <h3>{product.name}</h3>
    </Link>
    <p>$ {product.price}</p>
  </div>
}