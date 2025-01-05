import React, { useState } from "react";
import './ItemCount.css';

export default function ItemCount({ stock, initial, onAddToCart }) {
  const [count, setCount] = useState(initial);

  const addProduct = (num) => {
    setCount(prevCount => Math.max(0, Math.min(prevCount + num, stock)));
  };

  return (
    <div className="count-container">
      <div className="count-container__contador">
        <button
          className="count-container__button"
          onClick={() => addProduct(-1)}
          disabled={count === initial}
          aria-label="Decrease quantity"
        >
          -
        </button>
        <span className="count-container__count">{count}</span>
        <button
          className="count-container__button"
          onClick={() => addProduct(1)}
          disabled={count === stock}
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>
      <div className="buttons">
        <button
          type="button"
          className="add-to-cart"
          onClick={() => onAddToCart(count)}
          aria-label="Add to cart"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

  
