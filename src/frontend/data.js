// Products + Categories + Sort Options
export const categories = [
  { id: 1, name: "Electronics" },
  { id: 2, name: "Fashion" },
  { id: 3, name: "Home & Kitchen" },
];

export const sortOptions = [
  { id: 1, name: "Price: Low to High", key: "priceLow" },
  { id: 2, name: "Price: High to Low", key: "priceHigh" },
  { id: 3, name: "Popularity", key: "popularity" },
];

export const products = [
  { id: 1, name: "iPhone 15", category: 1, price: 79999, popularity: 90, img: "https://m.media-amazon.com/images/I/71d7rfSl0wL._SL1500_.jpg", desc: "128GB | A16 Bionic | 48MP Camera" },
  { id: 2, name: "Noise Smartwatch", category: 1, price: 2999, popularity: 80, img: "https://m.media-amazon.com/images/I/61TapeOXotL._SL1500_.jpg", desc: "AMOLED Display | 7 Days Battery" },
  { id: 3, name: "Nike Shoes", category: 2, price: 4499, popularity: 85, img: "https://m.media-amazon.com/images/I/61utX8kBDlL._UL1500_.jpg", desc: "Lightweight | Running Shoes" },
  { id: 4, name: "Samsung Galaxy S23", category: 1, price: 65999, popularity: 75, img: "https://m.media-amazon.com/images/I/61qA6zX1eJL._SL1500_.jpg", desc: "Snapdragon 8 | 8GB RAM | 128GB Storage" },
  { id: 5, name: "MacBook Air M2", category: 1, price: 129999, popularity: 95, img: "https://m.media-amazon.com/images/I/71TPda7cwUL._SL1500_.jpg", desc: "M2 Chip | 8GB RAM | 256GB SSD" },
  { id: 6, name: "Adidas Sneakers", category: 2, price: 4999, popularity: 70, img: "https://m.media-amazon.com/images/I/61eLTx2dnFL._SL1500_.jpg", desc: "Comfortable Running Shoes" },
  { id: 7, name: "Boat Headphones", category: 1, price: 1299, popularity: 60, img: "https://m.media-amazon.com/images/I/71RNsR2BmtL._SL1500_.jpg", desc: "Bass Boost | Wireless" },
  { id: 8, name: "Home Coffee Maker", category: 3, price: 2999, popularity: 50, img: "https://m.media-amazon.com/images/I/61G5Ksc-s6L._SL1500_.jpg", desc: "Automatic | Easy Clean" },
];
