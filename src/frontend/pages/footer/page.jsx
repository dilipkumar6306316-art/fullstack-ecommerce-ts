const Footer=()=>{
    return(
        <footer className="footer">
  <div className="footer-container">

    {/* <!-- ABOUT --> */}
    <div className="footer-section">
      <h3>AndromedaKart</h3>
      <p>
        AndromedaKart is a modern e-commerce platform focused on
        technology-driven shopping experiences with clean design,
        scalable architecture, and future-ready features.
      </p>
    </div>

    {/* <!-- CUSTOMER --> */}
    <div className="footer-section">
      <h4>Customer Care</h4>
      <ul>
        <li>Help Center</li>
        <li>Track Order</li>
        <li>Returns & Refunds</li>
        <li>Shipping Policy</li>
        <li>Payment Options</li>
      </ul>
    </div>

    {/* <!-- COMPANY --> */}
    <div className="footer-section">
      <h4>Company</h4>
      <ul>
        <li>About Us</li>
        <li>Careers</li>
        <li>Blog</li>
        <li>Privacy Policy</li>
        <li>Terms & Conditions</li>
      </ul>
    </div>

    {/* <!-- SELLER / TECH --> */}
    <div className="footer-section">
      <h4>Build & Sell</h4>
      <ul>
        <li>Sell on AndromedaKart</li>
        <li>Affiliate Program</li>
        <li>API & Developers</li>
        <li>Admin Dashboard</li>
      </ul>
    </div>
  </div>

  {/* <!-- BOTTOM BAR --> */}
  <div className="footer-bottom">
    © 2026 AndromedaKart · Designed & Built by a First-Year Engineer  
    <br />
    {/* <!-- Tech Stack: HTML · CSS · JavaScript · Future: Next.js · TypeScript --> */}
  </div>
</footer>
    )
}

export default Footer;