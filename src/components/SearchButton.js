import React from "react";

function SearchButton({ query, handleSubmit }) {
  return (
    <button
      type="submit"
      onClick={handleSubmit}
      className="search-button"
      disabled={query.length ? false : true}
    >
      Search
    </button>
  );
}

export default SearchButton;
