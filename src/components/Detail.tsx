export default function Detail() {
  const handleMinus = () => {
    // Logic to handle minus operation
    const input = document.getElementById("amount") as HTMLInputElement;
    const currentValue = parseInt(input.value);
    if (currentValue > 1) {
      input.value = (currentValue - 1).toString();
    }
  };
  const handlePlus = () => {
    // Logic to handle plus operation
    const input = document.getElementById("amount") as HTMLInputElement;
    const currentValue = parseInt(input.value);
    input.value = (currentValue + 1).toString();
  };
  return (
    <main>
      <div className="container">
        <div className="row py-5">
          <div className="col-6 images">
            <img
              src="/public/img/product1.png"
              alt="Square cultivation pots"
              className="main-image"
            />
            <div className="row py-3 mx-5">
              <div className="col-4 ">
                <img
                  src="/public/img/detail1.png"
                  alt="Thumbnail 1"
                  className="thumbnail"
                />
              </div>
              <div className="col-4 ">
                <img
                  src="/public/img/detail2.png"
                  alt="Thumbnail 1"
                  className="thumbnail"
                />
              </div>
              <div className="col-4 ">
                <img
                  src="/public/img/product1.png"
                  alt="Thumbnail 1"
                  className="thumbnail"
                />
              </div>
            </div>
          </div>
          <div className="col-6">
            <p className="category">PLANT</p>
            <h1>Square cultivation pots 0.27 to 2 litres</h1>
            <p className="description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the...
            </p>
            <div className="price">
              <p>
                $125.00 <span className="discount">50%</span>
              </p>

              <p className="original-price">$250.00</p>
            </div>
            <div className="row">
              <div className="col-6 quanti">
                <div className="soluong">
                  <button className="minus-btn" onClick={handleMinus}>
                    -
                  </button>

                  <input type="text" name="amount" id="amount" value="1" />
                  <button className="plus-btn" onClick={handlePlus}>
                    +
                  </button>
                </div>
              </div>
              <div className="col-6">
                <button className="add-to-cart">
                  Add to Cart <i className="fa-solid fa-cart-shopping"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="category-title">Discription</div>
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
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="product-image">
              <img
                src="/public/img/product1.png"
                alt="Square cultivation pots"
              />
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
    </main>
  );
}
