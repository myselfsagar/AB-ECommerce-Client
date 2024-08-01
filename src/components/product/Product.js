import React from "react";
import { useNavigate } from "react-router-dom";
import dummyImg from "../../assets/naruto.jpeg";
import "./Product.scss";

function Product() {
  const navigate = useNavigate();

  return (
    <div className="Product" onClick={() => navigate("/products/gsgg")}>
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
