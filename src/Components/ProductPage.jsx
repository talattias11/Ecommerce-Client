import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiUrl } from "./constants";

export default function ProductPage() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const res = await fetch(`${apiUrl}/${id}`)
      const data = await res.json();
      setProduct(data);
      setIsLoading(false);
    })();
  }, [])

  if (isLoading) return 'Loading...';

  return <>
    <pre>{JSON.stringify(product, null, 2)}</pre>
  </>;
}