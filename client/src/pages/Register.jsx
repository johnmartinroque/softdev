import React, { useState } from "react";
import { register, login } from "../api/authApi";
import { UserPlus } from "lucide-react";

export default function Register({ onRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    const data = await register(email, password);
    if (data.message === "User registered") {
      // Automatically log in after successful registration
      const loginData = await login(email, password);
      if (loginData.token) {
        localStorage.setItem("token", loginData.token);
        if (onRegister) onRegister();
        window.location.href = "/"; // Redirect after login
      } else {
        setSuccess(
          "Registration successful, but login failed. Please try logging in."
        );
      }
    } else {
      setError(data.message || "Registration failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh]">
      <div className="w-full max-w-md bg-white border border-[#e6dfd8] rounded-2xl shadow-sm p-8">
        <h2 className="text-3xl font-bold text-[#1e1e1e] font-['Playfair_Display'] text-center mb-6">
          Create Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="w-full px-4 py-3 rounded-lg border border-[#d9d2cb] bg-[#faf7f4] text-[#1e1e1e] focus:outline-none focus:ring-2 focus:ring-[#0f5132] focus:border-[#0f5132] transition-all"
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="w-full px-4 py-3 rounded-lg border border-[#d9d2cb] bg-[#faf7f4] text-[#1e1e1e] focus:outline-none focus:ring-2 focus:ring-[#0f5132] focus:border-[#0f5132] transition-all"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && (
            <div className="text-red-600 text-sm font-medium text-center">
              {error}
            </div>
          )}
          {success && (
            <div className="text-green-600 text-sm font-medium text-center">
              {success}
            </div>
          )}
          <button
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#0f5132] text-white rounded-lg hover:bg-[#0c3f27] transition-all font-medium"
            type="submit"
          >
            <UserPlus className="w-4 h-4" />
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
