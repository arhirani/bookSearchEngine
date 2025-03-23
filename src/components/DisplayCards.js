import React from "react";
import DisplayCard from "./DisplayCard";

function DisplayCards({ cards }) {
  return (
    <div className="display-cards">
      {cards.length ? (
        cards.map((card, index) => <DisplayCard key={index} {...{ card }} />)
      ) : (
        <div
          style={{
            background: "#f4f4f4",
            width: "100%",
            textAlign: "center",
            color: "grey",
          }}
        >
          No Books Selected
        </div>
      )}
    </div>
  );
}

export default DisplayCards;
