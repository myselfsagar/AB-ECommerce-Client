import React from "react";
import dummyImg from "../../assets/naruto.jpeg";
import "./Product.scss";

function Product() {
  return (
    <div className="Product">
      <div className="product-container">
        <div className="product-img">
          <div className="img-container">
            <img src={dummyImg} alt="dummyImg" />
          </div>
        </div>

        <div className="product-info">
          <p className="title">Lorem ipsum dolor sit amet</p>
          <p className="price">₹199</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
