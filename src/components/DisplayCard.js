import React from "react";

function DisplayCard({ card, index }) {
  return (
    <div className="display-card" key={index}>
      <div className="card-title">{card.title}</div>
      <div className="card-author">{card.author}</div>
      <div className="card-summary">{card.summary}</div>
    </div>
  );
}

export default DisplayCard;
