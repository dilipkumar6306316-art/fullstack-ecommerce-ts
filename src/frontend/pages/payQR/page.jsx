import  { useState } from "react";


export default function PaymentModal({ amount, onClose }) {
  
  const [status, setStatus] = useState("pending");

  const handlePaymentSuccess = () => {
    setStatus("success");
    setTimeout(() => {
      alert("Payment Successful ✅");
      onClose();
    }, 1500);
  };

  return (
    <div className="payment-overlay">
      <div className="payment-box">
        <span className="close" onClick={onClose}>✕</span>

  

        <h2>Complete Your Payment</h2>
        <p className="amount">Amount: ₹{amount}</p>

        {status === "pending" && (
          <>
            <div className="qr-section">
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=upi://pay?pa=merchant@upi&pn=Marketplace&am=${amount}&cu=INR`}
                alt="UPI QR"
              />
              <p>Scan using any UPI app</p>
            </div>

            <button className="confirm-btn" onClick={handlePaymentSuccess}>
              I Have Paid
            </button>
          </>
        )}

        {status === "success" && (
          <div className="success">
            <h3>Payment Successful 🎉</h3>
            <p>Thank you for shopping with us.</p>
          </div>
        )}
      </div>
    </div>
  );
}
