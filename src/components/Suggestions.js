import React from "react";

function Suggestions({ suggestions, onSuggestionsChange }) {
  return (
    <div className="suggestions">
      <h3>Suggestions : </h3>
      <input
        type="number"
        className="suggestion-input"
        value={suggestions}
        onChange={onSuggestionsChange}
      />
    </div>
  );
}

export default Suggestions;
