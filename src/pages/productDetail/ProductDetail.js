import React, { useState } from "react";
import dummyImg from "../../assets/naruto.jpeg";
import "./ProductDetail.scss";

function ProductDetail() {
  const [cartNumber, setCartNumber] = useState(0);

  return (
    <div className="ProductDetail">
      <div className="container productDetail-container">
        <div className="product-layout">
          <div className="product-img center">
            <img src={dummyImg} alt="product img" />
          </div>

          <div className="product-info">
            <h1 className="title">This is the Title, Wall poster</h1>
            <h3 className="price">₹ 549</h3>
            <p className="description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
              impedit laborum, aut soluta labore beatae recusandae molestiae
              molestias at incidunt iste excepturi quod eveniet perferendis nam
              tempora repellat veritatis maxime?
            </p>
            <div className="cart-option">
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

              <button className="add-to-cart btn-primary">ADD TO CART</button>
            </div>
            <div className="return-policy">
              <ul>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Reiciendis, quo?
                </li>
                <li>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente iste cum sed ut autem molestias?
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
