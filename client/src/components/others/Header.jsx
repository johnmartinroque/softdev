import React from "react";

function Header({ isLoggedIn, onLogout }) {
  return (
    <header className="bg-[#faf7f4] border-b border-[#e6dfd8] shadow-sm">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-[#1e1e1e] font-['Playfair_Display']">
          Ta-do!
        </h1>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          {!isLoggedIn && (
            <>
              <button
                className="px-4 py-2 text-[#1e1e1e] font-medium rounded-lg border border-[#d9d2cb] hover:bg-[#eae4de] transition-all"
                onClick={() => (window.location.href = "/login")}
              >
                Login
              </button>
              <button
                className="px-4 py-2 bg-[#0f5132] text-white font-medium rounded-lg hover:bg-[#0c3f27] transition-all"
                onClick={() => (window.location.href = "/register")}
              >
                Register
              </button>
            </>
          )}
          {isLoggedIn && (
            <button
              className="px-4 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-all"
              onClick={onLogout}
            >
              Logout
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
