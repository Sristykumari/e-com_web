import React from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull from '../Assets/star_dull_icon.png'

const ProductDisplay = (props) => {
    const {product} =props;
  return (
    <div className="product-display">
      <div className="productdiplay-left">
        <div className="productdiplay-img-list">
        <img src={product.image} alt=''/>
        <img src={product.image} alt=''/>
        <img src={product.image} alt=''/>
        <img src={product.image} alt=''/>
        </div>
        <div className="productdisplay-image">
        <img className="productdisplay-main-image" src={product.image} alt=''/> 
        </div>
        </div>  
      <div className="productdiplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
        <img src={star_icon} alt=''/>
        <img src={star_icon} alt=''/>
        <img src={star_icon} alt=''/>
        <img src={star_icon} alt=''/>
        <img src={star_dull} alt=''/>
        <p>(122)</p>
        </div>
        <div className="productdisplay-right-price">
            <div className="productdisplay-right-old-price">
                ${product.old_price}
            </div>
            <div className="productdisplay-right-new-price">
                ${product.new_price}
            </div>
        </div>
        <div className="productdisplay-right-description">
            All  lightweight usually knitted pullover shirt,close-fiting and a round neckline and short selevless,worn as an undershirt or outer garment
        </div>
            <div className="productdisplay-right-size">
               <h1>Slect Size</h1> 
               <div className="productdisplay-right-sizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
               </div>
            </div>
            <button>ADD TO CART</button>
            <p className="productdisplay-right-category"><span>Category:</span> Woman,T-Shirt,Crop Top</p>
            <p className="productdisplay-right-category"><span>Tag:</span> Modern,Letest</p>

      </div>
    </div>
  )
}

export default ProductDisplay