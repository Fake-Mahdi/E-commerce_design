import React from 'react';
import main from '../../json/main.json';
import NavBar from '../GlobalComponents/Navbar';
import SearchBar from '../GlobalComponents/SearchBar';
import CartProducts from './CartProducts';
import ProductFacture from './ProductFacture';

const MainContainer = () => {
    const {men, kids, women,product,acc } = main;
    const combinedArray = [ ...men, ...kids, ...women, ...product, ...acc];
    return (
   <div>

        <NavBar />
        <SearchBar products={combinedArray} />
        <div className='container'>
            <div className='row'>
            <CartProducts />
            <ProductFacture />
            </div>
        </div>
  
  </div>

    );
  };
  
  export default MainContainer;