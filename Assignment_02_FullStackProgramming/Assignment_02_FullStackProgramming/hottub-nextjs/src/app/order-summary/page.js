import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function OrderSummary() {
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

            <Link href="/account">
              My Account
            </Link>

            <span>›</span>

            Order Summary

          </div>

          <div className="content-wrap">

            <h1
              style={{
                fontSize: "20px",
                marginBottom: "8px",
              }}
            >
              Order Summary
            </h1>

            <div
              className="cart-success"
              style={{ marginBottom: "16px" }}
            >
              Thank you! Your order has been placed successfully.
            </div>

            {/* ORDER INFO */}
            <div style={{ marginBottom: "14px" }}>

              <strong>Order #307</strong>

              <span
                style={{
                  fontSize: "12px",
                  marginLeft: "10px",
                }}
              >
                December 18, 2014
              </span>

            </div>

            {/* TABLE */}
            <table
              className="order-info-table"
              style={{ marginBottom: "16px" }}
            >

              <thead>

                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Total</th>
                </tr>

              </thead>

              <tbody>

                <tr>

                  <td>

                    <Link
                      href="/product"
                      style={{ color: "#c00" }}
                    >
                      Hot Tub Product
                    </Link>

                    <br />

                    <span
                      style={{
                        fontSize: "11px",
                        color: "#666",
                      }}
                    >
                      Product description
                    </span>

                  </td>

                  <td>$799.00</td>
                  <td>1</td>
                  <td>$799.00</td>

                </tr>

              </tbody>

              <tfoot>

                <tr>

                  <td
                    colSpan="3"
                    style={{ textAlign: "right" }}
                  >
                    Subtotal:
                  </td>

                  <td>$799.00</td>

                </tr>

                <tr>

                  <td
                    colSpan="3"
                    style={{ textAlign: "right" }}
                  >
                    Shipping:
                  </td>

                  <td>Free</td>

                </tr>

                <tr>

                  <td
                    colSpan="3"
                    style={{ textAlign: "right" }}
                  >
                    <strong>Order Total:</strong>
                  </td>

                  <td style={{ color: "#c00" }}>
                    $799.00
                  </td>

                </tr>

              </tfoot>

            </table>

            {/* ADDRESSES */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px",
                marginTop: "16px",
              }}
            >

              <div className="address-card">

                <h4>Billing Address</h4>

                <p>
                  Farrukh Javaid <br />
                  Hottub Spas <br />
                  California, CA <br />
                  United States
                </p>

              </div>

              <div className="address-card">

                <h4>Shipping Address</h4>

                <p>
                  Farrukh Javaid <br />
                  Hottub Spas <br />
                  California, CA <br />
                  United States
                </p>

              </div>

            </div>

            {/* BUTTONS */}
            <div
              style={{
                marginTop: "16px",
                display: "flex",
                gap: "10px",
              }}
            >

              <Link
                href="/"
                className="btn-red"
              >
                CONTINUE SHOPPING
              </Link>

              <Link
                href="/account"
                className="btn-gray"
              >
                VIEW MY ACCOUNT
              </Link>

            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}