import React from "react";

export default function AdminDashboard() {
  const stats = [
    { title: "Total Orders", value: "12,430" },
    { title: "Total Users", value: "8,215" },
    { title: "Revenue", value: "₹1,28,40,000" },
    { title: "Pending Orders", value: "124" },
  ];

  const recentOrders = [
    {
      id: "OD12345",
      customer: "Rahul Sharma",
      amount: "₹79,999",
      status: "Delivered",
    },
    {
      id: "OD12346",
      customer: "Amit Verma",
      amount: "₹1,499",
      status: "Pending",
    },
    {
      id: "OD12347",
      customer: "Neha Singh",
      amount: "₹2,999",
      status: "Cancelled",
    },
  ];

  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <h2>Admin Panel</h2>
        <nav>
          <button className="active">Dashboard</button>
          <button>Orders</button>
          <button>Products</button>
          <button>Users</button>
          <button>Payments</button>
          <button>Reports</button>
          <button className="logout">Logout</button>
        </nav>
      </aside>

      {/* Main */}
      <main className="admin-main">
        <h1>Dashboard Overview</h1>

        {/* Stats */}
        <div className="stats-grid">
          {stats.map((s, i) => (
            <div className="stat-card" key={i}>
              <p>{s.title}</p>
              <h3>{s.value}</h3>
            </div>
          ))}
        </div>

        {/* Recent Orders */}
        <div className="card">
          <h3>Recent Orders</h3>

          <table className="orders-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((o) => (
                <tr key={o.id}>
                  <td>{o.id}</td>
                  <td>{o.customer}</td>
                  <td>{o.amount}</td>
                  <td className={o.status.toLowerCase()}>
                    {o.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
