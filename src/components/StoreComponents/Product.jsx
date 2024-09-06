import React from 'react';
import '../../styles/style.css';
import { useNavigate } from 'react-router-dom';
const Product = ({products , accessories}) => {
  const navigate = useNavigate();
  const handleButtonClick = (productId, productType) => {
    navigate(`/product/${productId}/${productType}`);
  };
    const mergedArray = [...products, ...accessories];

    // Declare an array to store DOM elements
    const productCards = [];
  
    // Use a for loop to create product cards
    for (let i = 0; i < mergedArray.length; i++) {
      const data = mergedArray[i];
      productCards.push(
        <div onClick={() => handleButtonClick(data.id, data.type)} className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
          <div  className="card">
            <div className="card-image">
              <img
                src={data.productImage}
                loading="lazy"
                alt={data.productName}
                className="img-responsive"
              />
            </div>
            <div
              className="card-title text-center"
              style={{ fontWeight: 'bold', color: 'black', padding: '5px' }}
            >
              {data.productName}
            </div>
            <div
              className="prix text-center"
              style={{ fontWeight: 'bold', color: 'red', padding: '3px' }}
            >
              {data.productPrice}
            </div>
            <div
              style={{ marginTop: '5px' }}
              className="button"
              data-index={data.id}
              data-type={data.type}
            >
              Buy Now
            </div>
          </div>
        </div>
      );
    }

  return (
    <div className="col-lg-10 col-md-8 col-sm-8 col-xs-12" style={{ padding: '50px' }}>
      <div className="row">
        <div id="element">
        {productCards}
        </div>
      </div>
    </div>
  );
};

export default Product;