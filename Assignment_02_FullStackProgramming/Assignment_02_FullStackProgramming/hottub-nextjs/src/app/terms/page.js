import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Terms() {
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

            Terms & Conditions

          </div>

          <div className="page-content">

            <h1>Terms & Conditions</h1>

            <h2>1. Introduction</h2>

            <p>
              Welcome to HotSpring Portable Spas. By using this website, you agree
              to these terms.
            </p>

            <h2>2. Use of Website</h2>

            <p>
              This website is for personal use only. You may not copy or reuse
              content without permission.
            </p>

            <h2>3. Product Information</h2>

            <p>
              We try to provide accurate information, but errors may occur.
            </p>

            <h2>4. Pricing</h2>

            <p>
              Prices may change without notice. We reserve the right to update
              products.
            </p>

            <h2>5. Shipping Policy</h2>

            <p>
              Orders are processed in 1–3 days and delivered within 7–10 days.
            </p>

            <h2>6. Returns & Refunds</h2>

            <p>
              Returns are accepted within 30 days if items are unused.
            </p>

            <h2>7. Privacy Policy</h2>

            <p>
              Your data is protected and handled according to our privacy policy.
            </p>

            <h2>8. Limitation of Liability</h2>

            <p>
              We are not responsible for damages related to use of this site.
            </p>

            <h2>9. Contact Information</h2>

            <p>
              Email: servicemail@yoursitename.com
              <br />
              Phone: 888-201-8899
            </p>

          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}