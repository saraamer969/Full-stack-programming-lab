import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Cart() {
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

            Shopping Cart

          </div>

          <div className="content-wrap">

            <h1
              style={{
                fontSize: "20px",
                marginBottom: "14px",
              }}
            >
              Shopping Cart
            </h1>

            <h3
              style={{
                fontSize: "13px",
                marginBottom: "8px",
              }}
            >
              Your Shopping Cart
            </h3>

            <div className="cart-success">
              Item was just added to cart.
            </div>

            {/* CART TABLE */}
            <table className="cart-table">

              <tbody>

                {/* ITEM */}
                <tr>

                  <td>
                    <img
                      src="/images/cabaret1.png"
                      className="img-fluid"
                      alt="item"
                    />
                  </td>

                  <td>

                    <div className="cart-item-name">
                      <Link href="/product">
                        Hot Tub Spa Product
                      </Link>
                    </div>

                    <div className="cart-item-desc">
                      Product description goes here
                    </div>

                  </td>

                  <td>

                    <div className="cart-qty">

                      Quantity:

                      <select>
                        <option>1</option>
                        <option>2</option>
                        <option>5</option>
                      </select>

                    </div>

                  </td>

                  <td
                    style={{
                      textAlign: "right",
                      fontWeight: "bold",
                    }}
                  >
                    $9.00
                  </td>

                </tr>

                <tr>

                  <td
                    colSpan="4"
                    style={{ textAlign: "right" }}
                  >

                    <a href="#">
                      Remove
                    </a>

                    {" | "}

                    <Link href="/product">
                      Edit Your Order
                    </Link>

                  </td>

                </tr>

              </tbody>

            </table>

            {/* SUMMARY */}
            <div className="cart-summary">

              <div>
                Cart summary (1 item)
              </div>

              <div className="total">
                Total: $9.00
              </div>

            </div>

            {/* ACTIONS */}
            <div className="cart-actions">

              <Link
                href="/category"
                className="btn-gray"
              >
                CONTINUE SHOPPING
              </Link>

              <Link
                href="/checkout"
                className="btn-red"
              >
                PROCEED TO CHECKOUT
              </Link>

            </div>

          </div>

          {/* ALSO VIEWED */}
          <div className="also-viewed">

            <h3>
              Customers Also Viewed
            </h3>

            <div className="also-viewed-items">

              <div className="also-viewed-item">

                <img
                  src="/images/product-small.png"
                  className="img-fluid"
                  alt="small"
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