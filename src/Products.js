import React from 'react'
import './Products.css';

function Products() {
    return (
        <div className="boxlayout">
            <div className="title">
                <h1 className="titlename">Women's Home Wear Basics</h1>
            </div>
            <div className="insidebox">
                <div className="imagebox">
                <img  className="image" src="https://www.amazon.in/images/G/31/img20/GW-BasicsForMenWomen/1_1X._SY116_CB430251838_.jpg" alt=""></img>
                <h4 className="ethnic">Everyday Ethnic Wear</h4>
                </div>
                <div className="imageboxone">
                <img  className="image" src="https://www.amazon.in/images/G/31/img20/GW-BasicsForMenWomen/2_1X._SY116_CB430251832_.jpg" alt=""></img>
                <h4 className="ethnic">Comfy tops & tees</h4>
                </div>

            </div>
            <div className="insidebox">
                <div className="imagebox">
                <img className="image" src="https://www.amazon.in/images/G/31/img20/GW-BasicsForMenWomen/3_1X._SY116_CB430251832_.jpg" alt=""></img>
                <h4 className="ethnic">Loungewear</h4>
                </div>
                <div className="imageboxone">
                <img  className="image" src="https://www.amazon.in/images/G/31/img20/GW-BasicsForMenWomen/4_1X._SY116_CB430251832_.jpg" alt=""></img>
                <h4 className="ethnic">Flipflops</h4>
                </div>

            </div>

        </div>
        
    
        
        )
}

export default Products
