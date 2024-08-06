import { useEffect, useState } from "react";
import { Icategory, Product } from "../interfaces/Product";
import intance from "../services";
import { Link } from "react-router-dom";

export default function Main() {
  const [categories, setCategories] = useState<Icategory[]>([]);
  useEffect(() => {
    (async () => {
      const { data } = await intance.get("category");
      setCategories(data);
    })();
  }, []);
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    (async () => {
      const { data } = await intance.get("products");
      setProducts(data);
    })();
  }, []);
  return (
    <section>
      <section className="slider mb-3">
        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="/public/img/slide1.png"
                className="d-block w-100"
                alt="..."
              />
              <div>
                <div className="carousel-caption">
                  <h1>Wir kümmern uns um Ihre schöner Garten und Haus</h1>
                  <p className="text-carol">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>
                  <button className="btn-carol ">Lern mehr</button>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <img
                src="/public/img/165657-0101-co-lan-chi-day-nhen-min.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="/img/dich-vu-cham-soc-cay-xanh-san-vuon-don-ve-sinh-san-vuon.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      <div className="title mb-4 ">
        <h3 className="fs-3">Bestseller</h3>
      </div>
      <hr className="my-3 text-dark" />
      <div className="box2">
        {products.map((product) => (
          <a key={product.id}>
            <Link to={`/product-detail/${product.id}`}>
              <img src={product.image} alt={product.title} />
              <p className=" ">{product.title}</p>
              <div className="price">
                <span style={{ fontSize: "0.8vw" }}>
                  {product.category}
                  <b style={{ fontSize: "0.8vw", paddingLeft: "100px" }}>
                    $ {product.price}
                  </b>
                </span>
              </div>
            </Link>
          </a>
        ))}
      </div>

      <div className="row cate py-4">
        <div className="col-6 left ">
          <img src="/public/img/cate1.png" alt="" />
          <h2 className="text-top">Garten Spaten</h2>
        </div>
        <div className="col-6">
          <div className="row">
            <div className="col-6">
              <img src="/public/img/cate2.png" alt="" className="imgcol1" />
              <h3 className="text-top2">Sand</h3>
              <img src="/public/img/cate3.png" alt="" className="imgcol2" />
              <h3 className="text-top3">Pflanzer</h3>
            </div>
            <div className="col-6">
              <img src="/public/img/cate4.png" alt="" className="imgcol3" />
              <h3 className="text-top4">Schlammkuchen</h3>
              <img src="/public/img/cate5.png" alt="" className="imgcol4" />
              <h3 className="text-top5">Klemmen</h3>
            </div>
          </div>
          <div className="row"></div>
        </div>
      </div>
      <section className="Kategorien">
        <div className="cate-list mb-3">
          <div className="title mb-4 ">
            <h3 className="fs-3">Kategorien</h3>
          </div>
          <hr className="my-3 text-dark" />
          <div className="product-list-s my-3">
            <div className="row mx-1">
              <div className="col-md-3 mb-3 ">
                <img src="/public/img/kategori1.png" className="kate" alt="" />

                <h5 className="kate-text">Beleuchtung</h5>
                <p className="kate-item">30 items</p>
              </div>
              <div className="col-md-3 mb-3 ">
                <img src="/public/img/kategori2.png" className="kate" alt="" />
                <h5 className="kate-text">Beleuchtung</h5>
                <p className="kate-item">30 items</p>
              </div>
              <div className="col-md-3 mb-3 ">
                <img src="/public/img/kategori3.png" className="kate" alt="" />
                <h5 className="kate-text">Beleuchtung</h5>
                <p className="kate-item">30 items</p>
              </div>
              <div className="col-md-3 mb-3 ">
                <img src="/public/img/kategori4.png" className="kate" alt="" />
                <h5 className="kate-text">Beleuchtung</h5>
                <p className="kate-item">30 items</p>
              </div>
            </div>
            <div className="row mx-2">
              <div className="col-md-3 mb-3 ">
                <img src="/public/img/kategori6.png" className="kate" alt="" />
                <h5 className="kate-down">Beleuchtung</h5>
                <p className="kate-down">30 items</p>
              </div>
              <div className="col-md-3 mb-3 ">
                <img src="/public/img/kategori5.png" className="kate" alt="" />
                <h5 className="kate-down">Beleuchtung</h5>
                <p className="kate-down">30 items</p>
              </div>
              <div className="col-md-3 mb-3 ">
                <img src="/public/img/kategori7.png" className="kate" alt="" />
                <h5 className="kate-down">Beleuchtung</h5>
                <p className="kate-down">30 items</p>
              </div>
              <div className="col-md-3 mb-3 ">
                <img src="/public/img/kategori8.png" className="kate" alt="" />
                <h5 className="kate-down">Beleuchtung</h5>
                <p className="kate-down">30 items</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
