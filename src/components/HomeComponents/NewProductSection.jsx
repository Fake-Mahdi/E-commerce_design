import React from 'react';
import '../../styles/style.css';
import { useNavigate } from 'react-router-dom';

function NewProductSection({ products }) {
  const navigate = useNavigate();

  const handleButtonClick = (productId, productType) => {
    navigate(`/product/${productId}/${productType}`);
  };

  // Shuffle and slice the products array to get a random sample of 8 products
  const data = products.sort(() => 0.5 - Math.random()).slice(0, 8);

  // Map the data to create product cards
  const productCards = data.map(product => (
    <div 
      key={product.id} 
      onClick={() => handleButtonClick(product.id, product.type)} 
      className="col-lg-3 col-md-3 col-xs-12 col-sm-12"
    >
      <div className="card">
        <div className="card-img">
          {/* Use template literals to build the image source path */}
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
      <div className="text-center title3">New Product</div>
      <div className="text-center paragraph" style={{ color: 'black' }}>
        Introducing our new collection of sustainable activewear made from recycled materials. Feel good about
        your workouts and the environment with our stylish and eco-friendly pieces.
      </div>
      <div className="container">
        <div className="row" style={{ marginTop: '20px' }}>
          {productCards} {/* Render the product cards here */}
        </div>
        <div style={{ marginTop: '10px' }} className="text-center">
          <button type="button" className="button2">View All</button>
        </div>
      </div>
    </section>
  );
}

export default NewProductSection;
