import React from 'react';
import '../../styles/style.css';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'; 
import 'swiper/css/pagination'; 
import 'swiper/css/autoplay'; 
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function DisplayBestProduct({ products }) {
    const navigate = useNavigate();

    const handleButtonClick = (productId, productType) => {
        navigate(`/product/${productId}/${productType}`);
    };
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth' // Smooth scroll effect
        });
      };
    
    // Shuffle and slice the products array to get a random sample of 8 products
    const data = products.sort(() => 0.5 - Math.random()).slice(0, 8);

    return (
        <section style={{ marginTop: '25px' }}>
            <div className="text-center title3 make"><div className="text-center title3">Other Related</div></div>
            
            <div className="container swiper-container">
                <Swiper
                    style={{ marginTop: '25px', paddingBottom: '30px' }}
                    modules={[Autoplay, Pagination, Navigation]}
                    spaceBetween={10}
                    slidesPerView={4}
                    navigation={true} 
                    loop={true}
                    autoplay={{ delay: 3000 }}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                    }}
              
                >
                    {data.map((product) => (
                        <SwiperSlide key={product.id}>
                            <div 
                                onClick={() => handleButtonClick(product.id, product.type)} 
                                className="product-card"
                            >
                                <div className="card " onClick={scrollToTop}>
                                    <div className="card-img">
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
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

export default DisplayBestProduct;
