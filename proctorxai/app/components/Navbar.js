'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <Link href="/">
            <span className="logo-text">Proctor X</span>
          </Link>
        </div>

        {/* Navigation Links - Desktop */}
        <div className="nav-links">
          <Link href="/pricing" className="nav-item">
            <span>Pricing</span>
            <span className="underline-effect"></span>
          </Link>
          <Link href="/about" className="nav-item">
            <span>About Us</span>
            <span className="underline-effect"></span>
          </Link>
          <Link href="/support" className="nav-item">
            <span>Support</span>
            <span className="underline-effect"></span>
          </Link>
        </div>

        {/* Login Button */}
        <div className="login-button-container">
          <Link href="/login">
            <button className="login-button">Login</button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="mobile-menu-button">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <span className="menu-icon">✕</span>
            ) : (
              <span className="menu-icon">☰</span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <Link href="/pricing" className="mobile-nav-item" onClick={() => setIsMenuOpen(false)}>
            Pricing
          </Link>
          <Link href="/about" className="mobile-nav-item" onClick={() => setIsMenuOpen(false)}>
            About Us
          </Link>
          <Link href="/support" className="mobile-nav-item" onClick={() => setIsMenuOpen(false)}>
            Support
          </Link>
          <Link href="/login" onClick={() => setIsMenuOpen(false)}>
            <button className="mobile-login-button">Login</button>
          </Link>
        </div>
      )}
    </nav>
  );
}