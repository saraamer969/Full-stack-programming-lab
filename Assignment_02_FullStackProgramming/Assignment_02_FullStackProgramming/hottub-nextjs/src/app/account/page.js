import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Account() {
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
            User Account
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
              User Profile Details
            </h1>

            {/* PROFILE */}
            <div className="account-section">

              <h3>User Profile</h3>

              <p>
                Hello User! From your account you can view your
                recent orders and manage your addresses.
              </p>

              <p>
                <Link href="/edit-profile">
                  Edit your password and account details
                </Link>
              </p>

            </div>

            {/* ORDERS */}
            <div className="account-section">

              <h3>Recent Orders</h3>

              <table className="orders-table">

                <thead>
                  <tr>
                    <th>Order</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Total</th>
                    <th>Options</th>
                  </tr>
                </thead>

                <tbody>

                  <tr>
                    <td>
                      <Link href="/order-details">
                        #303
                      </Link>
                    </td>

                    <td>December 18, 2014</td>
                    <td>On hold</td>
                    <td>$699.00</td>

                    <td>
                      <Link
                        href="/order-details"
                        className="view-btn"
                      >
                        VIEW ORDERS
                      </Link>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <Link href="/order-details">
                        #307
                      </Link>
                    </td>

                    <td>December 18, 2014</td>
                    <td>On hold</td>
                    <td>$799.00</td>

                    <td>
                      <Link
                        href="/order-details"
                        className="view-btn"
                      >
                        VIEW ORDERS
                      </Link>
                    </td>
                  </tr>

                </tbody>

              </table>

            </div>

            {/* ADDRESSES */}
            <div className="account-section">

              <h3>My Addresses</h3>

              <p
                style={{
                  fontSize: "12px",
                  color: "#666",
                }}
              >
                The following addresses will be used by default
              </p>

              <div className="address-grid">

                {/* BILLING */}
                <div className="address-card">

                  <h4>Billing Address</h4>

                  <p>
                    Farrukh Javaid <br />
                    Hottub Spas <br />
                    California, CA <br />
                    United States
                  </p>

                  <Link
                    href="/billing-address"
                    className="edit-addr-btn"
                  >
                    EDIT ADDRESS
                  </Link>

                </div>

                {/* SHIPPING */}
                <div className="address-card">

                  <h4>Shipping Address</h4>

                  <p>
                    Farrukh Javaid <br />
                    Hottub Spas <br />
                    California, CA <br />
                    United States
                  </p>

                  <Link
                    href="/shipping-address"
                    className="edit-addr-btn"
                  >
                    EDIT ADDRESS
                  </Link>

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