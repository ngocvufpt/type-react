import { useParams, Link } from "react-router-dom";
import { Icategory, Product } from "../interfaces/Product";
import { useState } from "react";

type Props = {
  categories: Icategory[];
  products: Product[];
};

const TempleDetail = ({ categories, products }: Props) => {
  const { id } = useParams(); // Lấy ID của danh mục từ tham số URL

  const productsById = products.filter((e) => e.category === id);

  console.log("Category ID:", id); // Debugging log
  console.log("Filtered Products:", productsById);

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
            {categories.map((item) => (
              <div key={item.id} className="col-3 categorys">
                <Link
                  to={`/templeDetail/${item.name}`}
                  className="text-dark fw-bold"
                >
                  <i className="fa-brands fa-apple"></i>
                  {item.name}
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
              {productsById.length > 0 ? (
                productsById.map((product) => (
                  <div key={product.id} className="product ">
                    <Link to={`/product-detail/${product.id}`}>
                      <img
                        className="img-sale"
                        src={product.image}
                        alt={product.name}
                      />
                    </Link>
                    <div className="product lefff">
                      <p>{product.title}</p>

                      <p>
                        ${product.price} <span>${product.price}</span>
                      </p>
                    </div>
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
                {categories.map((item) => (
                  <li key={item.id}>
                    <input type="checkbox" />
                    {item.name}
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
};

export default TempleDetail;
