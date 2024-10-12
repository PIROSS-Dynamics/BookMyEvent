import React, { useState } from 'react';
import '../css/style.css'; // Import CSS
import '../css/Header.css';

const Header = () => {

  // Manage menu open/close state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle menu open/close
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <a href="/">
            <img src="/images/BME logo v2.png" alt="BookMyEvent Logo" />
          </a>
        </div>

        {/* Menu toggle for small screens (hamburger icon) */}
        <div className="menu-toggle" onClick={toggleMenu}>
          <img 
            src="https://firebasestorage.googleapis.com/v0/b/bookmyevent-piross.appspot.com/o/images%2Fmenu%20icon%20blanc.png?alt=media&token=4b934ce4-89db-4924-8f50-d9ec826a4830" 
            alt="Menu" 
            className="menu-icon"
          />
        </div>

        {/* Phone menu only visible when isMenuOpen is true */}
        {isMenuOpen && (
          <ul className="phone-menu">
            <li><a href="/">Accueil</a></li>
            <li><a href="/events">Événements</a></li>
            <li><a href="/about">À Propos</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        )}

        {/* Navigation Menu for desktop */}
        <nav>
          <ul className= "nav-links">
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
