import React from "react";

function Rating({ value, text, color }) {
  const stars = (value) => {
    let elements = [];

    for (let i = 0; i < 5; i++) {
      elements.push(
        <span key={i}>
          <i
            style={{ color }}
            className={
              value >= 1 + i
                ? "fas fa-star"
                : value >= 0.5 + i
                ? "fas fa-star-half-alt"
                : "far fa-star"
            }
          ></i>
        </span>
      );
    }

    return elements;
  };

  return (
    <div className="rating">
      {stars(value)}

      <span>{text && text}</span>
    </div>
  );
}

export default Rating;
