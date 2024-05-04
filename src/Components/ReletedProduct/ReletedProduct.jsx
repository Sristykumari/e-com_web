import React from 'react'
import './ReletedProduct.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'

const ReletedProduct = () => {
  return (
    <div className="reletedProduct">
        <h1>Releted Products</h1>
        <hr/>
        <div className="reletedProduct-item">
          {data_product.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}inStock={item.inStock} delivery={item.delivery}/>
          })}   
        </div>
        </div>
  )
}

export default ReletedProduct