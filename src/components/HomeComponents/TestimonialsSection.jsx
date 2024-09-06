import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper and SwiperSlide components
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import '../../styles/style.css'; // Custom styles

const testimonials = [
  {
    id: 1,
    text: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."`,
    name: "Name Surname",
    position: "Position, Company name",
    image: "Fashion/1.jpg"
  },
  {
    id: 2,
    text: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."`,
    name: "Name Surname",
    position: "Position, Company name",
    image: "Fashion/2.jpg"
  },
  {
    id: 3,
    text: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."`,
    name: "Name Surname",
    position: "Position, Company name",
    image: "Fashion/3.jpg"
  }
];

// Duplicate testimonials to create 6 slides
const testimonialSlides = [...testimonials, ...testimonials];

const TestimonialCard = ({ text, name, position, image }) => (
  <div style={{ border: '1px solid black', padding: '20px', margin: '5px' }}>
    <div style={{ marginBottom: '15px', color: 'gold' }}>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
    </div>
    <p style={{ color: 'black', fontSize: '17px', fontWeight: '400', margin: '7px' }}>{text}</p>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src={image} alt="Customer" style={{ borderRadius: '50%', height: '50px', width: '50px' }} />
      <div style={{ marginLeft: '10px' }}>
        <div style={{ fontSize: '15px', fontWeight: 'bold' }}>{name}</div>
        <div style={{ fontSize: '15px' }}>{position}</div>
      </div>
    </div>
  </div>
);

const TestimonialsSwiper = () => (
  <div>
      <div className="text-center title3">Customer testimonials</div>
      <div className="text-center paragraph">
        We take pride in providing our customers with the highest quality handmade products from local artisans.
        We believe that every piece tells a unique story and reflects the passion and creativity of the artisan
        who made it. Don't just take our word for it - hear what our satisfied customers have to say about their shopping
      </div>
   
    
  <Swiper 
    style={{ marginTop: '25px' }}
    modules={[Autoplay]}
    spaceBetween={15}
    slidesPerView={4} // 4 slides per view on large screens
    loop={true} // Enable looping
    autoplay={{ delay: 3000 }} // Autoplay every 5 seconds
    breakpoints={{
      320: { slidesPerView: 1 }, // 1 slide per view on small screens
      640: { slidesPerView: 2 }, // 2 slides per view on slightly larger screens
      768: { slidesPerView: 3 }, // 3 slides per view on medium screens
      1024: { slidesPerView: 4 }, // 4 slides per view on larger screens
    }}
    
  >
    {testimonialSlides.map(({ id, text, name, position, image }, index) => (
      <SwiperSlide key={index}>
        <TestimonialCard text={text} name={name} position={position} image={image} />
      </SwiperSlide>
    ))}
  </Swiper>
  </div>
);

export default TestimonialsSwiper;
