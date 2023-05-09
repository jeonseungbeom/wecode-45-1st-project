import React, { useState } from 'react';
import AddCart from './AddCart';
import './ProductCalculation.scss';

const ProductCalculation = ({ id, price, food }) => {
  const [count, setCount] = useState(1);

  const cost = Math.floor(price);

  const handleCount = num => {
    if (count + num === 0) return;
    setCount(prev => prev + num);
  };

  return (
    <div className="product-calculation">
      <div className="product-choice">
        <p className="product-choice-text">상품선택</p>
        <div className="calculation-box">
          <p className="product-choice-food">{food}</p>
          <div className="count-box">
            <div className="product-count">
              <div className="count-btn-box">
                <button className="count-btn" onClick={() => handleCount(-1)}>
                  &minus;
                </button>
                <span className="quantity">{count}</span>
                <button className="count-btn" onClick={() => handleCount(1)}>
                  +
                </button>
              </div>
            </div>
            <span className="count-price">{cost} 원</span>
          </div>
        </div>
      </div>
      <AddCart id={id} cost={cost} count={count} />
    </div>
  );
};

export default ProductCalculation;
