import { useState } from "react";
import { products } from "../products";
import ProductCard from "./ProductCard";
import CatalogPagesLinks from "./CatalogPagesLinks";

const itemsPerPage = 6;
const pagesCount = Math.ceil(products.length / itemsPerPage);

export default function Catalog() {
  const [curPageNum, setCurPageNum] = useState(1);

  const cards = getPageCards(curPageNum);

  return <>
    <CatalogBoard cards={cards} />
    <CatalogPagesLinks selectedPageNum={curPageNum}
      onPageBtnClick={num => setCurPageNum(num)}
      pagesCount={pagesCount} />
  </>;
}

function getPageCards(pageNum) {
  const firstproductIndex =
    (pageNum - 1) * itemsPerPage;
  
  const pageProducts = products.slice(firstproductIndex,
    firstproductIndex + itemsPerPage)

  return pageProducts.map(p =>
    <ProductCard key={p.id} product={p} />);
}

function CatalogBoard({ cards }) {
  return <div className="catalog-board">
    {cards}
  </div>
}