import { sortCategories } from "./constants";
import { useState } from "react";

export default function CatalogControls({ handleSearch }) {
  const [inputVal, setInputVal] = useState('');
  const [selectedSortOption, setSelectedSortOption] = useState('');
  
  const sortOptions = ['', ...sortCategories]
    .map(c => <option key={c} value={c}>
      {c}
    </option>);

  return <div className="catalog-board-controls">
    <input type="text" value={inputVal}
      onChange={e => setInputVal(e.target.value)} />
    <select value={selectedSortOption}
      onChange={e => setSelectedSortOption(e.target.value)}>
      {sortOptions}
    </select>

    <button onClick={() => handleSearch(inputVal, selectedSortOption)}>
      search
    </button>
  </div>
}