export default function PageLinkBtn({ pageNum,
  onPageBtnClick, isSelected }) {
  const buttonClasses = isSelected ?
    'page-button page-button-selected' : 'page-button';

  return <button className={buttonClasses}
    onClick={() => onPageBtnClick(pageNum)}>
    {pageNum}
  </button>;
}