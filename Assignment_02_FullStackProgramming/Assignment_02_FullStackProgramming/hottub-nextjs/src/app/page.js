import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <>
      <Navbar />

      <div
        style={{
          background: "linear-gradient(180deg, #c8d8e8 0%, #e8ecef 30%)",
        }}
      >
        <div className="container">

          {/* HERO SECTION */}
          <div className="hero-slider">
            <div className="hero-slide">

              <div className="hero-text">
                <h2>
                  Barrier Reef 158 Jet <br />
                  TV- Stereo - Home Theater <br />
                  Super Spa
                </h2>

                <p>Extra Large and Deep 8 Person</p>
                <p>158 Jet Super Spa, TV-Home Theater Spa System</p>

                <div className="hero-price">$4899.00</div>

                <Link href="/product" className="btn-red">
                  More Details
                </Link>
              </div>

              <div className="hero-img">
                <img
                  src="/images/banner.png"
                  alt="Spa Tub"
                  className="img-fluid"
                />
              </div>

            </div>
          </div>

          {/* PROMO BANNERS */}
          <div className="promo-banners">

            <div className="promo-banner dark">
              <div style={{ fontSize: "11px", marginBottom: "4px" }}>
                5-7 PERSON
              </div>

              <h3>SPA</h3>

              <p>
                THIS IS PHOTOSHOPS VERSION OF LOREM IPSUM
              </p>
            </div>

            <div className="promo-banner mid">
              <h3>TV THEATER SPA</h3>

              <p>
                THIS IS PHOTOSHOPS VERSION OF LOREM IPSUM
              </p>
            </div>

            <div className="promo-banner red">
              <div className="save-badge">
                SAVE <br />
                <small>50%</small>
              </div>
            </div>

          </div>

          {/* PRODUCTS */}
          <div className="section-title">
            NEW PRODUCTS
          </div>

          <div className="product-grid">

            <ProductCard
              image="/images/product.png"
              name="XS SCYBA X SERIES 119"
              price="$500.00"
            />

            <ProductCard
              image="/images/product2.png"
              name="Spa Model 2"
              price="$600.00"
            />

            <ProductCard
              image="/images/product3.png"
              name="Spa Model 3"
              price="$700.00"
            />

          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}