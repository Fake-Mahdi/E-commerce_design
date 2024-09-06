import React from 'react';
import '../../styles/style.css';

const FeaturesSection = () => {
  return (
    <section style={{ backgroundColor: 'black', color: 'white', marginTop: '15px' }}>
      <div className="container-fluid features">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div className="text-center">
              <h4>LIVRAISON GRATUITE</h4>
              <p style={{ color: 'rgb(179, 179, 179)' }}>à partir de 3000 DHs</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div className="text-center">
              <h4>GARANTIE</h4>
              <p style={{ color: 'rgb(179, 179, 179)' }}>12 Mois</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div className="text-center">
              <h4>24/7 SUPPORT</h4>
              <p style={{ color: 'rgb(179, 179, 179)' }}>Service support rapid 24/7</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div className="text-center">
              <h4>REMISES</h4>
              <p style={{ color: 'rgb(179, 179, 179)' }}>jusqu'à 40% pour nos clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;