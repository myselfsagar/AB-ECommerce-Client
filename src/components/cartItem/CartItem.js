import React from "react";
import { IoClose } from "react-icons/io5";

import "./CartItem.scss";
import { useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  resetCart,
} from "../../redux/slices/cartSlice";

function CartItem({ cart }) {
  const dispatch = useDispatch();

  return (
    <div className="CartItem">
      <div className="item-img">
        <img src={cart.image} alt="product img" />
      </div>

      <div className="item-info-wrapper">
        <div className="item-info">
          <p className="title">{cart.title}</p>
          <p className="price">₹ {cart.price}</p>
          <div className="quantity-selector center">
            <span
              className="btn decrement"
              onClick={() => dispatch(removeFromCart(cart))}
            >
              -
            </span>
            <span className="quantity">{cart.quantity}</span>
            <span
              className="btn increment"
              onClick={() => dispatch(addToCart(cart))}
            >
              +
            </span>
          </div>
          <p className="total-price">
            Subtotal: ₹ {cart.quantity * cart.price}
          </p>
        </div>

        <div className="item-remove">
          <IoClose onClick={() => dispatch(resetCart(cart))} />
        </div>
      </div>
    </div>
  );
}

export default CartItem;
