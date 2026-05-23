import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Register() {
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

            Register

          </div>

          <div className="content-wrap">

            <h1
              style={{
                fontSize: "20px",
                marginBottom: "16px",
              }}
            >
              Create New Account
            </h1>

            <div
              className="form-section"
              style={{ maxWidth: "520px" }}
            >

              <h3>User Account Details</h3>

              <p
                style={{
                  fontSize: "11px",
                  marginBottom: "8px",
                }}
              >
                Fill in the required information below.
              </p>

              <div className="required-note">
                *Required Fields
              </div>

              <div className="form-row">
                <label>Email Address *</label>

                <input type="email" />
              </div>

              <div className="form-row">
                <label>Password *</label>

                <input type="password" />
              </div>

              <div className="form-row">
                <label>Re-enter Password *</label>

                <input type="password" />
              </div>

              <div className="form-row">
                <label>First Name *</label>

                <input type="text" />
              </div>

              <div className="form-row">
                <label>Last Name *</label>

                <input type="text" />
              </div>

              <div style={{ margin: "10px 0" }}>
                <input type="checkbox" />
                {" "}Subscribe to newsletter
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "14px",
                  marginTop: "12px",
                }}
              >

                <Link
                  href="/account"
                  className="btn-red"
                >
                  CREATE ACCOUNT
                </Link>

                <Link
                  href="/forgot-password"
                  style={{
                    fontSize: "12px",
                    color: "#c00",
                  }}
                >
                  Forgot your password?
                </Link>

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
                  className="img-fluid"
                  alt="product"
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