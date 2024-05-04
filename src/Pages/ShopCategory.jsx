import React, { useContext, useReducer, useState } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdownicon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'
import { getSortedData } from '../gatSortedData'
import { reducer } from '../reducer'
import { getFilteredData } from '../getFilterData'

export const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const [isToggled, setIsToggled] = useState(false);

  
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  const [
    { sortBy, showEntireInventory, showFastDeliveryOnly },
    dispatch
  ] = useReducer(reducer, {
    sortBy: "none",
    showEntireInventory: false,
    showFastDeliveryOnly: false
  });

  const sortedData = getSortedData([...all_product], sortBy);
  const filteredData = getFilteredData(
    sortedData,
    showEntireInventory,
    showFastDeliveryOnly
  );
 

  return (
    <div className="shop-Category">
      <img src={props.banner} alt="" className="shopcatogory-banner" />
      <div className="shopCategory-indexSort">
        <div className="shopcategory-sort">
        <p>
          <span>Showing 1-12 </span>out of 36 products
        </p><p className='para'>sort by  <img src={dropdownicon} alt='' onClick={handleToggle} /></p>
        {isToggled && <fieldset>
            <legend>sort by:</legend>
            <label>
              <input
                type="radio"
                name="sort"
                onChange={() =>
                  dispatch({ type: "SORT", payload: "PRICE_LOW_TO_HIGH" })
                }
                checked={sortBy && sortBy === "PRICE_LOW_TO_HIGH"}
              />
                 Price - low to high
            </label>
            <label>
              <input
                type="radio"
                name="sort"
                onChange={() =>
                  dispatch({ type: "SORT", payload: "PRICE_HIGH_TO_LOW" })
                }
                checked={sortBy && sortBy === "PRICE_HIGH_TO_LOW"}
              />
                     Price - high to low
            </label>
            
            {/* <label>
              <input
                type="radio"
                name="sort"
                onChange={() =>
                  dispatch({ type: "SORT", payload: "CATEGORY_HIGH_TO_LOW" })
                }
                checked={sortBy && sortBy === "CATEGORY_HIGH_TO_LOW"}
              />
              Category - All
            </label> */}
          </fieldset>}
          {isToggled &&  <fieldset>
        <legend>filter:</legend>
        <label>
          <input
            type="checkbox"
            name="filter"
            onChange={() =>
              dispatch({ type: "FILTER", payload: "showEntireInventory" })
            }
            checked={showEntireInventory}
          />
          Include out of stock
        </label>
        <label>
          <input
            type="checkbox"
            name="filter"
            onChange={() =>
              dispatch({ type: "FILTER", payload: "showFastDeliveryOnly" })
            }
            checked={showFastDeliveryOnly}
          />
          Show items with fast delivery
        </label>
      </fieldset>}
          {/* {isToggled && 
          <ul className='ul-tag'>
          
            {filteredData.map(({ id, name, category, image, new_price, old_price,inStock, delivery }) => (
              <li className='li-tag'
                key={id}
              >
                <div>{name}</div>
                <div>price: &#8377; {new_price}</div>
                <div>avg category: {category}</div>
                {inStock ? <div>in stock</div> : <div>out of stock</div>}
                <div>{delivery}</div>
              </li>
              
            ))
            }
          </ul>
          } */}
        </div>
      </div>
      <div className="shopcategory-products">
        {filteredData.map((item, i) => {
          if (props.category === item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} inStock={item.inStock} delivery={item.delivery} />
          }
          else {
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
