import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function OrderDetails() {
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

            Order Details

          </div>

          <div className="content-wrap">

            <h1
              style={{
                fontSize: "20px",
                marginBottom: "16px",
              }}
            >
              Order Details
            </h1>

            {/* ORDER HEADER */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "16px",
              }}
            >

              <div>

                <strong>Order #303</strong>

                <br />

                <span
                  style={{
                    fontSize: "12px",
                    color: "#666",
                  }}
                >
                  Placed on December 18, 2014
                </span>

              </div>

              <div>

                <strong>Status:</strong>

                {" "}

                <span style={{ color: "#f90" }}>
                  On Hold
                </span>

              </div>

            </div>

            {/* TABLE */}
            <table className="order-info-table">

              <thead>
                <tr>
                  <th>Product</th>
                  <th>SKU</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Subtotal</th>
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

                  </td>

                  <td>CAB-3P-110V</td>
                  <td>$699.00</td>
                  <td>1</td>
                  <td>$699.00</td>

                </tr>

              </tbody>

              <tfoot>

                <tr>

                  <td
                    colSpan="4"
                    style={{ textAlign: "right" }}
                  >
                    Subtotal
                  </td>

                  <td>$699.00</td>

                </tr>

                <tr>

                  <td
                    colSpan="4"
                    style={{ textAlign: "right" }}
                  >
                    Shipping & Handling
                  </td>

                  <td>$0.00</td>

                </tr>

                <tr>

                  <td
                    colSpan="4"
                    style={{ textAlign: "right" }}
                  >
                    <strong>Grand Total</strong>
                  </td>

                  <td style={{ color: "#c00" }}>
                    $699.00
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

            {/* BACK BUTTON */}
            <div style={{ marginTop: "16px" }}>

              <Link
                href="/account"
                className="btn-gray"
              >
                ← BACK TO MY ACCOUNT
              </Link>

            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}