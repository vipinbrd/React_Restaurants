import { Children, createContext, useState } from "react";

export const CartContext=createContext({});

export function  CartProvider({children}){
   const[cartData,setCartData]=useState([]);
   function insertItem(ele){
    setCartData((pre)=>{
        return [...pre,ele];
    })
   } 
  function deleteItem(itemId){
    setCartData((pre)=>{
        return pre.filter((ele)=>{
            return ele.id!==itemId;
        })
    })
  }
  
  return <CartContext.Provider value={{cartData,insertItem,deleteItem}}>{children}</CartContext.Provider>
}