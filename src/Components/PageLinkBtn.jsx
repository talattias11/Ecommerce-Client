export default function PageLinkBtn({ pageNum, onPageBtnClick, isSelected }) {
    const buttonStyle = { backgroundColor: isSelected ? 'red' : '' };
  
    return <button style={buttonStyle}
      onClick={() => onPageBtnClick(pageNum)}>
      {pageNum}
    </button>;
  }