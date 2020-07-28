import React from 'react'
import './ProductRecharge.css';

function RechargeProducts() {
    return (
        <div className="boxlayout">
            <div className="title">
                <h1 className="titlenameOne">Donations, recharges, bills, medicine & more</h1>
            </div>
            <div className="insidebox">
                <div className="imagebox">
                <img  className="image" src="https://www.amazon.in/images/G/31/img19/AmazonPay/Boson/Sid/Covid/Donation_186x116._SY116_CB435243930_.jpg" alt=""></img>
                <h4 className="ethnic">Covid-19 Donations</h4>
                </div>
                <div className="imageboxone">
                <img  className="image" src="https://www.amazon.in/images/G/31/img17/AmazonPay/Ankit/gw/desktopcard/recharge_186_116._SY116_CB448565141_.jpg" alt=""></img>
                <h4 className="ethnic">Recharge & bills</h4>
                </div>

            </div>
            <div className="insidebox">
                <div className="imagebox">
                <img className="image" src="https://www.amazon.in/images/G/31/img17/AmazonPay/Ankit/gw/desktopcard/bills_186_116._SY116_CB448565146_.jpg" alt=""></img>
                <h4 className="ethnic">Bills</h4>
                </div>
                <div className="imageboxone">
                <img  className="image" src="https://www.amazon.in/images/G/31/img20/AmazonPay/Medicines_Icon_186x116_R._SY116_CB420120618_.jpg" alt=""></img>
                <h4 className="ethnic">Medicines</h4>
                </div>

            </div>

        </div>
        
    
        
        )
}

export default RechargeProducts
