import React, { useState } from "react";


export default function Payment({ setScreen }) {
  const [method, setMethod] = useState("card");

  const orderSummary = {
    items: 2,
    subtotal: 81498,
    delivery: 0,
    tax: 1500,
  };

  const total =
    orderSummary.subtotal +
    orderSummary.delivery +
    orderSummary.tax;

  return (
    <div className="payment-page">
      {/* LEFT */}
      <div className="payment-left">
        <h1>Checkout</h1>

        {/* Address */}
        <div className="section">
          <h3>1. Delivery Address</h3>
          <p>
            Dilip Kumar <br />
            221B Baker Street <br />
            New Delhi, 110001 <br />
            India
          </p>
        </div>

        {/* Payment Methods */}
        <div className="section">
          <h3>2. Select Payment Method</h3>

          <div
            className={`payment-option ${
              method === "card" ? "active" : ""
            }`}
            onClick={() => setMethod("card")}
          >
            <input
              type="radio"
              checked={method === "card"}
              readOnly
            />
            <span>Credit / Debit Card</span>
          </div>

          {method === "card" && (
            <div className="payment-box">
              <input placeholder="Card Number" />
              <div className="row">
                <input placeholder="MM / YY" />
                <input placeholder="CVV" />
              </div>
              <input placeholder="Name on Card" />
            </div>
          )}

          <div
            className={`payment-option ${
              method === "upi" ? "active" : ""
            }`}
            onClick={() => setMethod("upi")}
          >
            <input
              type="radio"
              checked={method === "upi"}
              readOnly
            />
            <span>UPI (Google Pay / PhonePe)</span>
          </div>

          {method === "upi" && (
            <div className="payment-box">
              <input placeholder="Enter UPI ID" />
            </div>
          )}

          <div
            className={`payment-option ${
              method === "cod" ? "active" : ""
            }`}
            onClick={() => setMethod("cod")}
          >
            <input
              type="radio"
              checked={method === "cod"}
              readOnly
            />
            <span>Cash on Delivery</span>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="payment-right">
        <h3>Order Summary</h3>

        <div className="summary-row">
          <span>Items ({orderSummary.items})</span>
          <span>₹{orderSummary.subtotal}</span>
        </div>

        <div className="summary-row">
          <span>Delivery</span>
          <span>₹{orderSummary.delivery}</span>
        </div>

        <div className="summary-row">
          <span>Tax</span>
          <span>₹{orderSummary.tax}</span>
        </div>

        <hr />

        <div className="summary-row total">
          <span>Order Total</span>
          <span>₹{total}</span>
        </div>

        <button className="pay-btn" onClick={() => {setScreen("myorder")}}>
          Pay ₹{total}
        </button>

        <p className="secure">
          🔒 Secure transaction
        </p>
      </div>
    </div>
  );
}
