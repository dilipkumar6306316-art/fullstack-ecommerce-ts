import { useState } from "react";


export default function HomePage() {
  const [quickView, setQuickView] = useState(null);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);


  // PRODUCT LIST
  const products = [
    {
      id: 1,
      name: "iPhone 15",
      price: "79,999",
      img: "https://m.media-amazon.com/images/I/71d7rfSl0wL._SL1500_.jpg",
      desc: "128GB | A16 Bionic | 48MP Camera",
    },
    {
      id: 2,
      name: "Noise Smartwatch",
      price: "2,999",
      img: "https://m.media-amazon.com/images/I/61TapeOXotL._SL1500_.jpg",
      desc: "AMOLED Display | 7 Days Battery",
    },
    {
      id: 3,
      name: "Nike Shoes",
      price: "4,499",
      img: "https://m.media-amazon.com/images/I/61utX8kBDlL._UL1500_.jpg",
      desc: "Lightweight | Running Shoes",
    },
    {
      id: 4,
      name: "Samsung Galaxy S23",
      price: "65,999",
      img: "https://m.media-amazon.com/images/I/61qA6zX1eJL._SL1500_.jpg",
      desc: "Snapdragon 8 | 8GB RAM | 128GB Storage",
    },
    {
      id: 5,
      name: "MacBook Air M2",
      price: "1,29,999",
      img: "https://m.media-amazon.com/images/I/71TPda7cwUL._SL1500_.jpg",
      desc: "M2 Chip | 8GB RAM | 256GB SSD",
    },  {
      id: 5,
      name: "Dilip kumar",
      price: "1,29,999",
      img: "https://m.media-amazon.com/images/I/71TPda7cwUL._SL1500_.jpg",
      desc: "M2 Chip | 8GB RAM | 256GB SSD",
    },
  ];

  // CATEGORY LIST
  const categories = [
    {
      name: "Electronics",
      img: "https://img.freepik.com/free-photo/modern-stationary-collection-arrangement_23-2149309649.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
      name: "Fashion",
      img: "https://m.media-amazon.com/images/I/61-jBuhtgZL._SX3000_.jpg",
    },
    {
      name: "Home & Kitchen",
      img: "https://m.media-amazon.com/images/I/61CiqVTRBEL._SX3000_.jpg",
    },
  ];



  // SEARCH BAR
  const handleSearchChange = (e) => {
    const val = e.target.value;
    setQuery(val);

    if (!val) {
      setSuggestions([]);
      return;
    }

    const filtered = products
      .filter((p) =>
        p.name.toLowerCase().includes(val.toLowerCase())
      )
      .map((p) => p.name);
    setSuggestions(filtered);
  };

  const handleSelect = (item) => {
    setQuery(item);
    setSuggestions([]);
    const product = products.find((p) => p.name === item);
    setQuickView(product);
  };



  return (
    <div className="home-page">

{/* 
      {/* SEARCH BAR *
      <div className="search-container">
        <input
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

      {/* HERO *
      <section className="hero">
        <img
          src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg"
          alt="banner"
        />
        <div className="hero-text">
          <h1>Shop Smart. Live Better.</h1>
          <p>Best deals from trusted sellers</p>
          <button>Shop Now</button>
        </div>
      </section>
 */}






      {/* CATEGORIES */}
      <section className="categories">
        {categories.map((c, i) => (
          <div className="category-card" key={i}>
            <img src={c.img} alt={c.name} />
            <h3>{c.name}</h3>
          </div>
        ))}
      </section>

      {/* PRODUCTS */}
      <section className="products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {products.map((p) => (
            <div className="product-card" key={p.id}>
              <div className="img-wrap">
                <img src={p.img} alt={p.name} />
                {/* <button
                  className="quick-btn"
                  onClick={() => setQuickView(p)}
                >
                  Quick View */}
                
              </div>

              <h4>{p.name}</h4>
              <p>₹{p.price}</p>
            </div>
          ))}
        </div>
      </section>



{/* 
      {/* QUICK VIEW MODAL *
      {quickView && (
        <div className="modal">
          <div className="modal-box">
            <span className="close" onClick={() => setQuickView(null)}>
              ✕
            </span> */}
{/* 
            <div className="modal-content">
              <img src={quickView.img} alt={quickView.name} />
              <div>
                <h3>{quickView.name}</h3>
                <p className="price">₹{quickView.price}</p>
                <p>{quickView.desc}</p>
                <button className="primary">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
}
