import React from 'react';
import delivaryMan from '../../images/Image/Group 1151.png';
import delivaryManName from '../../images/Image/Group 1152.png';
import './ShippingPrograss.scss'

const ShippingPrograss = () => {
    return (
        <div className="shipping_area">
           <div className="shipping_img">
               <img src={delivaryMan} alt="" />
           </div>
           <div className="shipping_prograss_bar">
               <div className="bar_item">
                   <h4>Your Location</h4>
                   <small>Rd no 107</small>
               </div>
               <div className="bar_item">
                   <h4>Shop Address</h4>
                   <small>Gulshan Plaza Restuara GPR</small>
               </div>
           </div>
           <div className="delivary_time">
               <h2>9:30</h2>
               <small>Estimated delivery time</small>
           </div>
           <div className="delivery_man">
               <div className="delivery_man_img">
                   <img src={delivaryManName} alt="" />
               </div>
               <div className="delivery_man_name">
                   <h3>Hamim</h3>
                   <small>Your Rider</small>
               </div>
           </div>
           <button className="btn btn-bg">Contact</button>
        </div>
    );
};

export default ShippingPrograss;