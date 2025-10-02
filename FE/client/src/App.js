import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import { Buffer } from "buffer";
import process from "process";

window.Buffer = Buffer;
window.process = process;

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/products" element={<Products />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
