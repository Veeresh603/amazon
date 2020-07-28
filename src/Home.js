import React from 'react';
import CarouseL from './CarouseL';
import './Home.css';

import Products from './Products';

function Home() {
    return (
        <div>
        <div className="banner_img">
            <CarouseL />
           

        </div>
        
        
        <div className="product_list">
            <Products />
            
           
        </div>
        </div>
    )
}

export default Home
