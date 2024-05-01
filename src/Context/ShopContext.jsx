import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product"

export const ShopContext = createContext(null);//initialise with null

const getDefaltCart = () =>{
    let cart = {};
    for(let index = 0; index < all_product.length+1; index++){
     cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) =>{ 
    const [cartItems,setCartItems] = useState(getDefaltCart());
    console.log(cartItems)

    const addToCart = (itemId) =>{
        setCartItems((prev) =>({...prev,[itemId]:prev[itemId]+1}))
    }
    const removeCart = (newitemId) =>{
        setCartItems((prev) =>({...prev,[newitemId]:prev[newitemId]-1}))
    }
   
    const getTotalAmount = () =>{
      let totalAmount  = 0;
      for(const item in cartItems)
      {
        if(cartItems[item]>0){
            let itemInfo = all_product.find((product)=>product.id=== Number(item))
            totalAmount += itemInfo.new_price* cartItems[item];
            return totalAmount;
        }
      }
    }
     
    const getTotalCartItems = () =>{
        let totalItem = 0;
        const values = Object.values(cartItems);
        for (const item of values) {
            if (item > 0) {
                totalItem += item;
            }
        }
        return totalItem;
    }
    const contextValue = {getTotalCartItems,getTotalAmount,all_product,cartItems,addToCart,removeCart};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;