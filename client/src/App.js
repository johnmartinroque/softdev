import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import { Buffer } from "buffer";
import process from "process";
import Home from "./pages/Home";

window.Buffer = Buffer;
window.process = process;

function App() {
  return (
    <div className="bg-gray-800">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
