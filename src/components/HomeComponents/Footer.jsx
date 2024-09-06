import React from 'react';
import '../../styles/style.css';

function Footer() {
  return (
    <footer style={{ backgroundColor: 'black', padding: '20px',marginTop:'20px' }}>
      <div className="container" style={{ backgroundColor: 'black' }}>
        <div className="row">
          <div className="col-lg-12 text-center">
            <p style={{ color: 'white', margin: 0 }}>&copy; 2024 StyleSiren. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
  
  export default Footer;