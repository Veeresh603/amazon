import React from 'react';
import CarouseL from './CarouseL';
import './Home.css';

import Products from './Products';
import RechargeProducts from './RechargeProducts';
import EntertrainedCard from './EntertainedCard';

function Home() {
    return (
        <div>
        <div className="banner_img">
            <CarouseL />
           

        </div>
        
        
        <div className="product_list">
            <Products />
            <RechargeProducts />
            <EntertrainedCard />
            
           
        </div>
        </div>
    )
}

export default Home
