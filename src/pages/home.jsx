import React from 'react';
import Navbar from '../components/HomeComponents/Navbar';
import CollectionSection from '../components/HomeComponents/CollectionSection';
import NewProductSection from '../components/HomeComponents/NewProductSection';
import main from '../json/main.json';
import TestimonialsSection from '../components/HomeComponents/TestimonialsSection';
import NewAccessoriesSection from '../components/HomeComponents/NewAccessoriesSection';
import Footer from '../components/HomeComponents/Footer';
import { CartProvider } from '../components/GlobalComponents/CartContext';
import Icone from '../components/GlobalComponents/icone';
function Home()
{
    return(
        <CartProvider>
        <div className='page_chatcher'>
            <Navbar/>
            <Icone/>
            <CollectionSection/>
            <NewProductSection products={main.product} />
            <NewAccessoriesSection accessories={main.acc} />
            <TestimonialsSection/>
            <Footer/>
        </div>
        </CartProvider>
    );
}
export default Home;