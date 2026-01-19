import React, { useState } from "react";


export default function Login({setScreen}) {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      alert("Please fill all fields");
      return;
    }

    // 👉 API call yahan lagegi
    console.log("Login Data:", form);
    alert("Login Successful");
  };






  
  return (
    <div className="login-page">
      <div style={{borderRadius:"16px"}} className="login-box">
        <h1>Sign in</h1>

        <form onSubmit={handleSubmit}>
          <label>Email or mobile phone number</label>
          <input
            type="text"
            name="email"
            value={form.email}
            onChange={handleChange}
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />


            <br />  <br />

          <button type="submit" style={{ backgroundColor: "#19314b", border: "1px solid #28261f", padding: "10px", marginTop: "15px", cursor: "pointer", fontWeight: "600", color: "white" }} className="login-btn" onClick={()=>{setScreen("otppage")}}>
            Sign in
          </button>
        </form>

        <hr />
        <br /><br />
        
      </div>
    </div>
  );
}




