import React, { useState, useEffect } from "react";

import { products as allProducts, categories, sortOptions } from "./data";
import Cart from "./pages/cart/page";
import Register from "./pages/resistration/page";
import Login from "./pages/login/page";
import HomePage from "./homepage";






  export function addToCart() {

    console.log("cart value:", cart);

        
  
  };




export default function MarketplaceHome() {
  const [quickView, setQuickView] = useState(null);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sortBy, setSortBy] = useState("");
  const [visibleCount, setVisibleCount] = useState(5);

  // FILTERED + SORTED PRODUCTS
  const filteredProducts = allProducts
    .filter((p) =>
      p.name.toLowerCase().includes(query.toLowerCase()) &&
      (selectedCategory ? p.category === selectedCategory : true)
    )
    .sort((a, b) => {
      if (sortBy === "priceLow") return a.price - b.price;
      if (sortBy === "priceHigh") return b.price - a.price;
      if (sortBy === "popularity") return b.popularity - a.popularity;
      return 0;
    })
    .slice(0, visibleCount);

  // SEARCH BAR
  const handleSearchChange = (e) => {
    const val = e.target.value;
    setQuery(val);

    if (!val) {
      setSuggestions([]);
      return;
    }

    const filtered = allProducts
      .filter((p) => p.name.toLowerCase().includes(val.toLowerCase()))
      .map((p) => p.name);

    setSuggestions(filtered);
  };

  const handleSelect = (item) => {
    setQuery(item);
    setSuggestions([]);
    const product = allProducts.find((p) => p.name === item);
    setQuickView(product);
  };

  // LOAD MORE
  const handleLoadMore = () => {
    setVisibleCount(visibleCount + 5);
  };

  // CART maine chat gpt ka use kiya hai


  // WISHLIST
  const toggleWishlist = (id) =>
    wishlist.includes(id)
      ? setWishlist(wishlist.filter((i) => i !== id))
      : setWishlist([...wishlist, id]);




      const [screen,setScreen]=useState("");


      
  return (
  
    <div className="marketplac">
      
      {/* HEADER */}

          <div style={{background:"linear-gradient(to right, #696bee, #8b6bd5)"}}>
        
      {/* SEARCH */}
      <div style={{background:"linear-gradient(to right, #696bee, #8b6bd5)"}} className="search-container">

        <input style={{marginTop:"10px"}}
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={handleSearchChange}
        />
        {suggestions.length > 0 && (
          <ul className="suggestions">
            {suggestions.map((item, idx) => (
              <li key={idx} onClick={() => handleSelect(item)}>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    




      {/* <!-- HERO SECTION --> */}
  <section className="hero">
    <h1>Explore the Future of Shopping</h1>
    <p>Smart gadgets · Fashion · Lifestyle</p>
    <button>Shop Now</button>
  </section>


</div>




        
        <div className="marketplace">
      
      


      {/* CATEGORY FILTER */}
      <div className="categories">
        <button  style={{padding : "10px", borderRadius :"15px",color:"black", fontWeight: "500", fontSize: "17px"}}
          className={!selectedCategory ? "active" : ""}
          onClick={() => setSelectedCategory(null)}
        >
          All
        </button>

        {categories.map((c) => (
          <button style={{padding : "10px", borderRadius :"15px",color:"black", fontWeight: "500", fontSize: "17px"}}
            key={c.id}
            className={selectedCategory === c.id ? "active" : ""}
            onClick={() => setSelectedCategory(c.id)}
          >
            {c.name}
          </button>
        ))}
      </div>







      



















      {/* SORT */}
      <div className="sort">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="">Sort By</option>
          {sortOptions.map((s) => (
            <option key={s.id} value={s.key}>
              {s.name}
            </option>
          ))}
        </select>
      </div>




      {/* PRODUCT LIST */}
      <section className="product-lis">


        {filteredProducts.length === 0 && <p>No products found.</p>}



        {filteredProducts.map((p) => (
          <div style={{width:"100"}} className="product-row" key={p.id}>
            <div className="img-wrap">
              <img src={p.img} alt={p.name} />
            </div>


            <div className="details">
              <h3>{p.name}</h3>
              <p className="price">₹{p.price}</p>
              <p>{p.desc}</p>
              <div className="actions">
                <button className="primary" onClick={addToCart}>
                  Add to Cart
                </button>
                <button
                  className="wishlist"
                  onClick={() => toggleWishlist(p.id)}
                >
                  {wishlist.includes(p.id) ? "💖" : "🤍"}
                </button>
              </div>
            </div>
          </div>
        ))}







        {visibleCount < allProducts.length && (
          <button className="load-more" onClick={handleLoadMore}>
            Load More
          </button>
        )}
      </section>


      {/* QUICK VIEW MODAL
      {quickView && (
        <div className="modal">
          <div className="modal-box">
            <span className="close" onClick={() => setQuickView(null)}>
              ✕
            </span>
            <div className="modal-content">
              <img src={quickView.img} alt={quickView.name} />
              <div>
                <h3>{quickView.name}</h3>
                <p className="price">₹{quickView.price}</p>
                <p>{quickView.desc}</p>
                <button className="primary" onClick={addToCart}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )} */}
    </div>
    <HomePage></HomePage>
    
  {/* <!-- PRODUCT SECTION --> */}
  <section className="products">
    <h2>Featured Products</h2>

    <div className="product-grid">




      <div className="product-card">
        <div className="badge">30% OFF</div>
        <img src="https://img.freepik.com/premium-photo/home-appliance-with-ribbons-discounts_252025-696.jpg?semt=ais_hybrid&w=740&q=80" />
        <h3>Smart Watch</h3>
        <p className="price">
          <span className="mrp">₹4999</span>
          <span className="sp">₹3499</span>
        </p>
        <button>Add to Cart</button>
      </div>

      <div className="product-card">
        <img src="https://m.media-amazon.com/images/I/812AZ1Js35L.jpg" />
        <h3>Kids Makup</h3>
        <p className="price">
          <span className="mrp">₹2999</span>
          <span className="sp">₹1999</span>
        </p>
        <button>Add to Cart</button>
      </div>

      <div className="product-card out">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf1mBC-EFDrjKu5Cc_IwCesYSgUL5qT0KfRQ&s" />
        <h3>Cake-Birthday</h3>
        <p className="price">
          <span className="mrp">₹3999</span>
          <span className="sp">₹2799</span>
        </p>
        <button disabled>Out of Stock</button>
      </div>

      
      <div className="product-card out">
        <img src="https://m.media-amazon.com/images/I/61ZSnXdUCdL._SX522_.jpg" />
        <h3>Wireless Headphones</h3>
        <p className="price">
          <span className="mrp">₹3999</span>
          <span className="sp">₹2799</span>
        </p>
        <button disabled>Out of Stock</button>
      </div>

      
      <div className="product-card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5sL0sd7hOfYPv5J7G1wcVDHxce91z0CuuSQ&s" />
        <h3>Party-Cake</h3>
        <p className="price">
          <span className="mrp">₹3999</span>
          <span className="sp">₹2799</span>
        </p>
        <button>Out of Stock</button>
      </div>

    </div>
  </section>
    </div>
  );
}
