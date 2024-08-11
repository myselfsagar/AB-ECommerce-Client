import React from "react";
import { IoClose } from "react-icons/io5";
import { BsCartX } from "react-icons/bs";
import "./Cart.scss";
import CartItem from "../cartItem/CartItem";
import { useSelector } from "react-redux";

function Cart({ onClose }) {
  const cart = useSelector((state) => state.cartReducer.cart);
  let totalAmount = 0;
  cart.forEach((item) => (totalAmount += item.quantity * item.price));
  const isCartEmpty = cart.length === 0;

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
          {cart.map((item) => (
            <CartItem key={item.key} cart={item} />
          ))}
        </div>

        {isCartEmpty ? (
          <div className="empty-cart-info">
            <div className="empty-cart-icon">
              <BsCartX />
            </div>
            <h3>Your cart is empty!</h3>
            <p>Explore our wide selection and find something you like</p>
          </div>
        ) : (
          <div className="checkout-info">
            <div className="total-amount">
              <h4 className="total-message">Total</h4>
              <h4 className="total-value">₹ {totalAmount}</h4>
            </div>

            <div className="proceed-to-checkout btn-primary">
              Proceed To Checkout
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
