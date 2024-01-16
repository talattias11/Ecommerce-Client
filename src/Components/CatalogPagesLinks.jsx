import PageLinkBtn from "./PageLinkBtn";

export default function CatalogPagesLinks({ selectedPageNum,
  onPageBtnClick, pagesCount }) {

  const pagesBtns = Array.from({ length: pagesCount }, (_, i) =>
    <PageLinkBtn key={i} pageNum={i + 1}
      onPageBtnClick={onPageBtnClick}
      isSelected={i + 1 === selectedPageNum} />
  );

  return <div className="pages-links">
    {pagesBtns}
  </div>;
}