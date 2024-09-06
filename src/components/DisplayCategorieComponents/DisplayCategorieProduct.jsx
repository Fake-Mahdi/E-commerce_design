import React from 'react';
import '../../styles/style.css';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function DisplayCategorieProduct({ products }) {
    const { type } = useParams();
    const navigate = useNavigate();
    const handleButtonClick = (productId, productType) => {
        navigate(`/product/${productId}/${productType}`);
      };
    
     const filteredItems = products.filter(product => {
        
     return product.type === type;
    });

    const productCards = filteredItems.map(product => (
        <div 
          key={product.id} 
          onClick={() => handleButtonClick(product.id, product.type)} 
          className="col-lg-3 col-md-3 col-xs-12 col-sm-6"
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

export default DisplayCategorieProduct;
