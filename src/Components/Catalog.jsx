import { useState } from "react";
import { products } from "../products";
import ProductCard from "./ProductCard";
import CatalogPagesLinks from "./CatalogPagesLinks";

const itemsPerPage = 6;
const pagesCount = Math.ceil(products.length / itemsPerPage);

export default function Catalog() {
  const [curPageNum, setCurPageNum] = useState(1);

  const firstIndex = (curPageNum - 1) * itemsPerPage;
  const secondIndex = firstIndex + itemsPerPage;

  const productsCards =
    products.slice(firstIndex, secondIndex)
      .map(p => <ProductCard key={p.id} product={p} />);

  return <>
    <div className="catalog-board">
      {productsCards}
    </div>
    <CatalogPagesLinks selectedPageNum={curPageNum}
      onPageBtnClick={num => setCurPageNum(num)}
      pagesCount={pagesCount} />
  </>;
}