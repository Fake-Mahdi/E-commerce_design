import React from 'react';
import { useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
import '../../styles/style.css';

const Icone = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/cart');
  };

  return (
    <button className="sticky-cart-button" onClick={handleClick}>
      <i className="fas fa-shopping-cart"></i> {/* Font Awesome cart icon */}
    </button>
  );
};

export default Icone;
