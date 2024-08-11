import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Product from "../../components/product/Product";
import "./Collection.scss";
import { useSelector } from "react-redux";
import { axiosClient } from "../../utils/axiosClient";

function Collection() {
  const navigate = useNavigate();
  const params = useParams();

  const [categoryId, setCategoryId] = useState("");
  const [products, setProducts] = useState([]);

  const categories = useSelector((state) => state.categoryReducer.categories);

  const sortOptions = [
    {
      key: "newest-first",
      sort: "createdAt",
      order: "desc",
      value: "Newest First",
    },
    {
      key: "oldest-first",
      sort: "createdAt",
      order: "asc",
      value: "Oldest First",
    },
    {
      key: "price-lth",
      sort: "price",
      order: "asc",
      value: "Price - Low To High",
    },
    {
      key: "price-htl",
      sort: "price",
      order: "desc",
      value: "Price - High To Low",
    },
  ];

  const [sortBy, setSortBy] = useState(sortOptions[0].sort);
  const [sortOrder, setSortOrder] = useState(sortOptions[0].order);

  const url = params.categoryId
    ? `/products?populate=image&filters[category][key][$eq]=${params.categoryId}&sort=${sortBy}:${sortOrder}`
    : `/products?populate=image&sort=${sortBy}:${sortOrder}`;

  async function fetchproducts() {
    const response = await axiosClient.get(url);
    setProducts(response.data.data);
  }

  useEffect(() => {
    setCategoryId(params.categoryId);
    fetchproducts();
  }, [params, sortBy, sortOrder]);

  function updateCategory(e) {
    navigate(`/category/${e.target.value}`);
  }

  function handleSortChange(e) {
    const sortValue = sortOptions.find((item) => e.target.value === item.key);
    setSortBy(sortValue.sort);
    setSortOrder(sortValue.order);
  }

  return (
    <div className="Categories">
      <div className="container">
        <div className="header">
          <div className="info">
            <h3>Explore All Print and Artwork</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
              explicabo in minima nostrum fugiat neque eius vitae vero aperiam
              quis? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Expedita explicabo.
            </p>
          </div>

          <div className="sort-by">
            <div className="sort-by-container">
              <h3 className="sort-by-text">Sort By</h3>
              <select
                name="sort-by"
                id="sort-by"
                // defaultValue={"Relavance"}
                onChange={handleSortChange}
              >
                {sortOptions.map((item) => (
                  <option key={item.value} value={item.key}>
                    {item.value}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="filter-box">
            <div className="category-filter">
              <h3>Category</h3>
              {categories.map((item) => (
                <div key={item.id} className="filter-radio">
                  <input
                    type="radio"
                    name="category"
                    id={item.id}
                    value={item.attributes.key}
                    checked={item.attributes.key === categoryId}
                    onChange={updateCategory}
                  />
                  <label htmlFor={item.id}>{item.attributes.title}</label>
                </div>
              ))}
            </div>
          </div>
          <div className="product-box">
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;
