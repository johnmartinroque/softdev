import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Buffer } from "buffer";
import process from "process";
import Home from "./pages/Home";
import Header from "./components/others/Header";

window.Buffer = Buffer;
window.process = process;

function App() {
  return (
    <div className="bg-gray-800 min-h-screen">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
