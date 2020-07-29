import React from 'react';
import './C_arousel.css';

function C_arousel() {
    return (
      <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel" interval="1000">
      <div class="carousel-inner">
        <div class="carousel-item active">
        <img
          className="d-block w-100"
          src="https://www.amazon.in/images/G/31/prime/Events/Pug/Leadup/GW/3000x1200_main_1x._CB409438475_.jpg"
          alt="First slide"
        />
       
        </div>
        <div class="carousel-item active">
        <img
          className="d-block w-100"
          src="https://www.amazon.in/images/G/31/img19/AmazonPay/Boson/Sid/UPI/July/DesktopHero_1500x600_IMC_Unrec._CB428573416_.jpg"
          alt="Second slide"
        />
        </div>
        <div class="carousel-item active">
        <img
          className="d-block w-100"
          src="https://www.amazon.in/images/G/31/img17/Biss/2020/GW/Herotator/1218154_1500x600_2._CB430975671_.jpg"
          alt="Third slide"
        />
        </div>
        <div class="carousel-item active">
        <img
          className="d-block w-100"
          src="https://www.amazon.in/images/G/31/img20/Wireless/Avicii/July/PreOrder/28th/Prebooknow/V214721272_IN_WLME_Avicii_LP_DesktopTallHero_1500x600_7._CB409789003_.jpg"
          alt="Fourth slide"
        />
        </div>
      </div>
    </div>
    )
    
}

export default C_arousel
