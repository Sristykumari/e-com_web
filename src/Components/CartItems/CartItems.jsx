import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
    const {getTotalAmount,all_product, cartItems, removeCart } = useContext(ShopContext)

    return (
        <div className='cartItem'>
            <div className="cartItem-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if(cartItems[e.id]>0)
                 {
                    return (<div>
                        <div className="cartItem-format cartItem-format-main">
                            <img src={e.image} alt='' className='carticon-product-icon' />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='cartItem-quantity'>{cartItems[e.id]}</button>
                            <p>${e.new_price*cartItems[e.id]}</p>
                            <img className='cartItem-remove-icon' src={remove_icon} onClick={() =>{removeCart(e.id)}} alt='' />
                        </div>
                        <hr />
                    </div>
                    )
                }
                return null;
            })
            }
            <div className="cartItems-down">
                <div className="cartItems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartItems-total-item">
                            <p>SubTotal</p>
                            <p>${getTotalAmount()}</p>
                        </div>
                        <hr/>
                        <div className="cartItems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr/>
                        <div className="cartItems-total-item">
                           <h3>Total</h3>
                           <h3>${getTotalAmount()}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHACKOUT</button>
                </div>
                <div className="cartItems-promocode">
                    <p>If you have promo code,Enter It here</p>
                    <div className="cartItem-promo-box">
                        <input type='text' placeholder='Promo code'/>
                        <button>Submit</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CartItems