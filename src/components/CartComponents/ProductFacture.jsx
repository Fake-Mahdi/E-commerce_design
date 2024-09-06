import React, { useContext } from 'react';
import CartContext from '../GlobalComponents/CartContext';
import '../../styles/style.css';

const ProductFacture = () => {
  const { cart } = useContext(CartContext);

  // Calculate the number of items
  const numberOfItems = cart.length;

  // Calculate the total price, ensuring the item price is treated as a number
  const totalPrice = cart.reduce((total, item) => {
    // Ensure item.productPrice is a number
    const price = parseFloat(item.productPrice) || 0;
    return total + price;
  }, 0).toFixed(2); // Use toFixed(2) only on the final result

  return (
    <div className='col-lg-4 col-md-4 col-xs-12 col-sm-12'>
      <div className="card-container">
        <h1 className="card-title text-center">Total du panier</h1>
        <div className="card-content">
          <div className="card-item">
            <span>Article Number:</span>
            <span>{numberOfItems} {numberOfItems === 1 ? 'element' : 'elements'}</span>
          </div>
          <div className="card-item">
            <span>Livraison Gratuit</span>
          </div>
          <div className="card-item">
            <span>Total (HT):</span>
            <span>{totalPrice} MAD</span>
          </div>
        </div>
        <button className="card-button">COMMANDER</button>
      </div>
    </div>
  );
};

export default ProductFacture;
