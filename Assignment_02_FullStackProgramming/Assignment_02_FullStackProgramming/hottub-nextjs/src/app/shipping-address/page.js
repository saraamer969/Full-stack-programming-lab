import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ShippingAddress() {
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

            Edit Shipping Address

          </div>

          <div className="content-wrap">

            <h1
              style={{
                fontSize: "20px",
                marginBottom: "16px",
              }}
            >
              Edit Shipping Address
            </h1>

            <div
              className="form-section"
              style={{ maxWidth: "520px" }}
            >

              <h3>Shipping Address Details</h3>

              <div className="required-note">
                *Required Fields
              </div>

              <div className="form-row">
                <label>First Name *</label>

                <input
                  type="text"
                  defaultValue="Farrukh"
                />
              </div>

              <div className="form-row">
                <label>Last Name *</label>

                <input
                  type="text"
                  defaultValue="Javaid"
                />
              </div>

              <div className="form-row">
                <label>Company</label>

                <input
                  type="text"
                  defaultValue="Hottub Spas"
                />
              </div>

              <div className="form-row">
                <label>Address *</label>

                <input
                  type="text"
                  defaultValue="Plot 10 Tech Society"
                />
              </div>

              <div className="form-row">
                <label>City *</label>

                <input
                  type="text"
                  defaultValue="California"
                />
              </div>

              <div className="form-row">
                <label>State / Province</label>

                <input
                  type="text"
                  defaultValue="CA"
                />
              </div>

              <div className="form-row">
                <label>Zip / Postal Code</label>

                <input
                  type="text"
                  defaultValue="20112"
                />
              </div>

              <div className="form-row">

                <label>Country *</label>

                <select style={{ maxWidth: "280px" }}>
                  <option>United States</option>
                </select>

              </div>

              <div className="form-row">
                <label>Phone</label>

                <input type="tel" />
              </div>

              <div
                style={{
                  marginTop: "14px",
                  display: "flex",
                  gap: "10px",
                }}
              >

                <Link
                  href="/account"
                  className="btn-red"
                >
                  SAVE ADDRESS
                </Link>

                <Link
                  href="/account"
                  className="btn-gray"
                >
                  CANCEL
                </Link>

              </div>

            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}