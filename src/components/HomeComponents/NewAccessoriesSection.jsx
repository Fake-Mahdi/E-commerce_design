import React from 'react';
import '../../styles/style.css';
import { useNavigate } from 'react-router-dom';

function NewAccessoriesSection({ accessories }) {
  // Shuffle and slice the accessories array to get a random sample of 8 products
  const data = accessories.sort(() => 0.5 - Math.random()).slice(0, 8);
  const navigate = useNavigate();

  const handleButtonClick = (productId, productType) => {
    navigate(`/product/${productId}/${productType}`);
  };

  // Map the data to create product cards
  const productCards = data.map(product => (
    <div 
      key={product.id} 
      onClick={() => handleButtonClick(product.id, product.type)} 
      className="col-lg-3 col-md-3 col-xs-12 col-sm-12"
    >
      <div className="card">
        <div className="card-img">
          {/* Use template literals or string concatenation to build the image source path */}
          <img 
            src={`/${product.productImage}`} 
            className="img-responsive" 
            alt={product.productName} 
          />
        </div>
        <div className="text-center card-title">{product.productName}</div>
        <div className="text-center card-prix">{product.productPrice}</div>
        <div className="text-center button">Buy Now</div>
      </div>
    </div>
  ));

  return (
    <section style={{ marginTop: '25px' }}>
      <div className="container">
        <div className="text-left" style={{ color: 'black', fontWeight: 'bold' }}>
          <h2 style={{ fontWeight: 'bold' }}>NEW ACCESSORIES</h2>
        </div>
        <div style={{ marginTop: '30px' }} className="row">
          {productCards} {/* Render the product cards here */}
        </div>
      </div>
    </section>
  );
}

export default NewAccessoriesSection;
