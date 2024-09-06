import React, { useContext } from 'react';
import '../../styles/style.css';
import { useParams } from 'react-router-dom';
import CartContext from '../GlobalComponents/CartContext'

const DisplayProduct = ({ products }) => {
    const { addToCart , cart } = useContext(CartContext);

    const { id, type } = useParams();
    

    const idStr = String(id);

    
    const filteredItems = products.filter(item => {
        
        return item.type === type && String(item.id) === idStr;
    });
    
    // Ensure there is at least one item in filteredItems
    if (filteredItems.length === 0) {
        return <div>No product found</div>;
    }

    // Assuming filteredItems will have only one item
    const data = filteredItems[0];
    const handleAddToCart = () => {
        addToCart(data);
        
      };
      console.log(cart)

    return (
        <div className="contente" id="mass">
            <div>
                <img
                    src={`/${data.productImage}`} 
                    loading="lazy"
                    width="100%"
                    height="100%"
                    alt={data.productName}
                />
            </div>
            <div style={{ padding: '15px' }}>
                <h1 style={{ fontWeight: 'bold' }}>{data.productName}</h1>
                <h4 style={{ color: 'red' }}>{data.productPrice} MAD</h4>
                <p className="product-description">{data.productDescription || 'No description available.'}</p>
                <button
                    style={{
                        width: '100%',
                        borderRadius: '0px',
                        fontWeight: 'bold'
                    }}
                    type="button"
                    className="btn btn-danger"
                    onClick={handleAddToCart}
                >
                    Add To Cart
                </button>
            </div>
        </div>
    );
};

export default DisplayProduct;
