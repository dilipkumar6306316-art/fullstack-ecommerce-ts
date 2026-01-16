export default function Headr({ cartCount }) {
  return (
    <header className="header">
      {/* LEFT */}
      <div className="logo">
        <h2>ShopX</h2>
      </div>

      {/* SEARCH */}
      <div className="search-bar">
        <input type="text" placeholder="Search for products..." />
        <button>🔍</button>
      </div>

      {/* NAV */}
      <nav className="nav">
        {/* CATEGORY */}
        <div className="nav-item">
          Categories ▾
          <div className="dropdown">
            <p>Electronics</p>
            <p>Fashion</p>
            <p>Home & Kitchen</p>
            <p>Mobiles</p>
            <p>Books</p>
          </div>
        </div>

        {/* ACCOUNT */}
        <div className="nav-item">
          Account ▾
          <div className="dropdown">
            <p>My Profile</p>
            <p>My Orders</p>
            <p>Wishlist</p>
            <p>Logout</p>
          </div>
        </div>

        {/* SELLER */}
        <div className="nav-item">
          Seller ▾
          <div className="dropdown">
            <p>Add Product</p>
            <p>My Products</p>
            <p>Orders</p>
            <p>Dashboard</p>
          </div>
        </div>

        {/* CART */}
        <div className="cart">
          🛒 Cart
          <span>{cartCount}</span>
        </div>
      </nav>
    </header>
  );
}
