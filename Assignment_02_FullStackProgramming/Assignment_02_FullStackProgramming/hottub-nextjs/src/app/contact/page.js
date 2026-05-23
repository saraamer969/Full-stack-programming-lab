import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
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

            Contact Us

          </div>

          <div className="page-content">

            <h1>Contact Us</h1>

            {/* CONTACT INFO */}
            <div className="contact-info-grid">

              <div className="info-box">

                <h3>Get In Touch</h3>

                <p>
                  📍 Your Address, Street <br />
                  City & Country
                </p>

                <p style={{ marginTop: "8px" }}>
                  📞 CALL 24/7:
                  {" "}
                  <strong>888-201-8899</strong>
                </p>

                <p>
                  ✉️ servicemail@yoursitename.com
                </p>

              </div>

              <div className="info-box">

                <h3>Business Hours</h3>

                <p>
                  Monday – Friday: 8:00am – 8:00pm <br />
                  Saturday: 9:00am – 6:00pm <br />
                  Sunday: 10:00am – 4:00pm <br />

                  <span style={{ color: "#3a8a3a" }}>
                    Customer Support: 24/7
                  </span>
                </p>

              </div>

            </div>

            {/* FORM */}
            <h2>Send Us a Message</h2>

            <div
              className="form-section"
              style={{ maxWidth: "520px" }}
            >

              <div className="required-note">
                *Required Fields
              </div>

              <div className="form-row">
                <label>Full Name *</label>

                <input
                  type="text"
                  placeholder="Your name"
                />
              </div>

              <div className="form-row">
                <label>Email *</label>

                <input
                  type="email"
                  placeholder="your@email.com"
                />
              </div>

              <div className="form-row">
                <label>Phone</label>

                <input
                  type="tel"
                  placeholder="Your phone number"
                />
              </div>

              <div className="form-row">
                <label>Subject *</label>

                <input
                  type="text"
                  placeholder="Message subject"
                />
              </div>

              <div
                className="form-row"
                style={{ alignItems: "flex-start" }}
              >

                <label style={{ paddingTop: "4px" }}>
                  Message *
                </label>

                <textarea
                  style={{
                    flex: 1,
                    maxWidth: "280px",
                    height: "100px",
                    padding: "5px 8px",
                  }}
                  placeholder="Your message..."
                ></textarea>

              </div>

              <div style={{ marginTop: "14px" }}>
                <button className="btn-red">
                  SEND MESSAGE
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