import React from 'react';
import '../../styles/style.css';

const InfoSection = () => {
  return (
    <section style={{ marginTop: '15px', padding: '20px' }}>
      <div className="container" style={{ borderBottom: 'rgb(218, 218, 218) solid 1px' }}>
        <div className="row">
          <div className="col-lg-8 col-md-8 col-sm-6 col-xs-12">
            <div>
              <div style={{ marginBottom: '20px' }}>
                <img src="/images/zara.jpg" alt="Zara Fashion" className="img-responsive" />
              </div>
              <p>
                Zara Fashion offers a unique blend of style and elegance, providing the latest trends in clothing and accessories. Stay in vogue with Zara's curated collections that reflect the spirit of contemporary fashion.
              </p>
              <div className="contact-title">Contact Information:</div>
              <p className="contact-info">
                Phone 1: <a href="tel:+212770208201">+212 770 208 201</a>
              </p>
              <p className="contact-info">
                Phone 2: <a href="tel:+2120678961952">+212 067 896 1952</a>
              </p>
            </div>
          </div>

          <div className="col-lg-2 col-md-2 col-sm-6 col-xs-12">
            <div>
              <h3 className="text-center" style={{ fontWeight: 'bold' }}>Information</h3>
            </div>
            <ul className="text-center site-info" style={{ listStyle: 'none', padding: '0' }}>
              <li><a href="#">Promotion</a></li>
              <li><a href="#">New Product</a></li>
              <li><a href="#">Best Product</a></li>
              <li><a href="#">Our Store</a></li>
              <li><a href="#">Call Us</a></li>
              <li><a href="#">Delivery</a></li>
              <li><a href="#">Map</a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-2 col-sm-6 col-xs-12">
            <div>
              <h3 className="text-center" style={{ fontWeight: 'bold' }}>Tags</h3>
            </div>
            <ul className="text-center site-info" style={{ listStyle: 'none', padding: '0' }}>
              <li><a href="#">Men's Collection</a></li>
              <li><a href="#">Women's Fashion</a></li>
              <li><a href="#">Kids Apparel</a></li>
              <li><a href="#">Accessories</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Shipping Information</a></li>
              <li><a href="#">Store Locator</a></li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InfoSection;
