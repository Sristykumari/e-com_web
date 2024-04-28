import React from 'react'
import './AddData.css'
import data_product from '../Assets/data'
import Item from '../Item/Item' 
const AddData = () => {

  return (
    <div className='allData'>
        <h1>Shop by Categories</h1>
        <hr/>
        <div className="populer-item">
            {data_product.map((item,i)=>{
           return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default AddData