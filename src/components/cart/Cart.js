import React from "react";
import { IoClose } from "react-icons/io5";
import "./Cart.scss";
import CartItem from "../cartItem/CartItem";

function Cart({ onClose }) {
  return (
    <div className="Cart">
      <div className="overlay" onClick={onClose}></div>
      <div className="cart-content">
        <div className="header">
          <h2>Shopping Cart</h2>
          <div className="close-btn center" onClick={onClose}>
            <IoClose /> Close
          </div>
        </div>

        <div className="cartItem">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>

        <div className="checkout-info">
          <div className="total-amount">
            <h4 className="total-message">Total</h4>
            <h4 className="total-value">₹ 999</h4>
          </div>

          <div className="proceed-to-checkout btn-primary">
            Proceed To Checkout
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
