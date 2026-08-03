"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">

        <a href="/" className="navbar-logo">
          <span>SAUNG</span>
          <strong>KASUNDA</strong>
        </a>

        <nav className={`navbar-menu ${isOpen ? "active" : ""}`}>
          <a href="#beranda" onClick={() => setIsOpen(false)}>
            Beranda
          </a>

          <a href="#profil" onClick={() => setIsOpen(false)}>
            Profil
          </a>

          <a href="#kegiatan" onClick={() => setIsOpen(false)}>
            Kegiatan
          </a>

          <a href="#galeri" onClick={() => setIsOpen(false)}>
            Galeri
          </a>

          <a href="#kontak" onClick={() => setIsOpen(false)}>
            Kontak
          </a>
        </nav>

        <button
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  );
}