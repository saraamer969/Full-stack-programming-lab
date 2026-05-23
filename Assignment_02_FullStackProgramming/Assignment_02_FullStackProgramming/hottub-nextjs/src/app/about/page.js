import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />

      <div
        style={{
          background: "linear-gradient(180deg, #c8d8e8 0%, #e8ecef 30%)",
        }}
      >
        <div className="container">

          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>›</span>
            About Us
          </div>

          <div className="page-content">

            <h1>About HotSpring Portable Spas</h1>

            <div
              style={{
                display: "flex",
                gap: "20px",
                alignItems: "flex-start",
                marginBottom: "16px",
              }}
            >
              <div style={{ flex: 1 }}>

                <p>
                  HotSpring Portable Spas has been a leader in the hot tub
                  industry for over 30 years.
                </p>

                <p>
                  Our commitment to excellence is reflected in every product we
                  carry.
                </p>

              </div>

              <img
                src="/images/company.png"
                className="img-fluid"
                alt="company"
              />

            </div>

            <h2>Our Mission</h2>

            <p>
              Our mission is to provide exceptional quality hot tubs and
              portable spas.
            </p>

            <h2>Why Choose Us?</h2>

            <ul>
              <li>Over 30 years of experience</li>
              <li>Lowest price guarantee</li>
              <li>24/7 customer support</li>
              <li>Free shipping on select models</li>
              <li>Easy financing options</li>
            </ul>

            <h2>Our Products</h2>

            <p>
              We carry a full range of portable spas and accessories.
            </p>

            <h2>Customer Service</h2>

            <p>
              Call us at 888-201-8899 or email
              servicemail@yoursitename.com.
            </p>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}