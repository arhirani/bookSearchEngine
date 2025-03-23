import React from "react";
import DisplayTitles from "./DisplayTitles";

function SearchContainer({
  inputQuery,
  query,
  onQueryChange,
  results,
  setTitle,
  display,
}) {
  return (
    <div className="search-container">
      <input
        type="text"
        ref={inputQuery}
        value={query}
        className="search-input"
        onChange={onQueryChange}
        placeholder="Search books by summaries"
      />
      {display && results && <DisplayTitles {...{ results, setTitle }} />}
    </div>
  );
}

export default SearchContainer;
