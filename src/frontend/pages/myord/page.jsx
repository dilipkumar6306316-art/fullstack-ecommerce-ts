

export default function Header({ cartCount }) {
  return (
    <header className="m-header">
      {/* LOGO */}
      <div className="logo">ShopX</div>

      {/* NAV */}
      <ul className="nav-links">
        <li className="nav-item">
          MEN
          <div className="mega-menu">
            <div className="menu-col">
              <h4>Topwear</h4>
              <p>T-Shirts</p>
              <p>Casual Shirts</p>
              <p>Formal Shirts</p>
            </div>
            <div className="menu-col">
              <h4>Bottomwear</h4>
              <p>Jeans</p>
              <p>Trousers</p>
              <p>Shorts</p>
            </div>
            <div className="menu-col">
              <h4>Footwear</h4>
              <p>Casual Shoes</p>
              <p>Sports Shoes</p>
              <p>Sandals</p>
            </div>
          </div>
        </li>

        <li className="nav-item">
          WOMEN
          <div className="mega-menu">
            <div className="menu-col">
              <h4>Indian Wear</h4>
              <p>Kurtas</p>
              <p>Sarees</p>
              <p>Lehenga</p>
            </div>
            <div className="menu-col">
              <h4>Western Wear</h4>
              <p>Dresses</p>
              <p>Tops</p>
              <p>Jeans</p>
            </div>
          </div>
        </li>

        <li className="nav-item">KIDS</li>
        <li className="nav-item">HOME</li>
        <li className="nav-item">BEAUTY</li>
      </ul>

      {/* RIGHT */}
      <div className="right-icons">
        <span>👤</span>
        <span>❤️</span>
        <span>🛒 {cartCount}</span>
      </div>
    </header>
  );
}





