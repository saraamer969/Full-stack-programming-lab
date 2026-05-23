import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ForgotPassword() {
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

            Forgot Password

          </div>

          <div className="content-wrap">

            <h1
              style={{
                fontSize: "20px",
                marginBottom: "16px",
              }}
            >
              Forgot Your Password?
            </h1>

            <div className="form-section forgot-box">

              <h3>Password Recovery</h3>

              <p
                style={{
                  fontSize: "12px",
                  marginBottom: "12px",
                }}
              >
                Enter your email and we will send you a reset link.
              </p>

              <div className="required-note">
                *Required Fields
              </div>

              <div className="form-row">

                <label>Email Address *</label>

                <input type="email" />

              </div>

              <div
                style={{
                  marginTop: "14px",
                  display: "flex",
                  gap: "10px",
                }}
              >

                <button className="btn-red">
                  RESET PASSWORD
                </button>

                <Link
                  href="/login"
                  className="btn-gray"
                >
                  BACK TO LOGIN
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