import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Product() {
  return (
    <>
      <Navbar />

      <div
        style={{
          background: "linear-gradient(180deg, #c8d8e8 0%, #e8ecef 30%)",
        }}
      >
        <div className="container">

          {/* BREADCRUMB */}
          <div className="breadcrumb">
            <Link href="/">Home</Link> <span>›</span> Product Detail
          </div>

          <div className="content-wrap">

            {/* TITLE */}
            <h2 style={{ marginBottom: "10px" }}>
              Emerald Bay XL Hot Tub
            </h2>

            <div className="product-detail-grid">

              {/* IMAGES */}
              <div className="product-images">
                <img
                  src="/images/product2.png"
                  alt="product"
                  className="product-main-img"
                />

                <div className="thumb-strip">
                  <img src="/images/product.png" alt="thumb" />
                  <img src="/images/product2.png" alt="thumb" />
                  <img src="/images/product3.png" alt="thumb" />
                  <img src="/images/product4.png" alt="thumb" />
                </div>
              </div>

              {/* INFO */}
              <div className="product-info">

                <div className="sale-price">$1979.00</div>

                <div className="guarantee">
                  Low Price Guarantee
                </div>

                <table className="spec-table">
                  <tbody>
                    <tr>
                      <td>Capacity</td>
                      <td>6 Persons</td>
                    </tr>

                    <tr>
                      <td>Pumps</td>
                      <td>2 X 5HP</td>
                    </tr>
                  </tbody>
                </table>

                <div className="in-stock">
                  ✔ In Stock
                </div>

                <Link href="/cart" className="btn-red">
                  🛒 ADD TO CART
                </Link>

              </div>

              {/* PRICE CALCULATOR */}
              <div className="price-calc">

                <h4>Price Calculator</h4>

                <label>Interior Color:</label>

                <select>
                  <option>Select</option>
                </select>

                <label>Quantity:</label>

                <input
                  type="number"
                  defaultValue="1"
                />

                <div className="total-price">
                  Total Price: $650.00
                </div>

                <Link href="/cart" className="btn-red">
                  🛒 ADD TO CART
                </Link>

              </div>

            </div>

            {/* TABS */}
            <div className="prod-tabs">

              <div className="tab-nav">
                <a href="#">Details</a>
                <a href="#">Reviews</a>
              </div>

              <div className="tab-content">
                <h4>Product Details</h4>

                <p>
                  This is a premium hot tub product description.
                </p>
              </div>

            </div>

          </div>

          {/* ALSO VIEWED */}
          <div className="also-viewed">

            <h3>Customers Also Viewed</h3>

            <div className="also-viewed-items">

              <div className="also-viewed-item">

                <img
                  src="/images/product-small.png"
                  alt="small"
                />

                <div className="av-info">
                  <div className="av-price">
                    $2,549.15
                  </div>

                  <div className="av-name">
                    Sample Product
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}