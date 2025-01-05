import React from 'react';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Obtén el año actual

  return (
    <div className="footer-container">
      <p>&copy; {currentYear} Sport Choice. All rights reserved.</p>
      <p className="icons">
        <a href="https://instagram.com" aria-label="Instagram">
          <AiFillInstagram />
        </a>
        <a href="https://twitter.com" aria-label="Twitter">
          <AiOutlineTwitter />
        </a>
      </p>
    </div>
  );
};

export default Footer;
