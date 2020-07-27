import React from 'react';
import './headertwo.css';
import Location from '@material-ui/icons/LocationCity';
import { Link } from 'react-router-dom';


function HeaderTwo() {
    return (
        
        <nav className="headertwo">
            <div className="location_icon">
               <Location  /> 
             </div>
             <div className="header_location">
            
             <span className="headeroptionOne_location">Deliver To</span>
             <span className="headeroptionTwo_location">India</span>
             
         </div>
         <div className="offer_links"> 
             <Link to="/" className="offeroption">
              Today's Deals
            </Link>
            <Link to="/"  className="offeroption">
             Customer Service
            </Link> <Link to="/"  className="offeroption">
            Gift Cards
            </Link> <Link to="/"  className="offeroption">
                Registry
            </Link>
            <Link to="/"  className="offeroption">
                Sell
            </Link>
         </div>
         
         
        </nav>
    )
}

export default HeaderTwo
