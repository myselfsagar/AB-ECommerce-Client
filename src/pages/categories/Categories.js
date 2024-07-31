import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Product from "../../components/product/Product";
import "./Categories.scss";

function Categories() {
  const navigate = useNavigate();
  const params = useParams();

  const [categoryId, setCategoryId] = useState("");

  const categoryList = [
    {
      id: "comics",
      value: "Comics",
    },
    {
      id: "tv-shows",
      value: "TV Shows",
    },
    {
      id: "sports",
      value: "Sports",
    },
  ];

  useEffect(() => {
    setCategoryId(params.categoryId);
    //api call
  }, [params]);

  function updateCategory(e) {
    navigate(`/category/${e.target.value}`);
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
              <select name="sort-by" id="sort-by">
                <option value="Relavance" selected>
                  Relavance
                </option>
                <option value="newest-first">Newest First</option>
                <option value="oldest-first">Oldest First</option>
                <option value="price-lth">Price - Low To High</option>
                <option value="price-htl">Price - High To Low</option>
              </select>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="filter-box">
            <div className="category-filter">
              <h3>Category</h3>
              {categoryList.map((item) => (
                <div key={item.id} className="filter-radio">
                  <input
                    type="radio"
                    name="category"
                    id={item.id}
                    value={item.id}
                    checked={item.id === categoryId}
                    onChange={updateCategory}
                  />
                  <label htmlFor={item.id}>{item.value}</label>
                </div>
              ))}
            </div>
          </div>
          <div className="product-box">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
