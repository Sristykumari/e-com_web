import React from 'react'
import './Breadcrum.css'
import arrowicon from '../Assets/breadcrum_arrow.png'

const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className="breadcrum">
        Home
        <img src={arrowicon} alt=''/>SHOP <img src={arrowicon} alt=''/>
        {product.category} <img src={arrowicon} alt=''/> {product.name}
        </div>
  )
}

export default Breadcrum