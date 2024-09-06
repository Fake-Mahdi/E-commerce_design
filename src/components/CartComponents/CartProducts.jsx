import React, { useContext } from 'react';
import CartContext from '../GlobalComponents/CartContext';
import '../../styles/style.css';

const CartProducts = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  console.log('Cart in CartProducts:', cart); // Check cart data on this page

  return (
    <div className='col-lg-8 col-md-8 col-xs-12 col-sm-12'>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Product Image</th>
              <th>Price</th>
              <th>Subtotal</th>
              <th>Actions</th> {/* New column for delete button */}
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td>
                  <img 
                    src={`/${item.productImage}`} 
                    alt={item.productName} 
                    style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '50%' }}
                    className='center-block' 
                  />
                </td>
                <td>{item.productPrice} MAD</td>
                <td>{item.productPrice} MAD</td> {/* Adjust subtotal calculation if needed */}
                <td>
                  <button 
                    className="btn tex-center btn-danger" 
                    onClick={() => removeFromCart(item.id)} // Call removeFromCart function
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CartProducts;
