// src/components/Header.js
import React from 'react';
import '../css/style.css'; // Import CSS
import '../css/Header.css';

const Header = () => {
  return (
    <header>
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <a href="/">
            <img src="/images/BME logo v2.png" alt="BookMyEvent Logo" />
          </a>
        </div>

        {/* Navigation Menu */}
        <nav>
          <ul className="nav-links">
            <li><a href="/">Accueil</a></li>
            <li><a href="/events">Événements</a></li>
            <li><a href="/about">À Propos</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>

        {/* Connexion / Inscription Button */}
        <div className="header-actions">
          <a href="/login" className="btn">Connexion / Inscription</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
