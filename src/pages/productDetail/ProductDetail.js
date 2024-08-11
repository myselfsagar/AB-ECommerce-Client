import React, { useEffect, useState } from "react";
import dummyImg from "../../assets/naruto.jpeg";
import "./ProductDetail.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { axiosClient } from "../../utils/axiosClient";
import Loader from "../../components/loader/Loader";
import { addToCart, removeFromCart } from "../redux/slices/cartSlice";

function ProductDetail() {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const cart = useSelector((state) => state.cartReducer.cart);
  const quantity =
    cart.find((item) => item.key === params.productId)?.quantity || 0;

  async function fetchData() {
    const productResponse = await axiosClient.get(
      `/products?filters[key][$eq]=${params.productId}&populate=image`
    );
    if (productResponse.data.data.length > 0) {
      setProduct(productResponse.data.data[0]);
    }
  }

  useEffect(() => {
    setProduct(null);
    fetchData();
  }, [params]);

  if (!product) {
    return <Loader />;
  }

  return (
    <div className="ProductDetail">
      <div className="container productDetail-container">
        <div className="product-layout">
          <div className="product-img center">
            <img
              src={product?.attributes.image?.data.attributes.url}
              alt="product img"
            />
          </div>

          <div className="product-info">
            <h1 className="title">{product?.attributes.title}</h1>
            <h3 className="price">₹ {product?.attributes.price}</h3>
            <p className="description">{product?.attributes.desc}</p>
            <div className="cart-option">
              <div className="quantity-selector center">
                <span
                  className="btn decrement"
                  onClick={() => dispatch(removeFromCart(product))}
                >
                  -
                </span>
                <span className="quantity">{quantity}</span>
                <span
                  className="btn increment"
                  onClick={() => dispatch(addToCart(product))}
                >
                  +
                </span>
              </div>

              <button
                className="add-to-cart btn-primary"
                onClick={() => dispatch(addToCart(product))}
              >
                ADD TO CART
              </button>
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
