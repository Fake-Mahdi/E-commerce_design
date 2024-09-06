import React from 'react';
import '../../styles/style.css';

const Footer = () => {
  return (
    <section>
      <div className="container">
        <footer
          className="text-left"
          style={{ color: 'rgb(172, 172, 172)', fontFamily: "'Poppins', sans-serif" }}
        >
          <p>&copy; 2023 Mahdi Boukhouima - All rights reserved</p>
          <p className="name">Mahdi Boukhouima</p>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
