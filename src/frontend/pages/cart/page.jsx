
import React, { useState } from "react";

const initialCart = [
  {
    id: 1,
    title: "Apple iPhone 15 (128 GB)",
    price: 79999,
    image:
      "https://m.media-amazon.com/images/I/71d7rfSl0wL._SX679_.jpg",
    qty: 1,
  },
  {
    id: 2,
    title: "Boat Rockerz 450 Bluetooth Headphone",
    price: 1499,
    image:
      "https://m.media-amazon.com/images/I/61u1VALn6JL._SX679_.jpg",
    qty: 2,
  },
];

export default function Cart({setScreen}) {
  const [cart, setCart] = useState(initialCart);

  const updateQty = (id, type) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              qty:
                type === "inc"
                  ? item.qty + 1
                  : Math.max(1, item.qty - 1),
            }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <div className="cart-page">
      <div className="cart-left">
        <h2>Shopping Cart</h2>

        {cart.length === 0 ? (
          <p className="empty">Your cart is empty</p>
        ) : (
          cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.title} />

              <div className="cart-info">
                <h4>{item.title}</h4>
                <p className="price">₹{item.price.toLocaleString()}</p>

                <div className="cart-actions">
                  {/* <div className="qty-box">
                    <button onClick={() => updateQty(item.id, "dec")}>
                      −
                    </button>
                    <span>{item.qty}</span>
                    <button onClick={() => updateQty(item.id, "inc")}>
                      +
                    </button>
                  </div> */}

                  <button
                    className="remove"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>

              <div className="item-total">
                ₹{(item.price * item.qty).toLocaleString()}
              </div>
            </div>
          ))
        )}
      </div>

      <div className="cart-right">
        <h3>Subtotal ({cart.length} items)</h3>
        <h2>₹{subtotal.toLocaleString()}</h2>

        <button className="checkout-btn" onClick={()=>{setScreen("payment")}}>
          Proceed to Buy
        </button>
      </div>
    </div>
  );
}
