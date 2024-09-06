import React from 'react';
import '../../styles/style.css';

const CategoryList = () => {
  return (
    <div className="col-lg-2 col-md-3 col-sm-4 col-xs-12">
      <div className="content">
        <div className="text-center">
          <h2 style={{ fontWeight: 'bold', marginBottom: '10px', color: 'black' }}>Catégorie</h2>
        </div>
        <ul className="text-center" style={{ listStyle: 'none', padding: '20px', borderBottom: '1px solid rgb(185, 185, 185)' }}>
          <li><a href="#">Men's T-Shirts</a></li>
          <li><a href="#">Women's Dresses</a></li>
          <li><a href="#">Kid's Apparel</a></li>
          <li><a href="#">Casual Wear</a></li>
          <li><a href="#">Formal Attire</a></li>
          <li><a href="#">Outerwear</a></li>
          <li><a href="#">Footwear</a></li>
          <li><a href="#">Accessories</a></li>
          <li><a href="#">Sports Clothing</a></li>
          <li><a href="#">Winter Collection</a></li>
          <li><a href="#">Summer Essentials</a></li>
          <li><a href="#">Street Fashion</a></li>
          <li><a href="#">Designer Brands</a></li>
          <li><a href="#">Vintage Clothing</a></li>
          <li><a href="#">Ethnic Wear</a></li>
          <li><a href="#">Active Wear</a></li>
          <li><a href="#">Sustainable Fashion</a></li>
        </ul>
        <div style={{ marginTop: '10px' }} className="text-center">
          <img src="banner-right.jpg" className="img-responsive center-block" alt="" />
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
