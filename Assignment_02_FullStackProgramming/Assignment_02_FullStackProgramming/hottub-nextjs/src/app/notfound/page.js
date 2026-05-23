import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />

      <div
        style={{
          background: "linear-gradient(180deg, #c8d8e8 0%, #e8ecef 30%)",
          padding: "60px 0",
          textAlign: "center",
        }}
      >
        <div className="container">

          <h1
            style={{
              fontSize: "60px",
              marginBottom: "10px",
            }}
          >
            404
          </h1>

          <h2 style={{ marginBottom: "20px" }}>
            Page Not Found
          </h2>

          <p style={{ marginBottom: "20px" }}>
            Sorry, the page you are looking for does not exist.
          </p>

          <Link
            href="/"
            className="btn-red"
          >
            Go Back Home
          </Link>

        </div>
      </div>

      <Footer />
    </>
  );
}