import React from 'react';
import NavBar from '../GlobalComponents/Navbar';
import SearchBar from '../GlobalComponents/SearchBar';
import Product from './Product';
import CategoryList from './CategoryList';
import FeaturesSection from '../GlobalComponents/FeaturesSection';
import InfoSection from '../GlobalComponents/InfoSection';
import Footer from '../GlobalComponents/Footer';
import Icone from '../GlobalComponents/icone';
import '../../styles/style.css';
import main from '../../json/main.json';

const MainContainer = () => {
  return (
<div>

    <div>
      <NavBar />
      <Icone />
      <SearchBar products={main.product} accessories={main.acc} />
      <div className="text-center">
        <h1>welcome to our store</h1>
      </div>
      <div className="row">
        <CategoryList />
        <Product products={main.product} accessories={main.acc} />
        {/* Add other content or components here if needed */}
      </div> 
    </div>
    <FeaturesSection/>
    <InfoSection/>
    <Footer/>
    
</div>
  );
};

export default MainContainer;
