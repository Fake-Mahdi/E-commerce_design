import React from 'react';
import '../../styles/style.css';
function BestSellingProductsSection() {
    return (
      <section style={{ marginTop: '25px' }}>
        <div className="text-center title3">Best selling products</div>
        <div className="text-center paragraph" style={{ color: 'black' }}>
          Introducing our new collection of sustainable activewear made from recycled materials. Feel good about
          your workouts and the environment with our stylish and eco-friendly pieces.
        </div>
        <div className="container">
          <div className="row" style={{ marginTop: '20px' }}>
            <div className="col-lg-3 col-md-3 col-xs-12 col-sm-12">
              <div className="card">
                <div className="card-img">
                  <img src="images/1.jpg" className="img-responsive" alt="Hobbie-costume" />
                </div>
                <div className="text-center card-title">Hobbie-costume</div>
                <div className="text-center card-prix">$55</div>
                <div className="button">Buy Now</div>
              </div>
            </div>
            {/* Repeat similar blocks for other items */}
          </div>
          <div style={{ marginTop: '10px' }} className="text-center">
            <button type="button" className="button2">View All</button>
          </div>
        </div>
      </section>
    );
  }
  
  export default BestSellingProductsSection;