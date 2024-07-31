import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import "./Navbar.scss";
import Cart from "../cart/Cart";

function Navbar() {
  const [openCart, setOpenCart] = useState(false);

  return (
    <>
      <nav className="Navbar">
        <div className="container nav-container">
          <div className="nav-left center">
            <ul className="link-group">
              <li className="hover-link">
                <Link className="link" to={"/products?category=comic"}>
                  Comics
                </Link>{" "}
              </li>
              <li className="hover-link">
                <Link className="link" to={"/products?category=tvshow"}>
                  TV shows
                </Link>
              </li>
              <li className="hover-link">
                <Link className="link" to={"/products?category=sports"}>
                  Sports
                </Link>
              </li>
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
              <span className="cart-count center">9</span>
            </div>
          </div>
        </div>
      </nav>

      {openCart && <Cart onClose={() => setOpenCart(false)} />}
    </>
  );
}

export default Navbar;
