import React from "react";


export default function Hom() {
  const categories = [
    {
      name: "Electronics",
      img: "https://m.media-amazon.com/images/I/71pL+1Z2cXS._SX3000_.jpg",
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

  const products = [
    {
      name: "iPhone 15",
      price: "79,999",
      img: "https://m.media-amazon.com/images/I/71d7rfSl0wL._SL1500_.jpg",
    },
    {
      name: "Noise Smartwatch",
      price: "2,999",
      img: "https://m.media-amazon.com/images/I/61TapeOXotL._SL1500_.jpg",
    },
    {
      name: "Nike Shoes",
      price: "4,499",
      img: "https://m.media-amazon.com/images/I/61utX8kBDlL._UL1500_.jpg",
    },
  ];

  return (
    <div className="home">
      {/* HERO */}
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
          {products.map((p, i) => (
            <div className="product-card" key={i}>
              <img src={p.img} alt={p.name} />
              <h4>{p.name}</h4>
              <p>₹{p.price}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
