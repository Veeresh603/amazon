import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './C_arousel.css';

function C_arousel() {
    return (
        <div className="carousel_banner">
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.amazon.com/images/G/01/AmazonExports/Fuji/2020/March/Fuji_TallHero_ShipATW_Modified_en_US_1x._CB419795291_.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className="banner_heading">First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.amazon.com/images/G/01/AmazonExports/Fuji/2019/April/Hero/Hero_Currency_EN_1X._CB466692681_.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  
</Carousel>
</div>     
    )
}

export default C_arousel
