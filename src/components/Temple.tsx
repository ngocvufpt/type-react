import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Icategory, Product } from "../interfaces/Product";
import instance from "../services";
import "./hover.css";

export default function Temple() {
  const [categories, setCategories] = useState<Icategory[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    (async () => {
      const { data } = await instance.get("/products");
      setProducts(data);
    })();
  }, []);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  useEffect(() => {
    // Fetch categories
    (async () => {
      const { data } = await instance.get(`/category`);
      setCategories(data);
    })();
  }, []);

  useEffect(() => {
    if (selectedCategory !== null) {
      // Fetch products based on selected category
      (async () => {
        const { data } = await instance.get(
          `/products?category=${selectedCategory}`
        );
        setProducts(data);
      })();
    }
  }, [selectedCategory]);

  return (
    <div>
      <div className="mymain">
        <div className="container">
          <div className="title">
            <h4>Töpfe & Behälter</h4>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="categoryyy">
          <div className="row category">
            {categories.map((category) => (
              <div
                key={category.id}
                className="col-3 categorys"
                onClick={() => setSelectedCategory(Number(category.id))}
              >
                <Link
                  to={`/templeDetail/${category.name}`}
                  className="text-dark fw-bold"
                >
                  <i className="fa-brands fa-apple"></i>
                  {category.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row my-3">
          <div className="col-6 select">
            <label>Sort By :</label>
            <select>
              <option>Newest</option>
              <option>Price</option>
            </select>
          </div>
          <div className="col-6">
            <label>Show :</label>
            <select>
              <option>Default</option>
              <option>Best Selling</option>
            </select>
          </div>
        </div>
        <main className="main-content">
          <div className="product-list">
            <div className="products">
              {products.length > 0 ? (
                products.map((product) => (
                  <div key={product.id} className="product">
                    <Link to={`/product-detail/${product.id}`}>
                      <img
                        className="img-sale"
                        src={product.image}
                        alt={product.name}
                      />
                    </Link>
                    <p>{product.title}</p>

                    <p>
                      ${product.price} <span>${product.price}</span>
                    </p>
                  </div>
                ))
              ) : (
                <p>No products available for this category</p>
              )}
            </div>
          </div>
          <aside className="sidebar">
            <div className="categories-filter">
              <h2>Kategorien</h2>
              <ul>
                {categories.map((category) => (
                  <li key={category.id}>
                    <input type="checkbox" />
                    {category.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="ad">
              <img src="/public/img/sideba.png" alt="Ad" className="img-sbar" />
              <h5 className="text-sbar">Grow your own favourite plant</h5>
              <p className="sbar">
                Shop Now <i className="fa-solid fa-circle-right"></i>
              </p>
            </div>
            <div className="filter">
              <h2>Filter By Price</h2>
              <input type="range" min="0" max="8000" />
              <p>From $0 to $8000</p>
            </div>
            <div className="filter">
              <h2>Filter By Size</h2>
              <input type="range" min="2" max="50" />
              <p>2 mm by 50</p>
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
}
