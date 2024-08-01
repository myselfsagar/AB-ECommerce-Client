import React, { useState } from "react";
import dummyImg from "../../assets/naruto.jpeg";
import { IoClose } from "react-icons/io5";

import "./CartItem.scss";

function CartItem() {
  const [cartNumber, setCartNumber] = useState(0);

  return (
    <div className="CartItem">
      <div className="item-img">
        <img src={dummyImg} alt="product img" />
      </div>

      <div className="item-info-wrapper">
        <div className="item-info">
          <p className="title">Product Title</p>
          <p className="price">₹ 199</p>
          <div className="quantity-selector center">
            <span
              className="btn decrement"
              onClick={() => {
                cartNumber > 0 && setCartNumber(cartNumber - 1);
              }}
            >
              -
            </span>
            <span className="quantity">{cartNumber}</span>
            <span
              className="btn increment"
              onClick={() => setCartNumber(cartNumber + 1)}
            >
              +
            </span>
          </div>
          <p className="total-price">Subtotal: ₹ 499</p>
        </div>

        <div className="item-remove">
          <IoClose />
        </div>
      </div>
    </div>
  );
}

export default CartItem;
