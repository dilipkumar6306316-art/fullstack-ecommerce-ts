import  { useState } from "react";
import MyOrders from "../myorder/page";


export default function UserProfile() {
  const [section, setSection] = useState("profile");

  const user = {
    name: "Dilip Kumar",
    email: "dilip@gmail.com",
    phone: "+91 9876543210",
  };

  return (
    <div className="account-page">
      {/* Sidebar */}
      <div className="account-sidebar">
        <h3>Your Account</h3>

        <button
          className={section === "profile" ? "active" : ""}
          onClick={() => setSection("profile")}
        >
          Profile Info
        </button>

        <button
          className={section === "orders" ? "active" : ""}
          onClick={() => setSection("orders")}
        >
          Your Orders
        </button>

        <button
          className={section === "address" ? "active" : ""}
          onClick={() => setSection("address")}
        >
          Addresses
        </button>

        <button
          className={section === "security" ? "active" : ""}
          onClick={() => setSection("security")}
        >
          Login & Security
        </button>

        <button className="logout">Logout</button>
      </div>

      {/* Content */}
      <div className="account-content">
        {section === "profile" && (
          <>
            <h2>Profile Information</h2>

            <div className="info-row">
              <span>Name</span>
              <p>{user.name}</p>
            </div>

            <div className="info-row">
              <span>Email</span>
              <p>{user.email}</p>
            </div>

            <div className="info-row">
              <span>Mobile</span>
              <p>{user.phone}</p>
            </div>

            <button className="edit-btn">Edit Profile</button>
          </>
        )}

        {section === "orders" &&  <MyOrders></MyOrders>}












        {section === "address" && (
          <>
            <h2>Your Addresses</h2>
            <p>No saved addresses.</p>
            <button className="edit-btn">Add Address</button>
          </>
        )}

        {section === "security" && (
          <>
            <h2>Login & Security</h2>
            <p>Change password, mobile number, or email.</p>
            <button className="edit-btn">Change Password</button>
          </>
        )}
      </div>
    </div>
  );
}
