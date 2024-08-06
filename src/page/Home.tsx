import React, { useState } from "react";
import { Product } from "../interfaces/Product";
import { Link } from "react-router-dom";

type Props = {
  products: Product[];
};

const Home = ({ products }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  // Get unique categories from products
  const categories = Array.from(
    new Set(products.map((product) => product.category))
  );

  // Filter products based on selected category
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div>
      <div className="mb-3">
        <label htmlFor="category-select" className="form-label">
          Filter by Category:
        </label>
        <select
          id="category-select"
          className="form-select"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="row justify-between">
        {filteredProducts.map((item) => (
          <div
            className="col-12 col-sm-6 col-md-4 col-lg-3 p-2 card"
            key={item.id}
          >
            <Link to={`/product-detail/${item.id}`}>
              <img src={item.image} alt={item.title} />
            </Link>
            <div className="content mb-2 p-2">
              <Link to={`/product-detail/${item.id}`}>
                <h2 className="fs-4 fw-bold">{item.title}</h2>
              </Link>
              <p className="text-danger">Gia: {item.price}</p>
              <p>{item.description}</p>
              <p>Danh muc: {item.category}</p>
              <button className="btn btn-danger">Xem chi tiet</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
