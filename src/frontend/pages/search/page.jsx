import  { useState } from "react";


export default function SearchBar() {
  const products = [
    "iPhone 15",
    "iPhone 15 Pro",
    "Noise Smartwatch",
    "Nike Shoes",
    "Adidas Sneakers",
    "Boat Headphones",
    "Samsung Galaxy S23",
    "MacBook Air M2",
  ];

  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (!value) {
      setSuggestions([]);
      return;
    }

    const filtered = products.filter((p) =>
      p.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filtered);
  };

  const handleSelect = (item) => {
    setQuery(item);
    setSuggestions([]);
    alert("Selected: " + item); // Replace with search action
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={handleChange}
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
  );
}
