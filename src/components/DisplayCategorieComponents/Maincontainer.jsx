import React from 'react';
import main from '../../json/main.json';
import NavBar from '../GlobalComponents/Navbar';
import SearchBar from '../GlobalComponents/SearchBar';
import DisplayCategorieProduct from './DisplayCategorieProduct';
import FeaturesSection from '../GlobalComponents/FeaturesSection';
import InfoSection from '../GlobalComponents/InfoSection';
import Footer from '../GlobalComponents/Footer';
import '../../styles/style.css';
import Icone from '../GlobalComponents/icone';
const MainContainer = () => {
    const {men, kids, women,product,acc } = main;
    const combinedArray = [ ...men, ...kids, ...women, ...product, ...acc];
    return (
    
  <div>
 
    <NavBar />
    <Icone />
    <SearchBar products={combinedArray} />
    <DisplayCategorieProduct products={combinedArray}  />
    <FeaturesSection/>
    <InfoSection/>
    <Footer/>

  </div>
    );
  };
  
  export default MainContainer;