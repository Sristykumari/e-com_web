import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdownicon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'

export const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  
  
  return (
    <div className="shop-Category">
      <img src={props.banner} alt="" className="shopcatogory-banner"/>
      <div className="shopCategory-indexSort">
        <p>
          <span>Showing 1-12</span>out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort By <img src={dropdownicon} alt=''/>
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item,i)=>{
          if(props.category === item.category){
           return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          }
          else{
            return null;
          }
        })}
      </div>
      <div className="shopcatogory-loadmore">
        Explore More
      </div>
      </div>
  )
}
