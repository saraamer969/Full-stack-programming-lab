import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

export default function Category() {
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

            <Link href="/">Home</Link>

            <span>›</span>

            Category

          </div>

          <div className="layout-sidebar">

            {/* SIDEBAR */}
            <div className="sidebar">

              <h3>Shopping Options</h3>

              <div className="filter-group">

                <h4>Seating Capacity</h4>

                <ul>
                  <li><a href="#">2 - 4 PEOPLE</a></li>
                  <li><a href="#">5 - 7 PEOPLE</a></li>
                </ul>

              </div>

              <div className="filter-group">

                <h4>Choose Sizes</h4>

                <ul>
                  <li><a href="#">5 - 6 FEET</a></li>
                  <li><a href="#">6 - 7 FEET</a></li>
                </ul>

              </div>

            </div>

            {/* MAIN CONTENT */}
            <div className="main-content">

              <div
                className="content-wrap"
                style={{ padding: "14px" }}
              >

                <div className="product-list-header">

                  <h2>Top Product Listing</h2>

                  <span className="showing">
                    6 Item(s)
                  </span>

                </div>

                <div className="product-grid-3">

                  <ProductCard
                    image="/images/product2.png"
                    name="XS SCYBA X SERIES 119"
                    price="$500.00"
                  />

                </div>

              </div>

              {/* ALSO VIEWED */}
              <div className="also-viewed">

                <h3>
                  Customers Who Viewed This Item Also Viewed
                </h3>

                <div className="also-viewed-items">

                  <div className="also-viewed-item">

                    <img
                      src="/images/product-small.png"
                      alt="small"
                      className="img-fluid"
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

        </div>
      </div>

      <Footer />
    </>
  );
}