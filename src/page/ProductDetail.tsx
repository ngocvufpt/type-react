import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../interfaces/Product";

type Props = {};

const ProductDetail = (props: Props) => {
  const [product, setProduct] = useState<Product>({} as Product);
  const param = useParams();
  useEffect(() => {
    fetch(`http://localhost:3000/products/${param?.id}`)
      .then((response) => response.json())
      .then((data: Product) => {
        setProduct(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="container">
        <h1 className=" fs-2 my-3 ">Chi tiet san pham</h1>
        <div className="row">
          <div className="col-6">
            <img src={product.image} alt="" />
          </div>
          <div className="col-6">
            <h2 className="my-3 fs-3 fw-bold">{product.title}</h2>
            <p className="my-3 text-danger">Price: {product.price}$</p>
            <p>Description: {product.description}</p>
            <p>Danh muc: {product.category}</p>
            <button className="btn btn-danger my-3">Mua</button>
          </div>
        </div>
        <div className="category-title my-3">Discription</div>
        <p className="description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled i
        </p>
        <div className="category-title">About</div>
        <p className="description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled i
        </p>
        <div className="row">
          <div className="col-6">
            <div className="product-image">
              <img src={product.image} alt="" className="w-100 " />
            </div>
          </div>
          <div className="col-6">
            <div className="review-summary">
              <div className="rating">
                <span className="stars">★★★★★</span>
                <span className="rating-value">5.0</span>
                <span className="review-count">(388)</span>
              </div>
              <div className="rating-bar">
                <div className="rating-level">
                  <span>1★</span>
                  <div className="bar">
                    <div className="fill" style={{ width: 0 }}></div>
                  </div>
                  <span>(0)</span>
                </div>
                <div className="rating-level">
                  <span>2★</span>
                  <div className="bar">
                    <div className="fill" style={{ width: 0 }}></div>
                  </div>
                  <span>(0)</span>
                </div>
                <div className="rating-level">
                  <span>3★</span>
                  <div className="bar">
                    <div className="fill" style={{ width: 0 }}></div>
                  </div>
                  <span>(0)</span>
                </div>
                <div className="rating-level">
                  <span>4★</span>
                  <div className="bar">
                    <div className="fill" style={{ width: 0 }}></div>
                  </div>
                  <span>(0)</span>
                </div>
                <div className="rating-level">
                  <span>5★</span>
                  <div className="bar">
                    <div className="fill" style={{ width: "100%" }}></div>
                  </div>
                  <span>(388)</span>
                </div>
              </div>
            </div>
          </div>
          <button className="write-review">Write reviews</button>
          <div className="row">
            <div className="review">
              <p className="review-author">
                Aman Gupta <span className="stars">★★★★★</span>
              </p>
              <p className="review-text">
                I've been using this cleanser for about five or six months now
                and my acne is almost completely gone. I really struggled for
                years with my skin and tried everything possible but this is the
                only thing that managed to clear up my skin. 100% recommend and
                will continue to use is for sure.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="review">
                <p className="review-author">
                  Aman Gupta <span className="stars">★★★★★</span>
                </p>
                <p className="review-text">
                  I've been using this cleanser for about five or six months now
                  and my acne is almost completely gone. I really struggled for
                  years with my skin and tried everything possible but this is
                  the only thing that managed to clear up my skin. 100%
                  recommend and will continue to use is for sure.
                </p>
              </div>
            </div>
            <div className="col-6">
              <div className="review">
                <p className="review-author">
                  Aman Gupta <span className="stars">★★★★★</span>
                </p>
                <p className="review-text">
                  I've been using this cleanser for about five or six months now
                  and my acne is almost completely gone. I really struggled for
                  years with my skin and tried everything possible but this is
                  the only thing that managed to clear up my skin. 100%
                  recommend and will continue to use is for sure.
                </p>
              </div>
            </div>
            <button className="see-all">See all</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
