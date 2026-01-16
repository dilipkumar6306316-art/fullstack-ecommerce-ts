import { useState } from "react";


export default function HomePageList({addToCart}) {
  const [quickView, setQuickView] = useState(null);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

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
      .filter((p) => p.name.toLowerCase().includes(val.toLowerCase()))
      .map((p) => p.name);

    setSuggestions(filtered);
  };

  const handleSelect = (item) => {
    setQuery(item);
    setSuggestions([]);
    const product = products.find((p) => p.name === item);
    setQuickView(product);
  };

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="home-list-page">
      {/* SEARCH */}
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


      

      {/* PRODUCTS LIST */}
      <section className="product-list">
        {filteredProducts.length === 0 && (
          <p className="no-products">No products found.</p>
        )}
        {filteredProducts.map((p) => (
          <div className="product-row" key={p.id}>
            <div className="img-wrap">
              <img src={p.img} alt={p.name} />
              <button className="quick-btn" onClick={() => setQuickView(p)}>
                Quick View
              </button>
            </div>
            <div className="details">
              <h3>{p.name}</h3>
              <p className="price">₹{p.price}</p>
              <p>{p.desc}</p>
              <button className="primary" onClick={addToCart}>Add to Cart</button>
            </div>
          </div>
        ))}
      </section>

      {/* QUICK VIEW MODAL */}
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
                <button className="primary">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
