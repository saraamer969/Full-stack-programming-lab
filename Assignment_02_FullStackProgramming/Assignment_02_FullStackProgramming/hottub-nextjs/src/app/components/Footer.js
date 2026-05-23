import Link from "next/link";

export default function Footer() {
  return (
    <>
      {/* BRAND LOGOS */}
      <div className="brand-logos">

        <div className="container">

          <div
            style={{
              background: "#f5f500",
              padding: "6px 12px",
              fontSize: "12px",
              fontWeight: "900",
              color: "#333",
            }}
          >
            SAVE <span style={{ fontSize: "16px" }}>$1,000'S</span>
          </div>

          <div className="brand-logo">
            🌊 Oceanic Spa
          </div>

          <div className="brand-logo">
            🌸 Caldera Spas
          </div>

          <div className="brand-logo">
            🌴 Island Spas
          </div>

        </div>

      </div>

      {/* FOOTER */}
      <div className="footer">

        <div className="container">

          <div className="footer-grid">

            <div>

              <h4>Contact Us</h4>

              <p>yoursitename.com</p>

              <p>CALL 24/7: 888-201-8899</p>

              <p>Email: servicemail@yoursitename.com</p>

            </div>

            <div>

              <h4>Information</h4>

              <ul>

                <li>
                  <Link href="/about">
                    ABOUT US
                  </Link>
                </li>

                <li>
                  <Link href="/contact">
                    CONTACT US
                  </Link>
                </li>

              </ul>

            </div>

            <div>

              <h4>My Account</h4>

              <ul>

                <li>
                  <Link href="/login">
                    SIGN IN
                  </Link>
                </li>

                <li>
                  <Link href="/cart">
                    VIEW CART
                  </Link>
                </li>

              </ul>

            </div>

            <div>

              <h4>Newsletter</h4>

              <input
                type="email"
                placeholder="Enter email"
              />

              <button>
                GO
              </button>

            </div>

          </div>

        </div>

        <div className="footer-copy">
          © 2014 Hotubspaservice.com. All Rights Reserved.
        </div>

      </div>
    </>
  );
}