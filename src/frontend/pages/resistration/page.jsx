import React, { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.mobile ||
      !form.password ||
      !form.confirmPassword
    ) {
      setError("All fields are required");
      return;
    }

    if (form.mobile.length !== 10) {
      setError("Enter valid 10 digit mobile number");
      return;
    }

    if (form.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");
    console.log("Registration Data:", form);
    alert("Account Created Successfully 🎉");
  };

  return (
    <div className="register-page">
      <div style={{borderRadius:"16px"}} className="register-box">
        <h1>Create account</h1>

        <form onSubmit={handleSubmit}>
          <label>Your name</label>
          <input
            type="text"
            name="name"
            placeholder="First and last name"
            value={form.name}
            onChange={handleChange}
          />

          <label>Mobile number</label>
          <div className="phone-input">
            <span>+91</span>
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile number"
              value={form.mobile}
              onChange={(e) =>
                setForm({
                  ...form,
                  mobile: e.target.value.replace(/\D/g, ""),
                })
              }
              maxLength="10"
            />
          </div>

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="At least 6 characters"
            value={form.password}
            onChange={handleChange}
          />

          <label>Re-enter password</label>
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
          />

          {error && <p className="error">{error}</p>}

            <br />  <br />

        <button type="submit" style={{ backgroundColor: "#19314b", border: "1px solid #28261f", padding: "10px", marginTop: "15px", cursor: "pointer", fontWeight: "600", color: "white" }} className="login-btn"  >
            Get OTP
          </button>
        </form>

      
        <hr />
        <br />

        <p className="signin-link">
          Already have an account? <span>Sign in</span>
        </p>
      </div>
    </div>
  );
}
