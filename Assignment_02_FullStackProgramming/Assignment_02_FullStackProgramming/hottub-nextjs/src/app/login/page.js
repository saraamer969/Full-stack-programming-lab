import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Login() {
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

            My Account

          </div>

          <div className="content-wrap">

            <h1
              style={{
                fontSize: "20px",
                marginBottom: "16px",
              }}
            >
              Login Or Create Account
            </h1>

            <div className="login-grid">

              {/* LOGIN */}
              <div className="form-section">

                <h3>User Login Details</h3>

                <p
                  style={{
                    fontSize: "12px",
                    marginBottom: "8px",
                  }}
                >
                  Please sign in with your login information.
                </p>

                <div className="required-note">
                  *Required Fields
                </div>

                <div className="form-row">
                  <label>Email *</label>

                  <input type="email" />
                </div>

                <div className="form-row">
                  <label>Password *</label>

                  <input type="password" />
                </div>

                <div style={{ margin: "10px 0" }}>
                  <input type="checkbox" />
                  {" "}Remember me
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
                    SIGN IN
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

              {/* NEW CUSTOMER */}
              <div className="form-section">

                <h3>New Customer</h3>

                <p
                  style={{
                    fontSize: "12px",
                    marginBottom: "8px",
                  }}
                >
                  As a registered customer you can:
                </p>

                <ul>
                  <li>Store billing & shipping info</li>
                  <li>Check order status</li>
                  <li>Track delivery</li>
                  <li>View order history</li>
                </ul>

                <div style={{ marginTop: "14px" }}>

                  <Link
                    href="/register"
                    className="btn-red"
                  >
                    CREATE NEW ACCOUNT
                  </Link>

                </div>

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