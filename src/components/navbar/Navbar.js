import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import "./Navbar.scss";
import Cart from "../cart/Cart";
import { useSelector } from "react-redux";

function Navbar() {
  const categories = useSelector((state) => state.categoryReducer.categories);
  const cart = useSelector((state) => state.cartReducer.cart);
  const [openCart, setOpenCart] = useState(false);

  let totalItem = 0;
  cart.forEach((item) => (totalItem += item.quantity));

  return (
    <>
      <nav className="Navbar">
        <div className="container nav-container">
          <div className="nav-left center">
            <ul className="link-group">
              {categories?.map((category) => (
                <li className="hover-link" key={category.id}>
                  <Link
                    className="link"
                    to={`/category/${category.attributes.key}`}
                  >
                    {category.attributes.title}
                  </Link>{" "}
                </li>
              ))}
            </ul>
          </div>
          <div className="nav-center">
            <Link to={"/"}>
              <h1 className="banner">Posterz.</h1>
            </Link>
          </div>
          <div className="nav-right hover-link">
            <div className="nav-cart" onClick={() => setOpenCart(!openCart)}>
              <IoCartOutline className="cart-icon" />
              {totalItem > 0 && (
                <span className="cart-count center">{totalItem}</span>
              )}
            </div>
          </div>
        </div>
      </nav>

      {openCart && <Cart onClose={() => setOpenCart(false)} />}
    </>
  );
}

export default Navbar;
