import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function EditProfile() {
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

            Edit Account

          </div>

          <div className="content-wrap">

            <h1
              style={{
                fontSize: "20px",
                marginBottom: "16px",
              }}
            >
              Edit Account Details
            </h1>

            <div
              className="form-section"
              style={{ maxWidth: "520px" }}
            >

              <h3>Account Information</h3>

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
                <label>Email Address *</label>

                <input
                  type="email"
                  defaultValue="user@example.com"
                />
              </div>

              <div className="form-row">
                <label>Telephone</label>

                <input type="tel" />
              </div>

              <hr className="divider" />

              {/* PASSWORD */}
              <h3 style={{ marginBottom: "10px" }}>
                Change Password
              </h3>

              <div className="form-row">
                <label>Current Password</label>

                <input type="password" />
              </div>

              <div className="form-row">
                <label>New Password</label>

                <input type="password" />
              </div>

              <div className="form-row">
                <label>Confirm Password</label>

                <input type="password" />
              </div>

              {/* BUTTONS */}
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
                  SAVE CHANGES
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