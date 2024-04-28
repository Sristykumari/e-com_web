import React from 'react'
import './Offers.css'
import tshirt from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div>
        <div className="offers">
            <div className="offers-left">
                <h1>Exclusive</h1>
                <h1>Offers For You</h1>
                <p>Only On Best Seller Product</p>
                <button>Check Now</button>
            </div>
            <div className="offers-right">
                <img src={tshirt} alt=""/>
            </div>
        </div>
    </div>
  )
}

export default Offers