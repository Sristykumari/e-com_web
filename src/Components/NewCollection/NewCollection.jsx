import React from 'react'
import './NewCollection.css'
import newcollection from '../Assets/new_collections'
import Item from '../Item/Item'

const NewCollection = () => {
  return (
    <div className="newCollection">
    <h1>New Collection</h1>
    <hr/>
    <div className="collections">
    {newcollection.map((item,i)=>{
           return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}inStock={item.inStock} delivery={item.delivery}/>
            })}
    </div>
    </div>
  )
}

export default NewCollection