import React from 'react';
import '../../styles/style.css';

const Navbar = () => {
  return (
    <div className="nav nav hidden-xs hidden-md" style={{ width: '100%', backgroundColor: 'black', color: 'white', height: '50px', display: 'flex', alignItems: 'center', paddingLeft: '150px' }}>
      <div style={{ padding: '10px' }}>
        <span style={{ fontWeight: 'bold' }}>EMAIL: </span>
        <span style={{ fontWeight: 'bold' }}>Mystirio.02@gmail.com</span>
      </div>
      <div style={{ padding: '10px' }}>
        <span style={{ fontWeight: 'bold' }}>PHONE: </span>
        <span style={{ fontWeight: 'bold' }}>+212 770208201</span>
      </div>
    </div>
  );
};

export default Navbar;