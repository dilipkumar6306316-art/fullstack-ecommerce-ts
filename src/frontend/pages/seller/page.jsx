import  { useState } from "react";


export default function SellerDashboard() {
  const [tab, setTab] = useState("dashboard");

  const stats = [
    { title: "Total Sales", value: "₹4,82,500" },
    { title: "Orders", value: "326" },
    { title: "Products", value: "48" },
    { title: "Pending Orders", value: "12" },
  ];

  const orders = [
    {
      id: "OD78945",
      product: "iPhone 15",
      qty: 1,
      amount: "₹79,999",
      status: "To Ship",
    },
    {
      id: "OD78946",
      product: "Boat Headphones",
      qty: 2,
      amount: "₹2,998",
      status: "Delivered",
    },
  ];

  const products = [
    { id: 1, name: "iPhone 15", stock: 12, price: "₹79,999" },
    { id: 2, name: "Boat Rockerz 450", stock: 3, price: "₹1,499" },
  ];

  return (
    <div className="seller-layout">
      {/* Sidebar */}
      <aside className="seller-sidebar">
        <h2>Seller Panel</h2>

        <button
          className={tab === "dashboard" ? "active" : ""}
          onClick={() => setTab("dashboard")}
        >
          Dashboard
        </button>

        <button
          className={tab === "orders" ? "active" : ""}
          onClick={() => setTab("orders")}
        >
          Orders
        </button>

        <button
          className={tab === "products" ? "active" : ""}
          onClick={() => setTab("products")}
        >
          Products
        </button>

        <button
          className={tab === "earnings" ? "active" : ""}
          onClick={() => setTab("earnings")}
        >
          Earnings
        </button>

        <button className="logout">Logout</button>
      </aside>

      {/* Main */}
      <main className="seller-main">
        {tab === "dashboard" && (
          <>
            <h1>Seller Dashboard</h1>

            <div className="stats-grid">
              {stats.map((s, i) => (
                <div className="stat-card" key={i}>
                  <p>{s.title}</p>
                  <h3>{s.value}</h3>
                </div>
              ))}
            </div>
          </>
        )}

        {tab === "orders" && (
          <>
            <h1>Orders to Fulfill</h1>

            <table className="seller-table">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Product</th>
                  <th>Qty</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((o) => (
                  <tr key={o.id}>
                    <td>{o.id}</td>
                    <td>{o.product}</td>
                    <td>{o.qty}</td>
                    <td>{o.amount}</td>
                    <td className={o.status === "Delivered" ? "delivered" : "toship"}>
                      {o.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}

        {tab === "products" && (
          <>
            <h1>My Products</h1>

            <table className="seller-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Stock</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((p) => (
                  <tr key={p.id}>
                    <td>{p.name}</td>
                    <td className={p.stock < 5 ? "low-stock" : ""}>
                      {p.stock}
                    </td>
                    <td>{p.price}</td>
                    <td>
                      <button>Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}

        {tab === "earnings" && (
          <>
            <h1>Earnings & Payouts</h1>
            <p>Total Earnings: <b>₹4,82,500</b></p>
            <p>Next Payout: <b>₹38,200</b> (15 Jan)</p>
          </>
        )}
      </main>
    </div>
  );
}
