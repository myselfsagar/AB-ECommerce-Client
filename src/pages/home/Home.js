import React, { useEffect, useState } from "react";
import Hero from "../../components/hero/Hero";
import "./Home.scss";
import Category from "../../components/category/Category";
import Product from "../../components/product/Product";
import { axiosClient } from "../../utils/axiosClient";
import { useSelector } from "react-redux";

function Home() {
  const categories = useSelector((state) => state.categoryReducer.categories);

  const [topProducts, setTopProducts] = useState(null);

  async function fetchData() {
    const topProductResponse = await axiosClient.get(
      "/products?filters[isTopPick][$eq]=true&populate=image"
    );

    setTopProducts(topProductResponse.data.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Hero />

      <section className="collection container">
        <div className="info">
          <h2 className="heading">Shop By Category</h2>
          <p className="subheading">
            Shop from the best, our Film and TV poster collection
          </p>
        </div>

        <div className="content">
          {categories?.map((category) => (
            <Category key={category.id} category={category} />
          ))}
        </div>
      </section>

      <section className="collection container">
        <div className="info">
          <h2 className="heading">Our Top Picks</h2>
          <p className="subheading">All New Designs, Same Old Details</p>
        </div>

        <div className="content">
          {topProducts?.map((topProduct) => (
            <Product key={topProduct.id} product={topProduct} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
