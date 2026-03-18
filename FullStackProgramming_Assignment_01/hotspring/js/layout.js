// Shared header and footer HTML strings for HotSpring website

const HEADER_HTML = `
<!-- TOP BAR -->
<div class="top-bar">
  <div class="container">
    <div class="phone">Call for Customer support: <span>020 38989565</span></div>
    <div class="top-links">
      <a href="account.html">My Account</a>
      <a href="#">Wishlist</a>
      <a href="checkout.html">To Checkout</a>
    </div>
  </div>
</div>

<!-- HEADER -->
<div class="header">
  <div class="container">
    <a href="index.html" class="logo">
      <div class="brand">HOTSPRING<sup style="font-size:12px">®</sup></div>
      <div class="tagline">Portable Spas</div>
    </a>
    <div class="cart-widget" onclick="location.href='cart.html'">
      <span class="cart-icon">🛒</span>
      <span>My Cart: &nbsp;<span class="cart-count">0 Items (s)</span></span>
      <span>▼</span>
    </div>
  </div>
</div>

<!-- MAIN NAV -->
<div class="main-nav">
  <div class="container">
    <ul>
      <li><a href="index.html" class="active">HOME</a></li>
      <li><a href="category.html">PRODUCTS</a></li>
      <li><a href="#">SPECIAL OFFERS</a></li>
      <li><a href="contact.html">CUSTC.</a></li>
    </ul>
  </div>
</div>

<!-- RED SEARCH BAR -->
<div class="search-bar">
  <div class="container">
    <div class="nav-links">
      <a href="category.html">CATEGORY</a>
      <a href="#">BRAND</a>
      <a href="#">INFO</a>
    </div>
    <div class="search-form">
      <input type="text" placeholder="Search">
      <button>SEARCH</button>
    </div>
  </div>
</div>
`;

const BRAND_LOGOS_HTML = `
<div class="brand-logos">
  <div style="background:#f5f500;padding:6px 12px;font-size:12px;font-weight:900;color:#333;line-height:1.2">
    SAVE <span style="font-size:16px">$1,000'S</span><br>
    <span style="font-size:9px;color:#c00">ON THE TOP SPA BRANDS</span><br>
    <span style="font-size:9px">HUGE DISCOUNTS</span>
  </div>
  <div class="brand-logo oceanic" style="font-family:Georgia,serif">🌊 <em>OCEANIC</em><span style="font-style:italic">Spa</span></div>
  <div class="brand-logo caldera">🌸 Caldera<span style="font-weight:300">Spas</span></div>
  <div class="brand-logo island">🌴 Island<strong>Spas</strong><br><span style="font-size:9px;font-style:italic;font-weight:normal;color:#888">by ARTESIAN</span></div>
</div>
`;

const FOOTER_HTML = `
<!-- BRAND LOGOS -->
${BRAND_LOGOS_HTML}

<!-- FOOTER -->
<div class="footer">
  <div class="container">
    <div class="footer-grid">
      <div>
        <h4>Contact Us</h4>
        <p>yoursitename.com</p>
        <p>CALL 24/7: 888-201-8899</p>
        <p>Your Address:<br>Street<br>State & Zip Code<br>City & Country</p>
        <p>Email: servicemail@yoursitename.com</p>
        <div class="footer-social">
          <a href="#" class="tw">tw</a>
          <a href="#" class="fb">f</a>
          <a href="#" class="li">in</a>
          <a href="#" class="gp">g+</a>
          <a href="#" class="yt">yt</a>
          <a href="#" class="pi">p</a>
        </div>
      </div>
      <div>
        <h4>Information</h4>
        <ul>
          <li><a href="about.html">ABOUT US</a></li>
          <li><a href="#">CUSTOMER SERVICE</a></li>
          <li><a href="#">PRIVACY POLICY</a></li>
          <li><a href="#">SITE MAP</a></li>
          <li><a href="#">SEARCH TERMS</a></li>
          <li><a href="contact.html">CONTACT US</a></li>
          <li><a href="about.html">ABOUT US</a></li>
        </ul>
      </div>
      <div>
        <h4>My Account</h4>
        <ul>
          <li><a href="login.html">SIGN IN</a></li>
          <li><a href="cart.html">VIEW CART</a></li>
          <li><a href="#">MY WISHLIST</a></li>
        </ul>
      </div>
      <div>
        <h4>Signup For A Newsletter</h4>
        <p>SIGN UP FOR OUR NEWS LETTER:</p>
        <div class="newsletter-input">
          <input type="email" placeholder="">
          <button>GO</button>
        </div>
        <p style="margin-top:10px">PAYMENT SOLUTIONS</p>
        <div class="payment-icons">
          <span class="payment-icon">💳</span>
          <span class="payment-icon mc">MC</span>
          <span class="payment-icon amex">AMEX</span>
          <span class="payment-icon visa">VISA</span>
          <span class="payment-icon pp">PayPal</span>
        </div>
      </div>
    </div>
  </div>
  <div class="footer-copy">© 2014 Hotubspaservice.com. All Rights Reserved.</div>
</div>
`;

// Insert header and footer on page load
document.addEventListener('DOMContentLoaded', function() {
  const headerEl = document.getElementById('site-header');
  if (headerEl) headerEl.innerHTML = HEADER_HTML;
  const footerEl = document.getElementById('site-footer');
  if (footerEl) footerEl.innerHTML = FOOTER_HTML;
  
  // Highlight active nav based on current page
  const page = window.location.pathname.split('/').pop();
  document.querySelectorAll('.main-nav a, .search-bar .nav-links a').forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === page) a.classList.add('active');
  });
});
