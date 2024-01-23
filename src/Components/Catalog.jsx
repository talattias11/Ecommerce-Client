import { useState } from "react";
import { products } from "../products";
import CatalogPagesLinks from "./CatalogPagesLinks";
import CatalogBoard from "./CatalogBoard";
import { itemsPerPage } from "./constants";
import CatalogControls from "./CatalogControls";

export default function Catalog() {
  const [searchedProducts, setSearchedProducts] = useState(products);
  const [curPageNum, setCurPageNum] = useState(1);

  function handleSearch(str, sortCategory) {
    const filteredList = products.filter(p =>
      p.name.includes(str));

    switch (sortCategory) {
      case 'name':
        filteredList.sort((p1, p2) => p1.name.localeCompare(p2.name));
        break;
      case 'price':
        filteredList.sort((p1, p2) => p1.price - p2.price);
        break;
    }

    setSearchedProducts(filteredList);
    setCurPageNum(1);
  }

  const pagesCount = Math.ceil(searchedProducts.length / itemsPerPage);

  return <>
    <CatalogControls handleSearch={handleSearch} />
    <CatalogBoard products={searchedProducts} curPageNum={curPageNum} />
    <CatalogPagesLinks selectedPageNum={curPageNum}
      onPageBtnClick={num => setCurPageNum(num)}
      pagesCount={pagesCount} />
  </>;
}
