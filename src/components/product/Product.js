import React from "react";
import { useNavigate } from "react-router-dom";
import dummyImg from "../../assets/naruto.jpeg";
import "./Product.scss";

function Product({ product }) {
  const navigate = useNavigate();

  function goToProductDetail() {
    navigate(`/products/${product?.attributes.key}`);
  }

  return (
    <div className="Product">
      <div className="product-container">
        <div className="product-img" onClick={goToProductDetail}>
          <div className="img-container">
            <img
              src={product?.attributes?.image?.data?.attributes?.url}
              alt={product?.attributes?.title}
            />
          </div>
        </div>

        <div className="product-info">
          <p className="title" onClick={goToProductDetail}>
            {product?.attributes?.title}
          </p>
          <p className="price">₹ {product?.attributes?.price}</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
