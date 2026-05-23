import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Checkout() {
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

            Payments

          </div>

          <div className="content-wrap">

            <h1
              style={{
                fontSize: "20px",
                marginBottom: "16px",
              }}
            >
              Secure Checkout
            </h1>

            <div
              style={{
                border: "1px solid #e0e0e0",
                padding: "16px",
                background: "#fafafa",
              }}
            >

              <h3 style={{ marginBottom: "14px" }}>
                Payment Information
              </h3>

              <div className="checkout-grid">

                {/* LEFT SIDE */}
                <div>

                  <h4>Step 1: Billing Address</h4>

                  <div className="checkout-form-row">
                    <label>First Name *</label>
                    <input type="text" />
                  </div>

                  <div className="checkout-form-row">
                    <label>Last Name *</label>
                    <input type="text" />
                  </div>

                  <div className="checkout-form-row">
                    <label>Email *</label>
                    <input type="email" />
                  </div>

                  <div className="checkout-form-row">
                    <label>Phone *</label>
                    <input type="tel" />
                  </div>

                  <div className="checkout-form-row">
                    <label>Address *</label>
                    <input type="text" />
                  </div>

                  <div className="checkout-form-row">

                    <label>City *</label>

                    <select>
                      <option>New York</option>
                    </select>

                  </div>

                  <div className="checkout-form-row">
                    <label>State *</label>

                    <input
                      type="text"
                      defaultValue="New York"
                    />
                  </div>

                  <div className="checkout-form-row">
                    <label>Zip Code *</label>
                    <input type="text" />
                  </div>

                  <div className="checkout-form-row">

                    <label>Country *</label>

                    <select>
                      <option>United States</option>
                    </select>

                  </div>

                  <div style={{ margin: "10px 0" }}>
                    <input type="checkbox" />
                    {" "}Ship to a different address
                  </div>

                </div>

                {/* RIGHT SIDE */}
                <div>

                  <h4>Step 2: Card Details</h4>

                  <div className="checkout-form-row">
                    <label>Card Type *</label>

                    <input
                      type="text"
                      placeholder="Master Card"
                    />
                  </div>

                  <div className="checkout-form-row">
                    <label>Card Number *</label>

                    <input
                      type="text"
                      placeholder="1234 5678 9123 4567"
                    />
                  </div>

                  <div className="checkout-form-row">
                    <label>Secure Code *</label>
                    <input type="text" />
                  </div>

                  <div style={{ margin: "10px 0" }}>
                    <input
                      type="checkbox"
                      defaultChecked
                    />
                    {" "}I accept terms
                  </div>

                  {/* REVIEW */}
                  <h4 style={{ marginTop: "20px" }}>
                    Step 3: Review Order
                  </h4>

                  <table className="order-review-table">

                    <thead>
                      <tr>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>Sample Product</td>
                        <td>$699</td>
                        <td>1</td>
                        <td>$699</td>
                      </tr>
                    </tbody>

                  </table>

                  <div
                    style={{
                      textAlign: "right",
                      marginTop: "10px",
                    }}
                  >
                    <strong>Total: $699.00</strong>
                  </div>

                  <div
                    style={{
                      textAlign: "right",
                      marginTop: "10px",
                    }}
                  >

                    <button className="btn-green">
                      🔒 Place Your Order
                    </button>

                  </div>

                </div>

              </div>

              {/* ACTIONS */}
              <div
                style={{
                  textAlign: "right",
                  marginTop: "20px",
                }}
              >

                <Link
                  href="/cart"
                  className="btn-gray"
                >
                  Continue Shopping
                </Link>

                {" "}

                <button className="btn-red">
                  Proceed to Checkout
                </button>

              </div>

            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}