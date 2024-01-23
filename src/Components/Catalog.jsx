import { useEffect, useState } from "react";
import CatalogPagesLinks from "./CatalogPagesLinks";
import CatalogBoard from "./CatalogBoard";
import { itemsPerPage, apiUrl } from "./constants";
import CatalogControls from "./CatalogControls";

export default function Catalog() {
  const [allProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchedProducts, setSearchedProducts] = useState(allProducts);
  const [curPageNum, setCurPageNum] = useState(1);

  useEffect(() => {
    (async () => {
      const res = await fetch(apiUrl);
      const products = await res.json();
      setAllProducts(products)
      setSearchedProducts(products)
      setIsLoading(false);
    })();
  }, []);

  function handleSearch(str, sortCategory) {
    const filteredList = allProducts.filter(p =>
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

  if (isLoading) return "Loading...";

  const pagesCount = Math.ceil(searchedProducts.length / itemsPerPage);

  return <>
    <CatalogControls handleSearch={handleSearch} />
    <CatalogBoard products={searchedProducts} curPageNum={curPageNum} />
    <CatalogPagesLinks selectedPageNum={curPageNum}
      onPageBtnClick={num => setCurPageNum(num)}
      pagesCount={pagesCount} />
  </>;
}
