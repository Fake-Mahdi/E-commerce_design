import React from 'react';
import '../../styles/style.css';
import { useNavigate } from 'react-router-dom';
function CollectionSection() {
  const navigate = useNavigate();
  const handleButtonClick = (productType) => {
    navigate(`/categories/${productType}`);
};
  return (
    <div>
      <section className="image">
        <div className="title text-center">WELCOME TO OUR STORE</div>
        <div className="title2 text-center">Shop now</div>
      </section>

      <section style={{ marginTop: '25px' }}>
        <div className="text-center title3">New collection</div>
        <div className="text-center paragraph">
          Introducing our new collection of sustainable activewear made from recycled materials. Feel good about
          your workouts and the environment with our stylish and eco-friendly pieces.
        </div>

        <div className="container">
          <div className="row" style={{ marginTop: '15px' }}>
            <div className="col-lg-3 col-md-3 col-xs-12 col-sm-12">
              <div className="fix" onClick={() => handleButtonClick("men")}>
                <img src="Fashion/1.jpg" className="img-responsive box" alt="Man Fashion" />
                <div className="absolute">
                  <div className="title4 text-center">Men Fashion</div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-xs-12 col-sm-12">
              <div className="fix" onClick={() => handleButtonClick("women")}>
                <img src="Fashion/2.jpg" className="img-responsive box" alt="Women Fashion" />
                <div className="absolute">
                  <div className="title4 text-center">Women Fashion</div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-xs-12 col-sm-12">
              <div className="fix" onClick={() => handleButtonClick("product")}>
                <img src="Fashion/3.jpg" className="img-responsive box" alt="Street Fashion" />
                <div className="absolute">
                  <div className="title4 text-center">Street Fashion</div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-xs-12 col-sm-12">
              <div className="fix" onClick={() => handleButtonClick("kids")}>
                <img src="Fashion/4.jpg" className="img-responsive box" alt="Teenagers Fashion" />
                <div className="absolute">
                  <div className="title4 text-center">Kids Fashion</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
  }
  
  export default CollectionSection;