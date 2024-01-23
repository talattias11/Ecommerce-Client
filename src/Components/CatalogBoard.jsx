import ProductCard from "./ProductCard";
import { itemsPerPage } from "./constants";

export default function CatalogBoard({ products, curPageNum }) {
  const cards = getPageCards(curPageNum, products);

  return <div className="catalog-board">
    {cards}
  </div>
}

function getPageCards(pageNum, allProducts) {
  const firstproductIndex =
    (pageNum - 1) * itemsPerPage;

  const pageProducts = allProducts.slice(firstproductIndex,
    firstproductIndex + itemsPerPage)

  return pageProducts.map(p =>
    <ProductCard key={p.id} product={p} />);
}