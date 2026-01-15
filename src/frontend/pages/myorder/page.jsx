import { useState } from "react";


const ordersData = [
  {
    orderId: "OD123456789",
    date: "12 Jan 2026",
    status: "Delivered",
    total: 82998,
    items: [
      {
        id: 1,
        title: "Apple iPhone 15 (128 GB)",
        price: 79999,
        image:
          "https://m.media-amazon.com/images/I/71d7rfSl0wL._SX679_.jpg",
      },
      {
        id: 2,
        title: "Apple USB-C Cable",
        price: 2999,
        image:
          "https://m.media-amazon.com/images/I/61l9ppRIiqL._SX679_.jpg",
      },
    ],
  },
  {
    orderId: "OD987654321",
    date: "05 Jan 2026",
    status: "Cancelled",
    total: 1499,
    items: [
      {
        id: 3,
        title: "Boat Rockerz 450 Headphone",
        price: 1499,
        image:
          "https://m.media-amazon.com/images/I/61u1VALn6JL._SX679_.jpg",
      },
    ],
  },
];







export default function MyOrders() {
  const [filter, setFilter] = useState("All");

  const filteredOrders =
    filter === "All"
      ? ordersData
      : ordersData.filter((o) => o.status === filter);

  return (
    <div className="orders-page">
      <h1>My Orders</h1>

      {/* Filters */}
      <div className="order-tabs">
        {["All", "Delivered", "Cancelled"].map((tab) => (
          <button
            key={tab}
            className={filter === tab ? "active" : ""}
            onClick={() => setFilter(tab)}
          >
            {tab}
          </button>
        ))}
      </div>



      {/* Orders List */}
      {filteredOrders.length === 0 ? (
        <p className="empty">No orders found</p>
      ) : (
        filteredOrders.map((order) => (
          <div className="order-card" key={order.orderId}>
            {/* Order Header */}
            <div className="order-header">
              <div>
                <span>Order ID</span>
                <p>{order.orderId}</p>
              </div>
              <div>
                <span>Order Date</span>
                <p>{order.date}</p>
              </div>
              <div>
                <span>Total</span>
                <p>₹{order.total.toLocaleString()}</p>
              </div>
              <div>
                <span>Status</span>
                <p
                  className={
                    order.status === "Delivered"
                      ? "delivered"
                      : "cancelled"
                  }
                >
                  {order.status}
                </p>
              </div>
            </div>

            {/* Items */}
            {order.items.map((item) => (
              <div className="order-item" key={item.id}>
                <img src={item.image} alt={item.title} />

                <div className="item-info">
                  <h4>{item.title}</h4>
                  <p>₹{item.price.toLocaleString()}</p>
                </div>

                <div className="item-actions">
                  <button>Buy Again</button>
                  <button className="link">View Details</button>
                </div>
              </div>
            ))}

            {/* Footer Actions */}
            <div className="order-footer">
              <button className="secondary">Download Invoice</button>
              {order.status === "Delivered" && (
                <button className="primary">Track Package</button>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
}
