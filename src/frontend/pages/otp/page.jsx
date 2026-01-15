import React, { useState } from "react";


export default function OtpLogin() {
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");




  const sendOtp = () => {
    if (phone.length !== 10) {
      setError("Enter valid 10 digit mobile number");
      return;
    }

    setError("");
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setStep(2);
    }, 1500); // API simulation
  };



  const verifyOtp = () => {
    if (otp.length !== 6) {
      setError("Enter 6 digit OTP");
      return;
    }

    setError("");
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Login Successful 🎉");
    }, 1500);
  };


  
  return (
    <div className="otp-page">
      <div className="otp-box">
        <h1>{step === 1 ? "Sign in" : "Verify OTP"}</h1>

        {step === 1 && (
          <>
            <label>Mobile number</label>
            <div className="phone-input">
              <span>+91</span>
              <input
                type="tel"
                placeholder="Enter mobile number"
                value={phone}
                onChange={(e) =>
                  setPhone(e.target.value.replace(/\D/g, ""))
                }
                maxLength="10"
              />
            </div>

            {error && <p className="error">{error}</p>}

            <button
              className="primary-btn"
              onClick={sendOtp}
              disabled={loading}
            >
              {loading ? "Sending OTP..." : "Continue"}
            </button>

            <p className="info">
              We will send you a One Time Password (OTP)
            </p>
          </>
        )}

        {step === 2 && (
          <>
            <p className="otp-info">
              OTP sent to <b>+91 {phone}</b>
            </p>

            <label>Enter OTP</label>
            <input
              type="text"
              className="otp-input"
              placeholder="6 digit OTP"
              value={otp}
              onChange={(e) =>
                setOtp(e.target.value.replace(/\D/g, ""))
              }
              maxLength="6"
            />

            {error && <p className="error">{error}</p>}

            <button
              className="primary-btn"
              onClick={verifyOtp}
              disabled={loading}
            >
              {loading ? "Verifying..." : "Verify & Login"}
            </button>

            <button
              className="link-btn"
              onClick={() => setStep(1)}
            >
              Change mobile number
            </button>
          </>
        )}
      </div>
    </div>
  );
}
