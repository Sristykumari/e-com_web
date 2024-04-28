import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div>
        <div className="item">
            <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image}/></Link>
         <h4 className="product-title">{props.name}</h4>
         <div className="item-prices">
          <div className="item-prices-new">
          {props.old_price}
          </div>
         </div>
          <div className="item-prices-old">
          {props.new_price}
          </div>
    </div>
    </div>
  )
}

export default Item