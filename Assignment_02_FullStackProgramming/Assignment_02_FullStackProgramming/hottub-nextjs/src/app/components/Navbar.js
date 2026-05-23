import Link from "next/link";

export default function Navbar() {
  return (
    <>
      {/* TOP BAR */}
      <div className="top-bar">

        <div className="container">

          <div className="phone">
            Call for Customer support:
            {" "}
            <span>020 38989565</span>
          </div>

          <div className="top-links">

            <Link href="/account">
              My Account
            </Link>

            <a href="#">
              Wishlist
            </a>

            <Link href="/checkout">
              To Checkout
            </Link>

          </div>

        </div>

      </div>

      {/* HEADER */}
      <div className="header">

        <div className="container">

          <Link
            href="/"
            className="logo"
          >

            <div className="brand">
              HOTSPRING
              <sup style={{ fontSize: "12px" }}>
                ®
              </sup>
            </div>

            <div className="tagline">
              Portable Spas
            </div>

          </Link>

          <Link
            href="/cart"
            className="cart-widget"
          >

            <span className="cart-icon">
              🛒
            </span>

            <span>
              My Cart:
              {" "}
              <span className="cart-count">
                0 Items (s)
              </span>
            </span>

            <span>▼</span>

          </Link>

        </div>

      </div>

      {/* MAIN NAV */}
      <div className="main-nav">

        <div className="container">

          <ul>

            <li>
              <Link href="/">
                HOME
              </Link>
            </li>

            <li>
              <Link href="/products">
                PRODUCTS
              </Link>
            </li>

            <li>
              <a href="#">
                SPECIAL OFFERS
              </a>
            </li>

            <li>
              <Link href="/contact">
                CONTACT
              </Link>
            </li>

          </ul>

        </div>

      </div>

      {/* SEARCH BAR */}
      <div className="search-bar">

        <div className="container">

          <div className="nav-links">

            <Link href="/category">
              CATEGORY
            </Link>

            <a href="#">
              BRAND
            </a>

            <a href="#">
              INFO
            </a>

          </div>

          <div className="search-form">

            <input
              type="text"
              placeholder="Search"
            />

            <button>
              SEARCH
            </button>

          </div>

        </div>

      </div>
    </>
  );
}