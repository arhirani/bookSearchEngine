import React from "react";

function DisplayTitles({ results, setTitle }) {
  return (
    <div className="display-titles">
      {results.map((result, index) => (
        <div
          onClick={() => setTitle(result)}
          key={index}
          className="display-title"
        >
          {result.title}
        </div>
      ))}
    </div>
  );
}

export default DisplayTitles;
