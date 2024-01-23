import { useParams } from "react-router-dom";
import { products } from "../products";

export default function ProductPage() {
  const { id } = useParams();

  const product = products.find(p => p.id === id);

  return <>
    <pre>{JSON.stringify(product, null, 2)}</pre>
  </>;
}