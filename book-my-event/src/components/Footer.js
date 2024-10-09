// src/components/Footer.js
import React from 'react';
import '../css/style.css'; // Import CSS
import '../css/Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                {/* Copyright */}
                <div className="footer-copyright">
                    <p>&copy; 2024 BookMyEvent. Tous droits réservés.</p>
                </div>

                {/* Social Media */}
                <div className="footer-social-media">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://firebasestorage.googleapis.com/v0/b/bookmyevent-piross.appspot.com/o/images%2Finstagram%20logo.png?alt=media&token=b60a30bb-5c0d-49f6-8b0c-b7bcc5568317" 
                        alt="Instagram" 
                        className="instagram-icon" />
                    </a>
                    
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://firebasestorage.googleapis.com/v0/b/bookmyevent-piross.appspot.com/o/images%2Flinkedin%20logopng.png?alt=media&token=920eb541-ad19-40ee-a83d-117ab17defb8" 
                        alt="LinkedIn" 
                        className="linkedin-icon"/> 
                    </a>
                </div>

                {/* Newsletter Signup */}
                <div className="footer-newsletter">
                    <p>Inscrivez-vous à notre newsletter :</p>
                    <form action="/subscribe" method="post">
                        <input type="email" placeholder="Votre adresse email" required />
                        <button type="submit">S'inscrire</button>
                    </form>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
