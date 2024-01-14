import { useState } from "react"
import {products} from "../products"
import ProductCard from "./ProductCard"

const itemsPerPage = 6;

export default function Catalog() {
  const [curPageNum , setCurPageNum] = useState(1)

  const firstIndex = (curPageNum-1) * itemsPerPage;
  const seconedIndex = firstIndex + itemsPerPage;
  
  const productsCards = products.slice(firstIndex, seconedIndex).map(p => 
  <ProductCard key={p.id} product={p}/>)

  return <div className="catalog-board">
      <ul>{productsCards}</ul>
      </div>
  }
