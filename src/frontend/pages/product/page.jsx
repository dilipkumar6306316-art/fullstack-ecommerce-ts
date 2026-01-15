import  { useState } from "react";


export default function SellerProducts() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const [form, setForm] = useState({
    name: "",
    price: "",
    stock: "",
    category: "",
    image: "",
    status: "Active",
  });

  const handleAddProduct = (e) => {
    e.preventDefault();

    if (!form.name || !form.price || !form.stock || !form.category) {
      alert("All fields are required");
      return;
    }

    setProducts([
      ...products,
      { ...form, id: Date.now() },
    ]);

    setForm({
      name: "",
      price: "",
      stock: "",
      category: "",
      image: "",
      status: "Active",
    });
  };

  const filteredProducts = products.filter((p) => {
    const matchSearch = p.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchCategory =
      category === "All" || p.category === category;
    return matchSearch && matchCategory;
  });

  return (
    <div className="seller-products-page">
      <h1>My Products</h1>

      {/* ADD PRODUCT */}
      <div className="card">
        <h3>Add New Product</h3>

        <form className="product-form" onSubmit={handleAddProduct}>
          <input
            placeholder="Product Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <input
            placeholder="Price"
            type="number"
            value={form.price}
            onChange={(e) =>
              setForm({ ...form, price: e.target.value })
            }
          />

          <input
            placeholder="Stock Quantity"
            type="number"
            value={form.stock}
            onChange={(e) =>
              setForm({ ...form, stock: e.target.value })
            }
          />

          <select
            value={form.category}
            onChange={(e) =>
              setForm({ ...form, category: e.target.value })
            }
          >
            <option value="">Select Category</option>
            <option>Electronics</option>
            <option>Fashion</option>
            <option>Home</option>
          </select>

          <input
            placeholder="Image URL"
            value={form.image}
            onChange={(e) =>
              setForm({ ...form, image: e.target.value })
            }
          />

          {form.image && (
            <img
              src={form.image}
              alt="preview"
              className="preview"
            />
          )}

          <select
            value={form.status}
            onChange={(e) =>
              setForm({ ...form, status: e.target.value })
            }
          >
            <option>Active</option>
            <option>Inactive</option>
          </select>

          <button type="submit" className="primary">
            Add Product
          </button>
        </form>
      </div>

      {/* VIEW PRODUCTS */}
      <div className="card">
        <h3>Product List</h3>

        <div className="filters">
          <input
            placeholder="Search product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>All</option>
            <option>Electronics</option>
            <option>Fashion</option>
            <option>Home</option>
          </select>
        </div>

        <table className="product-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {filteredProducts.length === 0 ? (
              <tr>
                <td colSpan="4">No products found</td>
              </tr>
            ) : (
              filteredProducts.map((p) => (
                <tr key={p.id}>
                  <td>{p.name}</td>
                  <td>₹{p.price}</td>
                  <td className={p.stock < 5 ? "low" : ""}>
                    {p.stock}
                  </td>
                  <td
                    className={
                      p.status === "Active"
                        ? "active"
                        : "inactive"
                    }
                  >
                    {p.status}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
