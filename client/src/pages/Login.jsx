"use client";
import React, { useState } from "react";
import { login } from "../api/authApi";
import { LogIn } from "lucide-react";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const data = await login(email, password);
    if (data.token) {
      localStorage.setItem("token", data.token);
      if (onLogin) onLogin();
      window.location.href = "/"; // Redirect after login
    } else {
      setError(data.message || "Login failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh]">
      <div className="w-full max-w-md bg-white border border-[#e6dfd8] rounded-2xl shadow-sm p-8">
        <h2 className="text-3xl font-bold text-[#1e1e1e] font-['Playfair_Display'] text-center mb-6">
          Welcome Back
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

          <button
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#0f5132] text-white rounded-lg hover:bg-[#0c3f27] transition-all font-medium"
            type="submit"
          >
            <LogIn className="w-4 h-4" />
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
