import React from 'react';
import '../../styles/style.css';
import { Link } from 'react-router-dom';
function Navbar() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#togle" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }} href="#">StyleSiren</a>
          </div>
  
          <div className="collapse navbar-collapse" id="togle">
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="/">HOME</Link></li>
              <li><Link to="/Store">STORE</Link></li>

            </ul>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Navbar;