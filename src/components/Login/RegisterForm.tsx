// src/components/Register/RegisterForm.jsx
import { useState } from 'react';
import '../Login/Login.css';
import { registerHandler } from './RegisterHandler.ts';

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    middleName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: { target: { id: any; value: any; }; }) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (formData.password !== formData.confirmPassword) {
    alert("Passwords do not match!");
    return;
  }
  try {
    await registerHandler(formData);
    alert("✅ Registration successful!");
  } catch (err: any) {
    console.error("❌ Firebase Registration Error:", err);
    alert("❌ " + (err?.code || err?.message || "Unknown error"));
  }
};


  return (
    <div className="login-container">
      <div className="login-form reg">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <label className="title reg">Full Name</label>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input className="form-input" type="text" id="lastName" onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input className="form-input" type="text" id="firstName" onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="middleName">Middle Name (Optional)</label>
              <input className="form-input" type="text" id="middleName" onChange={handleChange} />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input className="form-input" type="text" id="username" onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input className="form-input" type="email" id="email" onChange={handleChange} required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input className="form-input" type="password" id="password" onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input className="form-input" type="password" id="confirmPassword" onChange={handleChange} required />
            </div>
          </div>

          <button className="login-button" type="submit">Register</button>
        </form>

        <p>Or register using</p>
        <hr className="border" />
        <div className="social-login"></div>
        <p className="login-link">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}
